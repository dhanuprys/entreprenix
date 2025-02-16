import { AspectRatio } from '@/Components/ui/aspect-ratio';
import { Card, CardContent, CardHeader } from '@/Components/ui/card';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

interface BookEntity {
    coverSrc: string;
    title: string;
    description: string;
    url: string;
}

const promotionBooks: BookEntity[] = [
    {
        coverSrc: '/images/book.jpg',
        title: 'The Book of Art',
        description: 'Kumpulan karya kreatif',
        url: '/kreatif',
    },
];

const supportBooks: BookEntity[] = [
    {
        coverSrc: '/images/book.jpg',
        title: 'The Book of Art',
        description: 'Kumpulan karya kreatif',
        url: '/kreatif',
    },
];

export default function ReferencePage() {
    return (
        <AuthenticatedLayout>
            <Head title="Pustaka" />

            <div className="space-y-10">
                <Card className="mx-4">
                    <CardHeader>
                        <h3 className="text-2xl font-semibold">Pustaka</h3>
                    </CardHeader>
                    <CardContent className="grid grid-cols-5 items-center gap-4">
                        <div className="col-span-full md:col-span-3 md:space-y-4">
                            <h1 className="text-lg md:text-4xl">
                                Kata Hari Ini
                            </h1>
                            <p className="hidden text-muted-foreground md:block">
                                Pustaka adalah tempat untuk mengeksplorasi
                                pengetahuan atas berbagai ide baru. Dengan
                                pustaka, Anda dapat mencari informasi, berbagi
                                pengetahuan, dan menginspirasi diri Anda.
                            </p>
                            <p className="text-lg font-semibold text-muted-foreground">
                                "Menjadi wirausaha bukan sekadar mencari
                                keuntungan, melainkan menciptakan nilai yang
                                berarti bagi masyarakat; mulailah dari mimpi
                                kecil, dan biarkan kerja kerasmu menjadikannya
                                besar."
                            </p>
                        </div>
                        <img
                            src="/images/idea.jpg"
                            className="col-span-2 hidden size-full object-contain md:block"
                        />
                    </CardContent>
                </Card>

                <div className="mx-4 space-y-8">
                    <h3 className="scroll-m-20 pb-2 text-xl font-semibold tracking-tight first:mt-0 md:text-2xl">
                        Modul Pembelajaran Promosi
                    </h3>
                    <div className="grid grid-cols-3 gap-x-4 gap-y-8 md:grid-cols-4 md:gap-x-8">
                        {promotionBooks.map((book) => (
                            <BookCard book={book} />
                        ))}
                    </div>
                </div>

                <div className="mx-4 space-y-8">
                    <h3 className="scroll-m-20 pb-2 text-xl font-semibold tracking-tight first:mt-0 md:text-2xl">
                        Buku Penunjang
                    </h3>
                    <div className="grid grid-cols-3 gap-x-4 gap-y-8 md:grid-cols-4 md:gap-x-8">
                        {supportBooks.map((book) => (
                            <BookCard book={book} />
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

function BookCard({ book }: { book: any }) {
    return (
        <a target="_blank" href={book.url} className="group">
            <AspectRatio
                ratio={3 / 4}
                className="rounded-xl border bg-muted group-hover:cursor-pointer group-hover:shadow-xl"
            >
                <img src={book.coverSrc} className="size-full object-contain" />
            </AspectRatio>
            <div className="mt-4">
                <h4 className="text-center font-semibold md:text-lg">
                    {book.title}
                </h4>
                <p className="text-muted-foreground"></p>
            </div>
        </a>
    );
}
