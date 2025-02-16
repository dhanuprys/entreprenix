import { AspectRatio } from '@/Components/ui/aspect-ratio';
import { Avatar, AvatarFallback, AvatarImage } from '@/Components/ui/avatar';
import { Button } from '@/Components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/Components/ui/form';
import { Input } from '@/Components/ui/input';
import { Separator } from '@/Components/ui/separator';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { zodResolver } from '@hookform/resolvers/zod';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { CameraIcon, EditIcon, SaveIcon } from 'lucide-react';
import React, { useCallback, useId, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    date_of_birth: z.string(),
    whatsapp_number: z.string(),
});

export default function ProfilePage() {
    const user = usePage().props.auth.user as any;
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const inputPhotoId = useId();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: user.name ?? '',
            email: user.email ?? '',
            date_of_birth: user.date_of_birth ?? '',
            whatsapp_number: user.whatsapp_number ?? '',
        },
    });

    const resetForm = useCallback(() => {
        form.reset();
        setIsEditMode(false);
    }, [form]);

    const handleSubmit = useCallback((values: z.infer<typeof formSchema>) => {
        router.post('/profile', values, {
            preserveState: false,
        });
    }, []);

    const handlePhotoChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const file = event.target.files?.[0];

            if (file) {
                const formData = new FormData();
                formData.append('photo', file);

                router.post(
                    '/profile/photo',
                    {
                        photo: file,
                    },
                    {
                        preserveState: false,
                        forceFormData: true,
                    },
                );
            }
        },
        [],
    );

    return (
        <AuthenticatedLayout withBottomPop={false}>
            <Head title="Profil Anda" />

            <div className="space-y-10 px-4">
                <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                    Profil Anda
                </h2>

                <div className="grid grid-cols-8 md:gap-x-16">
                    <div className="col-span-full space-y-5 md:col-span-2">
                        <div className="mx-auto w-[200px] md:mt-14 md:w-full">
                            <AspectRatio ratio={1 / 1}>
                                <Avatar className="size-full">
                                    <AvatarImage
                                        className="object-cover"
                                        src={`/storage/${user.photo}`}
                                    />
                                    <AvatarFallback>DN</AvatarFallback>
                                </Avatar>
                            </AspectRatio>
                        </div>
                        <div className="flex justify-center">
                            <label
                                htmlFor={inputPhotoId}
                                className="hover:cursor-pointer"
                            >
                                <Button
                                    type="button"
                                    className="pointer-events-none"
                                    variant="outline"
                                >
                                    <CameraIcon />
                                    Ganti foto
                                </Button>
                                <input
                                    type="file"
                                    id={inputPhotoId}
                                    onChange={handlePhotoChange}
                                    accept="image/*"
                                    className="hidden"
                                />
                            </label>
                        </div>
                    </div>
                    <div className="col-span-full md:col-span-6">
                        <Separator className="my-10 md:hidden" />
                        {isEditMode ? (
                            <div className="flex justify-end">
                                <Button
                                    variant="secondary"
                                    className="animate-pulse"
                                >
                                    <EditIcon />
                                    Mode edit
                                </Button>
                            </div>
                        ) : (
                            <div className="flex justify-end gap-x-4">
                                <Link href="/logout">
                                    <Button variant="destructive">
                                        Logout
                                    </Button>
                                </Link>
                                <Button
                                    variant="secondary"
                                    onClick={() => setIsEditMode(true)}
                                >
                                    <EditIcon />
                                    Edit profil
                                </Button>
                            </div>
                        )}
                        <Form {...form}>
                            <form
                                className="space-y-8"
                                onSubmit={form.handleSubmit(handleSubmit)}
                            >
                                <FormField
                                    name="name"
                                    disabled={!isEditMode}
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Nama</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="text"
                                                    placeholder="Masukkan nama anda..."
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="email"
                                    disabled={!isEditMode}
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="text"
                                                    placeholder="Masukkan email anda..."
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="date_of_birth"
                                    disabled={!isEditMode}
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Tanggal lahir</FormLabel>
                                            <FormControl>
                                                <input
                                                    type="date"
                                                    className="block w-full rounded border-slate-300"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="whatsapp_number"
                                    disabled={!isEditMode}
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Whatsapp</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="text"
                                                    placeholder="Masukkan no whatsapp anda"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                {isEditMode && (
                                    <div className="flex gap-x-4">
                                        <Button
                                            variant="secondary"
                                            type="button"
                                            onClick={resetForm}
                                        >
                                            Batal
                                        </Button>
                                        <Button type="submit">
                                            <SaveIcon />
                                            Simpan
                                        </Button>
                                    </div>
                                )}
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
