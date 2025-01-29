import { AppSidebar } from '@/Components/app-sidebar';
import BottomNavigation from '@/Components/bottom-navigation';
import { SidebarInset, SidebarProvider } from '@/Components/ui/sidebar';
import { useIsMobile } from '@/Hooks/use-mobile';
import { cn } from '@/Lib/utils';
import { usePage } from '@inertiajs/react';
import { PropsWithChildren, ReactNode } from 'react';

export default function Authenticated({
    header,
    withSafeWidth = true,
    children,
}: PropsWithChildren<{ header?: ReactNode; withSafeWidth?: boolean }>) {
    const user = usePage().props.auth.user;
    const isMobile = useIsMobile();

    return (
        <SidebarProvider>
            <BottomNavigation />
            <AppSidebar className="hidden md:block" />
            <SidebarInset>
                {isMobile && (
                    <header className="h-32 bg-blue-500 px-4">
                        HELLO BRO
                    </header>
                )}
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
