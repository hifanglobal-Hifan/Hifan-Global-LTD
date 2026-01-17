'use client';

import { Box, Container, Typography, Grid, Card, CardContent, Button, Chip, Stack } from '@mui/material';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Link from 'next/link';
import { blogPosts } from '@/data/blogs';

export default function BlogContent() {
    return (
        <Box>
            <Breadcrumbs />
            {/*  Our Blog Section */}
            <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
                <Box sx={{ mb: 8 }}>
                    <Typography
                        variant="overline"
                        sx={{
                            fontWeight: 1000,
                            color: 'text.primary',
                            letterSpacing: 2,
                            display: 'block',
                            mb: 2
                        }}
                    >
                        Insights & News
                    </Typography>
                    <Typography variant="h3" sx={{ fontWeight: 700, mb: 3, color: 'secondary.main' }}>
                        Latest insights from the world of business and technology
                    </Typography>
                </Box>

                <Grid container spacing={6}>
                    <Grid item xs={12} md={8}>
                        <Stack spacing={4}>
                            {blogPosts.map((post) => (
                                <Card key={post.id} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, overflow: 'hidden', p: 0, boxShadow: 3, borderRadius: 2 }}>
                                    <Box sx={{
                                        width: { xs: '100%', md: 300 },
                                        height: { xs: 180, md: 'auto' },
                                        position: 'relative'
                                    }}>
                                        <Box
                                            component="img"
                                            src={post.image}
                                            alt={post.title}
                                            sx={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover'
                                            }}
                                        />
                                    </Box>
                                    <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, flexWrap: 'wrap', gap: 1 }}>
                                            <Chip label={post.category} size="small" sx={{ bgcolor: 'secondary.main', color: 'primary.dark', fontWeight: 700 }} />
                                            <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500 }}>{post.date}</Typography>
                                        </Box>
                                        <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, lineHeight: 1.3 }}>{post.title}</Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.7, flexGrow: 1 }}>
                                            {post.excerpt}
                                        </Typography>
                                        <Button
                                            component={Link}
                                            href={`/blog/${post.id}`}
                                            variant="text"
                                            color="primary"
                                            sx={{
                                                fontWeight: 800,
                                                p: 0,
                                                justifyContent: 'flex-start',
                                                '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' }
                                            }}
                                        >
                                            Read More →
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </Stack>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Box sx={{ position: 'sticky', top: 100 }}>
                            <Box sx={{ p: 3, bgcolor: 'grey.50', borderRadius: 2 }}>
                                <Typography variant="h6" sx={{ mb: 3, fontWeight: 700 }}>Categories</Typography>
                                {['IT Services', 'Marketing', 'Consultancy', 'Business Strategy', 'Accounting'].map((cat) => (
                                    <Box key={cat} sx={{ display: 'flex', justifyContent: 'space-between', py: 1.5, borderBottom: '1px solid', borderColor: 'divider', cursor: 'pointer', '&:hover': { color: 'secondary.main' } }}>
                                        <Typography variant="body2" sx={{ fontWeight: 600 }}>{cat}</Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>→</Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
