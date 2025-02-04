import {
    BookIcon,
    DicesIcon,
    Frame,
    PlusIcon,
    Shapes,
    UsersIcon,
    VideoIcon,
} from 'lucide-react';

import { NavUser } from '@/Components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/Components/ui/sidebar';
import { router, usePage } from '@inertiajs/react';
import { useCallback } from 'react';
import { NavSimple } from './nav-simple';
import { Button } from './ui/button';

const data = {
    user: {
        name: 'shadcn',
        email: 'm@example.com',
        avatar: '/avatars/shadcn.jpg',
    },
    projects: [
        {
            name: 'Beranda',
            url: '/dashboard',
            icon: Frame,
        },
        {
            name: 'Pustaka',
            url: '/pustaka',
            icon: BookIcon,
        },
        {
            name: 'Video',
            url: '/video',
            icon: VideoIcon,
        },
        {
            name: 'Kreatif',
            url: '/eksplorasi',
            icon: Shapes,
        },
        {
            name: 'Kuis',
            url: '/quiz',
            icon: DicesIcon,
        },
        {
            name: 'Komunitas',
            url: '/komunitas',
            icon: UsersIcon,
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const user = usePage().props.auth.user as any;
    const goToCreatePost = useCallback(() => {
        router.visit('/posting');
    }, []);

    return (
        <Sidebar variant="sidebar" {...props}>
            <SidebarHeader className="my-6">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            className="hover:cursor-default hover:bg-transparent focus:bg-transparent"
                            size="lg"
                            asChild
                        >
                            <a href="#">
                                <div className="flex aspect-square size-12 items-center justify-center rounded-lg text-sidebar-primary-foreground">
                                    <img
                                        src="/images/logo.png"
                                        className="object-fit size-full"
                                    />
                                </div>
                                <div className="grid flex-1 text-left leading-tight">
                                    <span className="truncate text-2xl font-semibold">
                                        EntrePrenix
                                    </span>
                                    <span className="truncate text-sm">
                                        LIDM 2025
                                    </span>
                                </div>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent className="mt-6">
                <Button
                    onClick={goToCreatePost}
                    className="mx-4 mb-4 shadow-xl"
                >
                    <PlusIcon />
                    Buat Postingan
                </Button>
                <NavSimple projects={data.projects} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser
                    user={{
                        name: user.name,
                        email: user.email,
                        photo: user.photo,
                        // avatar: user.avatar
                    }}
                />
            </SidebarFooter>
        </Sidebar>
    );
}
