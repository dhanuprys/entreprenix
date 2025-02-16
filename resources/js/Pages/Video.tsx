import { AspectRatio } from '@/Components/ui/aspect-ratio';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardHeader } from '@/Components/ui/card';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PlayIcon } from 'lucide-react';

interface VideoEntity {
    youtubeId: string;
    coverSrc: string;
    title: string;
    description: string;
    url: string;
}

const promotionVideos: VideoEntity[] = [
    {
        youtubeId: '/images/book.jpg',
        coverSrc: '',
        title: 'The Book of Art',
        description: 'Kumpulan karya kreatif',
        url: 'https://youtube.com',
    },
];

const supportVideos: VideoEntity[] = [
    {
        youtubeId: '/images/book.jpg',
        coverSrc: '',
        title: 'The Book of Art',
        description: 'Kumpulan karya kreatif',
        url: 'https://youtube.com',
    },
];

export default function VideoPage() {
    return (
        <AuthenticatedLayout>
            <Head title="Video" />

            <div className="space-y-10">
                <Card className="mx-4">
                    <CardHeader>
                        <h3 className="text-2xl font-semibold">
                            Video Pembelajaran
                        </h3>
                    </CardHeader>
                    <CardContent className="grid grid-cols-5 items-center gap-4">
                        <div className="col-span-full space-y-4 md:col-span-3">
                            <h1 className="text-lg md:text-4xl">
                                Lelah Membaca?
                            </h1>
                            <p className="text-muted-foreground">
                                Belajar dengan tampilan visual dan interaktif
                                melalui video pembelajaran. Dengan video
                                pembelajaran, Anda dapat mempelajari berbagai
                                hal secara interaktif dan mengembangkan
                                kemampuan visual Anda.
                            </p>
                            <Button size="lg">
                                Jelajahi
                                <PlayIcon />
                            </Button>
                        </div>
                        <img
                            src="/images/video2.jpg"
                            className="object-fit col-span-2 hidden size-full md:block"
                        />
                    </CardContent>
                </Card>

                <div className="mx-4 space-y-8">
                    <h3 className="scroll-m-20 pb-2 text-xl font-semibold tracking-tight first:mt-0 md:text-2xl">
                        Video Edukatif Promosi
                    </h3>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 md:gap-x-8">
                        {promotionVideos.map((video) => (
                            <VideoCard key={video.youtubeId} video={video} />
                        ))}
                    </div>
                </div>

                <div className="mx-4 space-y-8">
                    <h3 className="scroll-m-20 pb-2 text-xl font-semibold tracking-tight first:mt-0 md:text-2xl">
                        Video Penunjang
                    </h3>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 md:gap-x-8">
                        {supportVideos.map((video) => (
                            <VideoCard key={video.youtubeId} video={video} />
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

function VideoCard({ video }: { video: VideoEntity }) {
    return (
        <a target="_blank" href={video.url} className="group">
            <AspectRatio
                ratio={16 / 9}
                className="relative rounded-xl border bg-muted group-hover:cursor-pointer group-hover:shadow-xl"
            >
                <img
                    src={video.coverSrc}
                    className="size-full object-contain"
                />
                <div className="group-hover absolute left-0 top-0 flex size-full items-center justify-center bg-muted/20 opacity-0 transition group-hover:opacity-100">
                    <div className="flex size-10 items-center justify-center rounded-full bg-white">
                        <PlayIcon />
                    </div>
                </div>
            </AspectRatio>
            <div className="mt-4">
                <h4 className="text-center font-semibold md:text-xl">
                    {video.title}
                </h4>
                <p className="text-muted-foreground"></p>
            </div>
        </a>
    );
}
