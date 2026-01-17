import BlogDetailContent from '@/components/pages/BlogDetailContent';

import { blogPosts } from '@/data/blogs';

export const dynamicParams = false;

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        id: String(post.id),
    }));
}

export default async function BlogDetailPage({ params }) {
    const resolvedParams = await params;
    return <BlogDetailContent id={resolvedParams.id} />;
}
