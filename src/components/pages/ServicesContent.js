'use client';

import { Box, Container, Typography, Grid, Card, useTheme, Button, Stack, IconButton, MobileStepper, Fade, useMediaQuery } from '@mui/material';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { useState, useEffect } from 'react';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Link from 'next/link';

const allServices = [
    {
        title: 'IT Services',
        desc: 'We provide end-to-end IT solutions including web development, SEO, and reliable IT infrastructure to help businesses operate efficiently and scale with confidence.',
        icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
        image: '/images/IT-services.jpg'
    },
    {
        title: 'Marketing',
        desc: 'Our marketing services focus on building strong digital presence through targeted campaigns, social media management, and strategic brand consulting to drive growth.',
        icon: <SecurityIcon sx={{ fontSize: 40 }} />,
        image: '/images/Marketing-services.jpg'
    },
    {
        title: 'Business Formation',
        desc: 'We assist entrepreneurs and companies with complete business setup, handling registration, compliance, and legal processes both locally and internationally.',
        icon: <LightbulbIcon sx={{ fontSize: 40 }} />,
        image: '/images/Business-services.jpg'
    },
    {
        title: 'Management Consultancy',
        desc: 'Our consultancy services offer strategic insights and practical solutions to improve operational efficiency, organizational structure, and overall business performance.',
        icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
        image: '/images/Management-services.jpg'
    },
    {
        title: 'Accounting & Bookkeeping',
        desc: 'We deliver professional accounting and bookkeeping services to ensure accurate financial records, regulatory compliance, and informed financial decision-making.',
        icon: <AccountBalanceIcon sx={{ fontSize: 40 }} />,
        image: '/images/Accounting-services.jpg'
    },
];

