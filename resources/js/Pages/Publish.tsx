import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function PublishPage() {
    return (
        <AuthenticatedLayout withSafeWidth={false}>
            <Head title="Posting" />

            <div className="space-y-10">
                HELLO
            </div>
        </AuthenticatedLayout>
    );
}
