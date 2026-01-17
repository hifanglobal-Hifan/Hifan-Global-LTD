'use client';

import { Box, Container, Typography, Grid, Card, CardContent, Chip } from '@mui/material';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { projects } from '@/data/projects';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function ProjectsContent() {
    return (
        <Box sx={{ bgcolor: 'white', minHeight: '100vh', pb: { xs: 8, md: 12 } }}>
            <Breadcrumbs />
            <Box sx={{ py: { xs: 8, md: 12 } }}>
                <Container maxWidth="lg">
                    {/* Header Section */}
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
                            Commitments We Fulfilled
                        </Typography>
                        <Typography variant="h3" sx={{ fontWeight: 1000, mb: 3, color: 'secondary.main' }}>
                            We have served our clients with our best
                        </Typography>
                    </Box>

                    {/* Projects Grid */}
                    <Box sx={{ pb: 12 }}>
                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                                gap: 4,
                                alignItems: 'stretch'
                            }}
                        >
                            {projects.map((project) => (
                                <Box key={project.id} sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Card
                                        sx={{
                                            width: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            height: '100%',
                                            borderRadius: 4,
                                            border: '1px solid',
                                            borderColor: 'grey.200',
                                            boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                                            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                            overflow: 'hidden',
                                            position: 'relative',
                                            '&:hover': {
                                                transform: 'translateY(-12px)',
                                                boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                                                borderColor: 'primary.main',
                                                '& .project-image': {
                                                    transform: 'scale(1.1)'
                                                },
                                                '& .learn-more-btn': {
                                                    color: 'primary.main',
                                                    gap: 1.5
                                                }
                                            }
                                        }}
                                    >
                                        <Box sx={{ position: 'relative', overflow: 'hidden', height: 320, bgcolor: 'grey.100' }}>
                                            <Box
                                                component="img"
                                                src={project.image}
                                                alt={project.title}
                                                className="project-image"
                                                sx={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    transition: 'transform 0.6s ease',
                                                }}
                                            />
                                            <Chip
                                                label={project.category}
                                                size="small"
                                                sx={{
                                                    position: 'absolute',
                                                    top: 20,
                                                    right: 20,
                                                    bgcolor: 'rgba(255,255,255,0.95)',
                                                    backdropFilter: 'blur(8px)',
                                                    fontWeight: 700,
                                                    color: 'text.primary',
                                                    boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
                                                }}
                                            />
                                        </Box>

                                        <CardContent sx={{ flexGrow: 1, p: 3, pt: 2.5, display: 'flex', flexDirection: 'column' }}>
                                            <Typography variant="h5" sx={{ fontWeight: 800, mb: 1.5, lineHeight: 1.3 }}>
                                                <Link href={`/projects/${project.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                                    {project.title}
                                                </Link>
                                            </Typography>

                                            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.7, flexGrow: 1 }}>
                                                {project.shortDesc}
                                            </Typography>

                                            <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                                                <Typography
                                                    variant="button"
                                                    component={Link}
                                                    href={`/projects/${project.id}`}
                                                    className="learn-more-btn"
                                                    sx={{
                                                        textDecoration: 'none',
                                                        color: 'text.primary',
                                                        fontWeight: 700,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: 1,
                                                        transition: 'all 0.3s ease',
                                                        py: 1,
                                                        textTransform: 'none'
                                                    }}
                                                >
                                                    View Case Study <ArrowForwardIcon fontSize="small" />
                                                </Typography>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}
