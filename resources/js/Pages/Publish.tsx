import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function PublishPage() {
    return (
        <AuthenticatedLayout withSafeWidth={false} withBottomPop={false}>
            <Head title="Posting" />

            <div className="space-y-10 px-4">
                <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                    Posting
                </h2>

                
            </div>
        </AuthenticatedLayout>
    );
}
