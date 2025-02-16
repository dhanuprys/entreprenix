import { Calendar, DateCellProps } from '@/Components/calendar';
import { Badge } from '@/Components/ui/badge';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardHeader } from '@/Components/ui/card';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/Components/ui/dialog';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { format } from 'date-fns';
import { useState } from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import {
    IoLogoInstagram,
    IoLogoTiktok,
    IoLogoWhatsapp,
    IoLogoYoutube,
} from 'react-icons/io5';
import { IconType } from 'react-icons/lib';

const events = {
    '2025-02-01': "New Year's Day",
    '2025-02-14': "Valentine's Day",
    '2025-02-20': 'Team Meeting',
};

export default function CommunityPage() {
    return (
        <AuthenticatedLayout withBottomPop={false}>
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
                    <UserCalendar />
                    <Button>Tambahkan kegiatan</Button>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

interface EventsType {
    [key: string]: string;
}

function UserCalendar() {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const events: EventsType = {
        '2025-02-01': "New Year's Day",
        '2025-02-14': "Valentine's Day",
        '2025-02-20': 'Team Meeting',
    };

    const renderDateCell = ({
        date,
        isCurrentMonth,
        isToday,
        isSelected,
        onSelect,
    }: DateCellProps) => {
        const dateKey = format(date, 'yyyy-MM-dd');
        const hasEvent = dateKey in events;

        return (
            <button
                className={`flex h-full min-h-[60px] w-full flex-col items-center justify-center p-1 ${
                    isSelected ? 'bg-primary text-primary-foreground' : ''
                } ${!isCurrentMonth ? 'text-muted-foreground' : ''}`}
                onClick={() => onSelect(date)}
            >
                <span className={`text-sm ${isToday ? 'font-bold' : ''}`}>
                    {format(date, 'd')}
                </span>
                {hasEvent && (
                    <Badge variant="secondary" className="mt-1 text-xs">
                        {events[dateKey]}
                    </Badge>
                )}
            </button>
        );
    };

    const handleCellClick = (date: Date) => {
        setSelectedDate(date);
        setIsDialogOpen(true);
    };

    return (
        <div className="py-10">
            <h1 className="mb-6 text-2xl font-bold">Kalender Kegiatan</h1>
            <Calendar
                renderDateCell={renderDateCell}
                onCellClick={handleCellClick}
            />

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            {selectedDate
                                ? format(selectedDate, 'dd MMMM yyyy')
                                : ''}
                        </DialogTitle>
                    </DialogHeader>
                    <div className="py-4">
                        {selectedDate &&
                        events[format(selectedDate, 'yyyy-MM-dd')] ? (
                            <p>
                                Event:{' '}
                                {events[format(selectedDate, 'yyyy-MM-dd')]}
                            </p>
                        ) : (
                            <p>No events scheduled for this date.</p>
                        )}
                    </div>
                    <Button onClick={() => setIsDialogOpen(false)}>
                        Close
                    </Button>
                </DialogContent>
            </Dialog>
        </div>
    );
}

function SocialIcon({ SIcon, href }: { SIcon: IconType; href: string }) {
    return (
        <Link href={href} className="rounded p-2 hover:bg-muted">
            <SIcon className="size-6" />
        </Link>
    );
}
