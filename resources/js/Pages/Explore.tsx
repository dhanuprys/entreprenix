import { AspectRatio } from '@/Components/ui/aspect-ratio';
import { Avatar, AvatarFallback, AvatarImage } from '@/Components/ui/avatar';
import { Card, CardHeader } from '@/Components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/Components/ui/carousel';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { isoToHuman } from '@/Lib/utils';
import { Head } from '@inertiajs/react';

export default function ExplorePage({ posts }: { posts: any }) {
    console.log(posts);
    return (
        <AuthenticatedLayout>
            <Head title="Eksplorasi" />

            <div className="space-y-4 px-4">
                {posts.map((post: any) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </AuthenticatedLayout>
    );
}

function PostCard({ post }: { post: any }) {
    console.log(post);
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center gap-4">
                    <Avatar>
                        <AvatarImage src={post.user.photo} />
                        <AvatarFallback>{post.user.name}</AvatarFallback>
                    </Avatar>
                    <div>
                        <h3 className="text-sm font-semibold">
                            {post.user.name}
                        </h3>
                        <span className="text-sm text-muted-foreground">
                            {isoToHuman(post.created_at)}
                        </span>
                    </div>
                </div>
                <p>{post.caption}</p>
            </CardHeader>
            <Carousel>
                <CarouselContent>
                    {post.post_assets.map((asset: any) => (
                        <CarouselItem
                            key={asset.id}
                            className="rounded-b bg-muted"
                        >
                            <AspectRatio ratio={1 / 1}>
                                <img
                                    src={`/storage/${asset.asset_path}`}
                                    className="size-full rounded-b object-contain"
                                />
                            </AspectRatio>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </Card>
    );
}
