import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function ExplorePage() {
    return (
        <AuthenticatedLayout withSafeWidth={false}>
            <Head title="Eksplorasi" />

            <div className="space-y-10"></div>
        </AuthenticatedLayout>
    );
}
