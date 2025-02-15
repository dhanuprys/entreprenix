import { AspectRatio } from '@/Components/ui/aspect-ratio';
import { Button } from '@/Components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/Components/ui/form';
import { Textarea } from '@/Components/ui/textarea';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { zodResolver } from '@hookform/resolvers/zod';
import { Head, router } from '@inertiajs/react';
import axios from 'axios';
import { UploadIcon } from 'lucide-react';
import { useCallback, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
    caption: z.string(),
});

const MAX_FILE_COUNT = 3;

export default function PublishPage() {
    const [fileSignatures, setFileSignatures] = useState<any[]>([]);
    const [isUploading, setIsUploading] = useState(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    const isMaxFile = useMemo(
        () => fileSignatures.length >= MAX_FILE_COUNT,
        [fileSignatures],
    );

    const handleFileChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const files = event.target.files;

            if (files && !isMaxFile) {
                const file = files[0];
                const formData = new FormData();

                formData.append('file', file);

                setIsUploading(true);

                axios
                    .post('/upload', formData)
                    .then((response) => {
                        setFileSignatures([...fileSignatures, response.data]);
                    })
                    .finally(() => {
                        setIsUploading(false);
                    });
            }
        },
        [fileSignatures],
    );

    const storeContent = useCallback(
        (values: z.infer<typeof formSchema>) => {
            router.post('/posting', {
                visuals: fileSignatures.map((signature) => signature.signature),
                caption: values.caption,
            });
        },
        [fileSignatures],
    );

    return (
        <AuthenticatedLayout withBottomPop={false}>
            <Head title="Posting Konten" />

            <div className="space-y-10 px-4">
                <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                    Posting Konten
                </h2>

                <div className="grid grid-cols-6 space-x-8 space-y-10">
                    <div className="col-span-full md:col-span-4">
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(storeContent)}
                                className="space-y-4"
                            >
                                <div>
                                    <label
                                        className="w-full hover:cursor-pointer"
                                        htmlFor="file-input"
                                    >
                                        {isUploading ? (
                                            <Button
                                                type="button"
                                                className="w-full animate-pulse"
                                                variant="outline"
                                            >
                                                Mengunggah file...
                                            </Button>
                                        ) : (
                                            <Button
                                                type="button"
                                                className="pointer-events-none w-full"
                                            >
                                                <UploadIcon />
                                                Tambahkan file
                                            </Button>
                                        )}
                                        <input
                                            id="file-input"
                                            className="hidden"
                                            type="file"
                                            accept=".jpg,.png,.mp4"
                                            disabled={isUploading || isMaxFile}
                                            onChange={handleFileChange}
                                        />
                                        <input
                                            id="file-input"
                                            className="hidden"
                                            type="file"
                                            accept=".jpg,.png,.mp4"
                                            onChange={handleFileChange}
                                        />
                                    </label>
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    {fileSignatures.map((signature) => (
                                        <AspectRatio
                                            key={signature.signature}
                                            ratio={1 / 1}
                                            className="border"
                                        >
                                            <img
                                                src={signature.preview}
                                                className="size-full object-contain"
                                            />
                                        </AspectRatio>
                                    ))}
                                </div>
                                <FormField
                                    name="caption"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Caption</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    onChange={field.onChange}
                                                    onBlur={field.onBlur}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button
                                    type="submit"
                                    disabled={
                                        isUploading ||
                                        fileSignatures.length === 0
                                    }
                                >
                                    Posting
                                </Button>
                            </form>
                        </Form>
                    </div>
                    <div className="hidden md:col-span-2 md:block">
                        <img src="/images/share.jpg" />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