export default function ServicesContent() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = allServices.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };


    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % maxSteps);
        }, 5000);
        return () => clearInterval(interval);
    }, [maxSteps]);

    return (
        <Box>
            <Breadcrumbs />
            {/* Featured Service Section */}
            <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', sm: 'row' }, gap: 6, alignItems: 'center' }}>
                    <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 50%' }, minWidth: 0, textAlign: { xs: 'justify', sm: 'left' } }}>
                        <Typography
                            variant="overline"
                            sx={{
                                color: 'text.primary',
                                fontWeight: 1000,
                                letterSpacing: 1,
                                mb: 2,
                                display: 'block'
                            }}
                        >
                            PROFESSIONAL SERVICES
                        </Typography>
                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: 700,
                                mb: 3,
                                color: 'secondary.main',
                                lineHeight: 1.3
                            }}
                        >
                            Empowering Businesses with Trusted, End-to-End Solutions
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                mb: 4,
                                color: 'text.secondary',
                                lineHeight: 1.7,
                                textAlign: { xs: 'justify', sm: 'justify' }
                            }}
                        >
                            We deliver integrated professional services across IT, marketing, business formation, consultancy, and finance—designed to support businesses at every stage. Our approach combines expertise, transparency, and strategic thinking to help organizations operate efficiently, grow sustainably, and achieve long-term success.
                        </Typography>
                        <Button
                            component={Link}
                            href="/contact"
                            variant="contained"
                            color="primary"
                            sx={{
                                borderRadius: '50px',
                                px: 3,
                                boxShadow: 'none',
                                fontWeight: 800
                            }}
                        >
                            Request a Consultation
                        </Button>
                    </Box>
                    <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 50%' }, minWidth: 0 }}>
                        <Box
                            sx={{
                                width: '100%',
                                height: { xs: '300px', md: '400px' },
                                borderRadius: 2,
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <img
                                src="/images/our-services.png"
                                alt="Professional business collaboration"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: '8px'
                                }}
                            />
                        </Box>
                    </Box>
                </Box>
            </Container>

            {/* Service Carousel Section */}
            <Box sx={{ bgcolor: 'grey.50', py: { xs: 6, md: 10 } }}>
                <Container maxWidth="lg">
                    <Box sx={{ position: 'relative', width: '100%', height: { xs: 400, md: 500 }, overflow: 'hidden', borderRadius: 4, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                        {allServices.map((step, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: index === activeStep ? 'block' : 'none',
                                    height: '100%',
                                    width: '100%',
                                    position: 'relative'
                                }}
                            >
                                <Fade in={index === activeStep} timeout={1000}>
                                    <Box
                                        sx={{
                                            height: '100%',
                                            width: '100%',
                                            backgroundImage: `url(${step.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            position: 'relative',
                                            '&::before': {
                                                content: '""',
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)',
                                            }
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                p: { xs: 4, md: 8 },
                                                color: 'white',
                                                zIndex: 2,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                textAlign: 'center'
                                            }}
                                        >

                                            <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, maxWidth: 900, color: 'secondary.main', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
                                                {step.title}
                                            </Typography>
                                            <Typography variant="h6" sx={{ mb: 4, opacity: 0.95, maxWidth: 800, fontWeight: 500, lineHeight: 1.6, textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                                                {step.desc}
                                            </Typography>
                                            <Button
                                                component={Link}
                                                href="/contact"
                                                variant="contained"
                                                color="secondary"
                                                size={isMobile ? "medium" : "large"}

                                                sx={{ px: { xs: 3, md: 5 }, py: { xs: 1, md: 1.5 }, borderRadius: '50px', fontWeight: 800, color: 'primary.main', fontSize: { xs: '0.9rem', md: '1rem' } }}
                                            >
                                                Get Started
                                            </Button>
                                        </Box>
                                    </Box>
                                </Fade>
                            </Box>
                        ))}

                        {/* Navigation Arrows */}
                        <IconButton
                            onClick={handleBack}
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: 20,
                                transform: 'translateY(-50%)',
                                bgcolor: 'white',
                                color: 'primary.main',
                                width: { xs: 40, md: 56 },
                                height: { xs: 40, md: 56 },
                                '&:hover': { bgcolor: 'secondary.main', color: 'white' },
                                zIndex: 3,
                                display: { xs: 'none', md: 'flex' }
                            }}
                        >
                            <KeyboardArrowLeft sx={{ fontSize: { xs: 24, md: 32 } }} />
                        </IconButton>
                        <IconButton
                            onClick={handleNext}
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                right: 20,
                                transform: 'translateY(-50%)',
                                bgcolor: 'white',
                                color: 'primary.main',
                                width: { xs: 40, md: 56 },
                                height: { xs: 40, md: 56 },
                                '&:hover': { bgcolor: 'secondary.main', color: 'white' },
                                zIndex: 3,
                                display: { xs: 'none', md: 'flex' }
                            }}
                        >
                            <KeyboardArrowRight sx={{ fontSize: { xs: 24, md: 32 } }} />
                        </IconButton>
                    </Box>
                    {/* Mobile Navigation Arrows */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', gap: 2, mt: 3 }}>
                        <IconButton
                            onClick={handleBack}
                            sx={{
                                bgcolor: 'white',
                                color: 'primary.main',
                                width: 48,
                                height: 48,
                                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                                '&:hover': { bgcolor: 'secondary.main', color: 'white' }
                            }}
                        >
                            <KeyboardArrowLeft sx={{ fontSize: 28 }} />
                        </IconButton>
                        <IconButton
                            onClick={handleNext}
                            sx={{
                                bgcolor: 'white',
                                color: 'primary.main',
                                width: 48,
                                height: 48,
                                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                                '&:hover': { bgcolor: 'secondary.main', color: 'white' }
                            }}
                        >
                            <KeyboardArrowRight sx={{ fontSize: 28 }} />
                        </IconButton>
                    </Box>
                </Container>
            </Box>

            {/* CTA Section */}
            <Box
                sx={{
                    py: 10,
                    bgcolor: 'secondary.main',
                    color: 'primary.main',
                    textAlign: 'center'
                }}
            >
                <Container maxWidth="md">
                    <Typography variant="h3" sx={{ fontWeight: 800, mb: 3 }}>
                        Ready to Grow Your Business?
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 6, opacity: 0.9, fontWeight: 500, px: { xs: 2, md: 0 } }}>
                        Get in touch with our experts today for a free consultancy and personalized solutions.
                    </Typography>
                    <Button
                        component={Link}
                        href="/contact"
                        variant="contained"
                        color="primary"
                        sx={{
                            px: { xs: 3, md: 8 },
                            py: { xs: 1, md: 2.5 },
                            borderRadius: '50px',
                            fontWeight: 800,
                            boxShadow: '0 10px 30px rgba(10, 61, 98, 0.2)'
                        }}
                    >
                        Get Free Consultancy
                    </Button>
                </Container>
            </Box>
        </Box>
    );
}
