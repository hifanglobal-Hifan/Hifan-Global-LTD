'use client';

import { Box, Container, Typography, Grid, Chip, Button, Divider, Paper, Card } from '@mui/material';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { projects } from '@/data/projects';

export default function ProjectDetailContent({ id }) {
    const project = projects.find(p => p.id === id);

    if (!project) {
        return (
            <Container sx={{ py: 2, textAlign: 'center' }}>
                <Typography variant="h4">Project not found</Typography>
                <Button component={Link} href="/projects" startIcon={<ArrowBackIcon />} sx={{ mt: 2 }}>
                    Back to Projects
                </Button>
            </Container>
        );
    }


    const currentIndex = projects.findIndex(p => p.id === id);
    const nextProject = projects[(currentIndex + 1) % projects.length];
    const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];


    const isVideo = (url) => typeof url === 'string' && url.toLowerCase().endsWith('.mp4');
    const isFullWidthLayout = id === 'digital-media-production' || id === 'web-development' || id === 'visual-design' || id === 'social-media-profiles';
    const gridItemProps = isFullWidthLayout ? { xs: 12, md: 12 } : { xs: 12, md: 4 };

    return (
        <Box sx={{ bgcolor: '#fff', minHeight: '100vh', pb: 10 }}>
            <Breadcrumbs customLastLabel={project.title} />
            {/* Header Section */}
            <Box sx={{
                bgcolor: 'white',
                color: 'text.primary',
                minHeight: { xs: 'auto', md: '160px' },
                py: { xs: 4, md: 0 },
                display: 'flex',
                alignItems: 'center',
                position: 'relative'
            }}>
                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                    {/* Back Button with Hover Effect */}
                    <Box sx={{
                        position: { md: 'absolute' },
                        left: { md: 0 },
                        top: { md: '50%' },
                        transform: { md: 'translateY(-50%)' },
                        mb: { xs: 2, md: 0 },
                        alignSelf: { xs: 'flex-start', md: 'auto' },
                        zIndex: 10
                    }}>
                        <Link href="/projects" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                opacity: 0.6,
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                '&:hover': {
                                    opacity: 1,
                                    transform: 'translateX(-4px)',
                                    '& .back-text': {
                                        maxWidth: '150px',
                                        opacity: 1,
                                        ml: 1
                                    }
                                }
                            }}>
                                <ArrowBackIcon sx={{ fontSize: 28 }} />
                                <Typography
                                    className="back-text"
                                    variant="button"
                                    sx={{
                                        fontWeight: 600,
                                        maxWidth: 0,
                                        opacity: 0,
                                        overflow: 'hidden',
                                        whiteSpace: 'nowrap',
                                        transition: 'all 0.3s ease',
                                        textTransform: 'none'
                                    }}
                                >
                                    Back to Projects
                                </Typography>
                            </Box>
                        </Link>
                    </Box>

                    {/* Centered Title */}
                    <Box sx={{ width: '100%', textAlign: 'center', px: { md: 4 } }}>
                        <Typography variant="h1" component="h1" sx={{
                            fontWeight: 700,
                            lineHeight: 1.1,
                            letterSpacing: '-0.02em',
                            m: 0,
                            color: 'primary.main'
                        }}>
                            {project.title}
                        </Typography>
                    </Box>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ py: 8 }}>

                <Box sx={{ mb: 12 }}>
                    <Grid container spacing={4}>
                        {/* Overview */}
                        <Grid item {...gridItemProps}>
                            <Card sx={{
                                p: 4,
                                height: '100%',
                                borderRadius: 3,
                                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                border: '1px solid #e0e0e0',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-8px)',
                                    boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
                                }
                            }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: 'primary.main', borderBottom: '3px solid', borderColor: 'secondary.main', pb: 2 }}>
                                    Project Overview
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, textAlign: 'justify' }}>
                                    {project.description}
                                </Typography>
                            </Card>
                        </Grid>

                        {/* Challenge */}
                        <Grid item {...gridItemProps}>
                            <Card sx={{
                                p: 4,
                                height: '100%',
                                borderRadius: 3,
                                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                border: '1px solid #e0e0e0',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-8px)',
                                    boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
                                }
                            }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: 'primary.main', borderBottom: '3px solid', borderColor: 'secondary.main', pb: 2 }}>
                                    The Challenge
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, textAlign: 'justify' }}>
                                    {project.challenge}
                                </Typography>
                            </Card>
                        </Grid>

                        {/* Solution */}
                        <Grid item {...gridItemProps}>
                            <Card sx={{
                                p: 4,
                                height: '100%',
                                borderRadius: 3,
                                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                border: '1px solid #e0e0e0',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-8px)',
                                    boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
                                }
                            }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: 'primary.main', borderBottom: '3px solid', borderColor: 'secondary.main', pb: 2 }}>
                                    The Solution
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, textAlign: 'justify' }}>
                                    {project.solution}
                                </Typography>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>

                {/* Gallery Section */}
                {project.gallery && project.gallery.length > 0 && (
                    <Box sx={{ mb: 12 }}>
                        <Typography variant="overline" sx={{ display: 'block', mb: 1, color: 'text.secondary', letterSpacing: 2, textAlign: 'center' }}>
                            CASE STUDY MEDIA
                        </Typography>
                        <Typography variant="h3" sx={{ fontWeight: 800, mb: 6, textAlign: 'center' }}>
                            Project Gallery
                        </Typography>


                        {(() => {
                            // Social Media Profiles Gallery 
                            if (project.id === 'social-media-profiles') {
                                return (
                                    <Grid container spacing={{ xs: 2, md: 6 }} justifyContent="center">
                                        {project.gallery.map((item, index) => (
                                            <Grid item xs={4} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                                                <Box sx={{
                                                    width: '100%',
                                                    maxWidth: '350px',
                                                    aspectRatio: '1/1',
                                                    borderRadius: '50%',
                                                    overflow: 'hidden',
                                                    boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
                                                    transition: 'all 0.4s ease',
                                                    border: '4px solid white',
                                                    position: 'relative',
                                                    '&:hover': {
                                                        transform: 'scale(1.05)',
                                                        boxShadow: '0 15px 40px rgba(0,0,0,0.2)',
                                                        borderColor: 'primary.main'
                                                    }
                                                }}>
                                                    <Box
                                                        component="img"
                                                        src={item.src}
                                                        alt={item.title}
                                                        sx={{
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'cover'
                                                        }}
                                                    />
                                                </Box>
                                            </Grid>
                                        ))}
                                    </Grid>
                                );
                            }

                            // Visual Design Gallery 
                            if (project.id === 'visual-design') {
                                return (
                                    <Box sx={{
                                        position: 'relative',
                                        height: { xs: '400px', md: '600px' },
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        mt: 4,
                                        mb: 8,
                                        '&': {
                                            '--fan-spacing': { xs: '40px', md: '140px' }
                                        }
                                    }}>
                                        {project.gallery.map((item, index) => {
                                            const totalItems = project.gallery.length;
                                            const centerIndex = (totalItems - 1) / 2;
                                            const offset = index - centerIndex;
                                            const rotateAngle = offset * 12;
                                            const translateY = Math.abs(offset) * 10;

                                            return (
                                                <Box
                                                    key={index}
                                                    sx={{
                                                        position: 'absolute',
                                                        width: { xs: '260px', md: '340px' },
                                                        aspectRatio: '3/4',
                                                        bgcolor: 'white',
                                                        p: 1.5,
                                                        pb: 4,
                                                        borderRadius: 2,
                                                        boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
                                                        transform: `translateX(calc(${offset} * var(--fan-spacing))) rotate(${rotateAngle}deg) translateY(${translateY}px)`,
                                                        transformOrigin: 'bottom center',
                                                        transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                                        zIndex: index + 1,
                                                        cursor: 'pointer',
                                                        '&:hover': {
                                                            transform: `translateX(calc(${offset} * var(--fan-spacing))) rotate(${rotateAngle}deg) translateY(-80px) scale(1.15)`,
                                                            zIndex: 100,
                                                            boxShadow: '0 30px 60px rgba(0,0,0,0.25)'
                                                        }
                                                    }}
                                                >
                                                    <Box
                                                        component="img"
                                                        src={item.src}
                                                        alt={item.title}
                                                        sx={{
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'cover',
                                                            borderRadius: 1
                                                        }}
                                                    />
                                                    <Typography
                                                        variant="caption"
                                                        sx={{
                                                            position: 'absolute',
                                                            bottom: 8,
                                                            left: 0,
                                                            width: '100%',
                                                            textAlign: 'center',
                                                            fontWeight: 900,
                                                            textTransform: 'uppercase',
                                                            letterSpacing: 1.5,
                                                            color: 'text.secondary'
                                                        }}
                                                    >
                                                        {item.title}
                                                    </Typography>
                                                </Box>
                                            );
                                        })}
                                    </Box>
                                );
                            }

                            // Web Development Gallery 
                            if (project.id === 'web-development' || id === 'web-development') {
                                const galleryImages = project.gallery.filter(item => item.type === 'image');
                                const galleryVideos = project.gallery.filter(item => item.type === 'video');


                                const displayItems = [];
                                if (galleryImages.length > 0) displayItems.push(galleryImages[0]);
                                if (galleryVideos.length > 0) displayItems.push(galleryVideos[0]);
                                if (galleryVideos.length > 1) displayItems.push(galleryVideos[1]);
                                if (galleryImages.length > 1) displayItems.push(galleryImages[1]);



                                return (

                                    <Box sx={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(2, 1fr)',
                                        gap: 2,
                                        width: '100%'
                                    }}>
                                        {displayItems.map((item, index) => (
                                            <Box key={index} sx={{
                                                bgcolor: 'white',
                                                borderRadius: 2,
                                                overflow: 'hidden',
                                                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                                                transition: 'transform 0.3s ease',
                                                '&:hover': {
                                                    transform: 'translateY(-5px)',
                                                    boxShadow: '0 12px 30px rgba(0,0,0,0.1)'
                                                }
                                            }}>
                                                {/* Media Section */}
                                                <Box sx={{
                                                    width: '100%',
                                                    aspectRatio: '16/9',
                                                    bgcolor: '#f5f5f5',
                                                    position: 'relative'
                                                }}>
                                                    {item.type === 'video' ? (
                                                        <video
                                                            autoPlay
                                                            muted
                                                            loop
                                                            playsInline
                                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                        >
                                                            <source src={item.src} type="video/mp4" />
                                                        </video>
                                                    ) : (
                                                        <Box
                                                            component="img"
                                                            src={item.src}
                                                            alt={item.title}
                                                            sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                        />
                                                    )}
                                                </Box>


                                            </Box>
                                        ))}
                                    </Box>
                                );
                            }

                            // Gallery Layout for Digital Media
                            if (project.id !== 'web-development' && project.gallery && project.gallery.length > 0 && typeof project.gallery[0] === 'object') {
                                return (
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                        {project.gallery.map((item, index) => (
                                            <Box key={index} sx={{
                                                display: 'flex',
                                                flexDirection: { xs: 'column-reverse', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                                                alignItems: 'center',
                                                gap: { xs: 4, md: 6 }
                                            }}>
                                                {/* Content Side */}
                                                <Box sx={{ flex: 1 }}>
                                                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                                                        {item.title}
                                                    </Typography>
                                                    <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                                                        {item.description}
                                                    </Typography>
                                                </Box>

                                                {/* Video Side */}
                                                <Box sx={{
                                                    flex: 3,
                                                    width: '100%',
                                                    borderRadius: 4,
                                                    overflow: 'hidden',
                                                    aspectRatio: '16/9'
                                                }}>
                                                    <video
                                                        autoPlay
                                                        muted
                                                        loop
                                                        playsInline
                                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                    >
                                                        <source src={item.src} type="video/mp4" />
                                                        Your browser does not support the video tag.
                                                    </video>
                                                </Box>
                                            </Box>
                                        ))}
                                    </Box>
                                );
                            }


                            const videos = project.gallery.filter(isVideo);
                            const images = project.gallery.filter(url => !isVideo(url));
                            const hasVideo = videos.length > 0;

                            if (hasVideo) {

                                return (
                                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, height: { md: '600px' } }}>
                                        {/* Left Column*/}
                                        <Box sx={{
                                            flex: { xs: '1 1 auto', md: '0 0 35%' },
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: 3,
                                            height: '100%'
                                        }}>
                                            {images.slice(0, 3).map((img, idx) => (
                                                <Box
                                                    key={idx}
                                                    component="img"
                                                    src={img}
                                                    alt={`Gallery image ${idx + 1}`}
                                                    sx={{
                                                        width: '100%',
                                                        height: `calc(100% / ${Math.min(images.length, 3)})`, // Distribute height evenly
                                                        objectFit: 'cover',
                                                        borderRadius: 4,
                                                        flexGrow: 1
                                                    }}
                                                />
                                            ))}
                                        </Box>

                                        {/* Right Column */}
                                        <Box sx={{
                                            flex: { xs: '1 1 auto', md: '1 1 auto' },
                                            height: '100%',
                                            borderRadius: 4,
                                            overflow: 'hidden',
                                            bgcolor: 'black',
                                            mt: 3,
                                            position: 'relative'
                                        }}>
                                            <video
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            >
                                                <source src={videos[0]} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </Box>
                                    </Box>
                                );
                            } else {

                                return (
                                    <Grid container spacing={3} justifyContent="center" alignItems="center">
                                        {project.gallery.map((media, index) => (
                                            <Grid item xs={12} sm={6} md={4} key={index}>
                                                <Box
                                                    sx={{
                                                        width: '100%',
                                                        height: 300,
                                                        borderRadius: 4,
                                                        overflow: 'hidden',
                                                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                                        position: 'relative',
                                                        bgcolor: 'black'
                                                    }}
                                                >
                                                    <Box
                                                        component="img"
                                                        src={media}
                                                        alt={`Gallery image ${index + 1}`}
                                                        sx={{
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'cover',
                                                            transition: 'transform 0.5s ease',
                                                            '&:hover': {
                                                                transform: 'scale(1.05)'
                                                            }
                                                        }}
                                                    />
                                                </Box>
                                            </Grid>
                                        ))}
                                    </Grid>
                                );
                            }
                        })()}
                    </Box>
                )}

                {/* Project Details Footer */}
                <Paper
                    elevation={0}
                    sx={{
                        p: 6,
                        bgcolor: 'grey.50',
                        borderRadius: 6
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6 }}>
                        {/* Project Info */}
                        <Box sx={{ flex: { xs: '1 1 100%', md: '0 0 30%' }, minWidth: 0 }}>
                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
                                Project Info
                            </Typography>

                            <Box sx={{ mb: 3 }}>
                                <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 1, textTransform: 'uppercase', letterSpacing: 1 }}>
                                    Client Industry
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                    {project.category}
                                </Typography>
                            </Box>

                            <Box>
                                <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 2, textTransform: 'uppercase', letterSpacing: 1 }}>
                                    Technologies & Services
                                </Typography>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                    {project.tags.map(tag => (
                                        <Chip
                                            key={tag}
                                            label={tag}
                                            sx={{
                                                bgcolor: 'white',
                                                border: '1px solid',
                                                borderColor: 'divider',
                                                fontWeight: 500
                                            }}
                                        />
                                    ))}
                                </Box>
                            </Box>
                        </Box>

                        {/* Explore More Work */}
                        <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 auto' }, minWidth: 0 }}>
                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, textAlign: { md: 'left' } }}>
                                Explore More Work
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3 }}>
                                {/* Previous Project */}
                                <Link href={`/projects/${prevProject.id}`} style={{ textDecoration: 'none', flex: 1 }}>
                                    <Box sx={{
                                        p: 4,
                                        bgcolor: 'white',
                                        borderRadius: 3,
                                        border: '1px solid',
                                        borderColor: '#e0e0e0',
                                        transition: 'all 0.3s ease',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        cursor: 'pointer',

                                        '&:hover': {
                                            bgcolor: 'secondary.main',
                                            transform: 'translateY(-8px)',
                                            boxShadow: '0 12px 32px rgba(255, 209, 102, 0.3)',
                                            borderColor: 'secondary.main',
                                            '& .nav-label': { color: 'white', opacity: 1 },
                                            '& .nav-title': { color: 'white' },
                                            '& .nav-icon': { color: 'white' }
                                        }
                                    }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                            <Typography className="nav-label" variant="caption" display="block" sx={{ opacity: 0.5, textTransform: 'uppercase', letterSpacing: 1, transition: 'all 0.3s' }}>
                                                Previous Project
                                            </Typography>
                                            <ArrowBackIcon className="nav-icon" sx={{ fontSize: 20, color: 'text.secondary', transition: 'all 0.3s' }} />
                                        </Box>
                                        <Typography className="nav-title" variant="h6" sx={{ fontWeight: 700, color: 'text.primary', transition: 'all 0.3s' }}>
                                            {prevProject.title}
                                        </Typography>
                                    </Box>
                                </Link>

                                {/* Next Project */}
                                <Link href={`/projects/${nextProject.id}`} style={{ textDecoration: 'none', flex: 1 }}>
                                    <Box sx={{
                                        p: 4,
                                        bgcolor: 'white',
                                        borderRadius: 3,
                                        border: '1px solid',
                                        borderColor: '#e0e0e0',
                                        transition: 'all 0.3s ease',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        // Service Card Hover Effect
                                        '&:hover': {
                                            bgcolor: 'secondary.main',
                                            transform: 'translateY(-8px)',
                                            boxShadow: '0 12px 32px rgba(255, 209, 102, 0.3)',
                                            borderColor: 'secondary.main',
                                            '& .nav-label': { color: 'white', opacity: 1 },
                                            '& .nav-title': { color: 'white' },
                                            '& .nav-icon': { color: 'white' }
                                        }
                                    }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                            <Typography className="nav-label" variant="caption" display="block" sx={{ opacity: 0.5, textTransform: 'uppercase', letterSpacing: 1, transition: 'all 0.3s' }}>
                                                Next Project
                                            </Typography>
                                            <ArrowForwardIcon className="nav-icon" sx={{ fontSize: 20, color: 'text.secondary', transition: 'all 0.3s' }} />
                                        </Box>
                                        <Typography className="nav-title" variant="h6" sx={{ fontWeight: 700, color: 'text.primary', transition: 'all 0.3s' }}>
                                            {nextProject.title}
                                        </Typography>
                                    </Box>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
}
