import { cn } from '@/Lib/utils';
import { Link } from '@inertiajs/react';
import {
    BookIcon,
    DicesIcon,
    FrameIcon,
    PlusIcon,
    ShapesIcon,
    UsersIcon,
    VideoIcon,
} from 'lucide-react';
import { Button } from './ui/button';

const data = [
    {
        name: 'Beranda',
        url: '/dashboard',
        icon: FrameIcon,
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
        icon: ShapesIcon,
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
];

export default function BottomNavigation({
    withCreatePostButton,
}: {
    withCreatePostButton?: boolean;
}) {
    return (
        <div className="fixed bottom-0 left-0 z-50 w-screen md:hidden">
            {withCreatePostButton && (
                <div className="flex justify-end">
                    <Link href="/posting">
                        <Button className="m-5 size-14 rounded-full !p-2 shadow-xl">
                            <PlusIcon />
                        </Button>
                    </Link>
                </div>
            )}
            <div className="flex justify-around border-t bg-white px-6">
                {data.map((item) => (
                    <Link
                        key={item.url}
                        href={item.url}
                        className={cn(
                            'my-2 rounded-xl p-3',
                            window.location.pathname.startsWith(item.url) &&
                                'bg-indigo-500/50',
                        )}
                    >
                        <item.icon className="size-5" />
                    </Link>
                ))}
            </div>
        </div>
    );
}
