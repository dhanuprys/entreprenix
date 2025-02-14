import { Button } from '@/Components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from '@/Components/ui/form';
import { Textarea } from '@/Components/ui/textarea';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { zodResolver } from '@hookform/resolvers/zod';
import { Head } from '@inertiajs/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
    caption: z.string(),
});

export default function PublishPage() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    return (
        <AuthenticatedLayout withBottomPop={false}>
            <Head title="Posting Konten" />

            <div className="space-y-10 px-4">
                <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                    Posting Konten
                </h2>

                <div className="grid grid-cols-6 space-x-8 space-y-10">
                    <div className="col-span-4">
                        <Form {...form}>
                            <form className="space-y-4">
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
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit">Posting</Button>
                            </form>
                        </Form>
                    </div>
                    <div className="col-span-2">
                        <img src="/images/share.jpg" />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
