import { AspectRatio } from '@/Components/ui/aspect-ratio';
import { Button } from '@/Components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from '@/Components/ui/card';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

const data = [
    {
        imgSrc: '/images/video.jpg',
        title: 'Video',
        description: 'Belajar melalui video kreatif',
        url: '/video',
    },
    {
        imgSrc: '/images/creative.jpg',
        title: 'Kreatif',
        description: 'Kumpulan karya kreatif',
        url: '/eksplorasi',
    },
    {
        imgSrc: '/images/quiz.jpg',
        title: 'Kuis',
        description: 'Ukur Kemampuan Melalui Kuis Interaktif',
        url: '/quiz',
    },
    {
        imgSrc: '/images/community.jpg',
        title: 'Komunitas',
        description: 'Berinteraksi dan bertukar ide',
        url: '/komunitas',
    },
];

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="mx-4 space-y-8">
                <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                    Apa yang ingin anda
                    <br />
                    lakukan hari ini?
                </h2>
                <Card>
                    <CardHeader>
                        <h3 className="text-2xl font-semibold">Pustaka</h3>
                    </CardHeader>
                    <CardContent className="grid grid-cols-5 items-center gap-4">
                        <div className="col-span-3 md:space-y-4">
                            <h1 className="text-lg md:text-4xl">
                                Mengeksplorasi pengetahuan atas berbagai ide
                                baru
                            </h1>
                            <p className="hidden text-muted-foreground md:block">
                                Pustaka adalah tempat untuk mengeksplorasi
                                pengetahuan atas berbagai ide baru. Dengan
                                pustaka, Anda dapat mencari informasi, berbagi
                                pengetahuan, dan menginspirasi diri Anda.
                            </p>
                            <Button
                                className="hidden md:block"
                                variant="outline"
                            >
                                BUKA
                            </Button>
                        </div>
                        <img
                            src="/images/book.jpg"
                            className="col-span-2 size-full object-contain"
                        />
                    </CardContent>
                </Card>
                <div className="grid grid-cols-2 gap-2 md:gap-8">
                    {data.map((item, index) => (
                        <VerticalCard
                            key={index}
                            imgSrc={item.imgSrc}
                            title={item.title}
                            description={item.description}
                            url={item.url}
                        />
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

function VerticalCard({
    imgSrc,
    title,
    description,
    url,
}: {
    imgSrc: string;
    title: string;
    description: string;
    url: string;
}) {
    return (
        <Link href={url}>
            <Card className="hover:shadow-xl">
                <CardHeader>
                    <AspectRatio ratio={4 / 3}>
                        <img
                            src={imgSrc}
                            className="size-full object-contain"
                        />
                    </AspectRatio>
                </CardHeader>
                <CardContent>
                    <h3 className="text-center text-2xl font-semibold">
                        {title}
                    </h3>
                    <p className="text-center text-sm md:text-base">
                        {description}
                    </p>
                </CardContent>
                <CardFooter className="hidden md:block">
                    <Button variant="outline" className="w-full">
                        BUKA
                    </Button>
                </CardFooter>
            </Card>
        </Link>
    );
}
