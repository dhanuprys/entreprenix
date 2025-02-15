import { AppSidebar } from '@/Components/app-sidebar';
import BottomNavigation from '@/Components/bottom-navigation';
import { Avatar, AvatarFallback, AvatarImage } from '@/Components/ui/avatar';
import { SidebarInset, SidebarProvider } from '@/Components/ui/sidebar';
import { useIsMobile } from '@/Hooks/use-mobile';
import { cn } from '@/Lib/utils';
import { Link, usePage } from '@inertiajs/react';
import { PropsWithChildren, ReactNode } from 'react';

export default function Authenticated({
    header,
    withSafeWidth = true,
    withBottomPop = true,
    children,
}: PropsWithChildren<{
    header?: ReactNode;
    withSafeWidth?: boolean;
    withBottomPop?: boolean;
}>) {
    const user = usePage().props.auth.user as any;
    const isMobile = useIsMobile();

    return (
        <SidebarProvider>
            <BottomNavigation withCreatePostButton={withBottomPop} />
            <AppSidebar className="hidden md:block" />
            <SidebarInset>
                <header className="flex h-32 justify-between bg-gradient-to-b from-blue-700 to-blue-500 px-4 pt-4 md:hidden">
                    <div className="text-white">
                        <span>Halo,</span>
                        <br />
                        <h3 className="text-xl font-semibold">{user.name}</h3>
                    </div>
                    <Link href="/profile">
                        <Avatar className="size-14">
                            <AvatarImage src={`/storage/${user.photo}`} />
                            <AvatarFallback>EP</AvatarFallback>
                        </Avatar>
                    </Link>
                </header>
                <main
                    className={cn(
                        'pt-8',
                        withSafeWidth && 'pb-24',
                        isMobile && '-translate-y-5 rounded-t-3xl bg-white',
                    )}
                >
                    <div
                        className={cn(withSafeWidth && 'mx-auto max-w-[60rem]')}
                    >
                        {children}
                    </div>
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
}
