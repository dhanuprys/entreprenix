import { Card, CardContent, CardHeader } from '@/Components/ui/card';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { FaTelegramPlane } from 'react-icons/fa';
import {
    IoLogoInstagram,
    IoLogoTiktok,
    IoLogoWhatsapp,
    IoLogoYoutube,
} from 'react-icons/io5';
import { IconType } from 'react-icons/lib';

export default function CommunityPage() {
    return (
        <AuthenticatedLayout>
            <Head title="Komunitas" />

            <div className="space-y-10">
                <Card className="mx-4">
                    <CardHeader>
                        <h3 className="text-2xl font-semibold">Komunitas</h3>
                    </CardHeader>
                    <CardContent className="grid grid-cols-5 items-center gap-4">
                        <div className="col-span-full space-y-4 md:col-span-3">
                            <h1 className="text-lg md:text-4xl">
                                Terhubung Dengan Semua Orang
                            </h1>
                            <p className="text-muted-foreground">
                                Perluas jaringan bisnis Anda dan jalin hubungan
                                strategis dengan mitra, pelanggan, dan komunitas
                                global. Bersama, wujudkan peluang tanpa batas.
                            </p>
                            <h3 className="font-semibold">
                                Terhubung dengan kami
                            </h3>
                            <div className="flex gap-x-4">
                                <SocialIcon
                                    SIcon={IoLogoWhatsapp}
                                    href="https://wa.me/628128789"
                                />
                                <SocialIcon
                                    SIcon={FaTelegramPlane}
                                    href="https://t.me/kreatifindonesia"
                                />
                                <SocialIcon
                                    SIcon={IoLogoInstagram}
                                    href="https://instagram.com/kreatifindonesia"
                                />
                                <SocialIcon
                                    SIcon={IoLogoYoutube}
                                    href="https://youtube.com/@kreatifindonesia"
                                />
                                <SocialIcon
                                    SIcon={IoLogoTiktok}
                                    href="https://tiktok.com/@kreatifindonesia"
                                />
                            </div>
                        </div>
                        <img
                            src="/images/community2.jpg"
                            className="object-fit col-span-2 hidden size-full md:block"
                        />
                    </CardContent>
                </Card>

                <div className="mx-4 space-y-8">
                    <h3 className="scroll-m-20 pb-2 text-xl font-semibold tracking-tight first:mt-0 md:text-2xl">
                        Kalender Kegiatan
                    </h3>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

function SocialIcon({ SIcon, href }: { SIcon: IconType; href: string }) {
    return (
        <Link href={href} className="rounded p-2 hover:bg-muted">
            <SIcon className="size-6" />
        </Link>
    );
}
