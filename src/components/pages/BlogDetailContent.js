'use client';

import { Box, Container, Typography, Chip, Button, Divider, Stack } from '@mui/material';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Link from 'next/link';
import { blogPosts } from '@/data/blogs';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function BlogDetailContent({ id }) {
    const post = blogPosts.find(p => p.id === id);

    if (!post) {
        return (
            <Container maxWidth="md" sx={{ py: 12, textAlign: 'center' }}>
                <Typography variant="h4" sx={{ mb: 2 }}>Post not found</Typography>
                <Button component={Link} href="/blog" startIcon={<ArrowBackIcon />}>
                    Back to Blog
                </Button>
            </Container>
        );
    }

    return (
        <Box>
            <Breadcrumbs customLastLabel={post.title} />
            <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
                <Button
                    component={Link}
                    href="/blog"
                    startIcon={<ArrowBackIcon />}
                    sx={{ mb: 4, fontWeight: 700, color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
                >
                    Back to Blog
                </Button>

                <Box sx={{ mb: 4 }}>
                    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                        <Chip label={post.category} sx={{ bgcolor: 'secondary.main', color: 'primary.dark', fontWeight: 700 }} />
                        <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                            {post.date}
                        </Typography>
                    </Stack>
                    <Typography variant="h2" sx={{ fontWeight: 800, lineHeight: 1.2, mb: 3 }}>
                        {post.title}
                    </Typography>
                </Box>

                <Box
                    component="img"
                    src={post.image}
                    alt={post.title}
                    sx={{
                        width: '100%',
                        height: { xs: 250, md: 450 },
                        objectFit: 'cover',
                        borderRadius: 3,
                        mb: 6,
                        boxShadow: 3
                    }}
                />

                <Box sx={{
                    typography: 'body1',
                    lineHeight: 1.8,
                    textAlign: 'justify',
                    color: 'text.primary',
                    '& h3': {
                        fontWeight: 700,
                        mt: 4,
                        mb: 2,
                        color: 'primary.main'
                    },
                    '& p': {
                        mb: 3
                    }
                }}>
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </Box>


            </Container>
        </Box>
    );
}
