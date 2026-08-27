"use client";
import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Button, Grid, Card, useTheme, Stack, IconButton, useMediaQuery } from '@mui/material';
import DevicesIcon from '@mui/icons-material/Devices';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import GroupsIcon from '@mui/icons-material/Groups';
import SecurityIcon from '@mui/icons-material/Security';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import Link from 'next/link';
import Image from 'next/image';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import StorefrontIcon from '@mui/icons-material/Storefront';
import DomainIcon from '@mui/icons-material/Domain';
import LanguageIcon from '@mui/icons-material/Language';
import SchoolIcon from '@mui/icons-material/School';
import ChatIcon from '@mui/icons-material/Chat';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import EngineeringIcon from '@mui/icons-material/Engineering';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import { ArrowBack, ArrowForward, FormatQuote } from '@mui/icons-material';

const services = [
    {
        title: 'IT Services',
        desc: 'We provide end-to-end IT solutions including web development, SEO, and reliable IT infrastructure to help businesses operate efficiently and scale with confidence.',
        icon: <TrendingUpIcon sx={{ fontSize: { xs: 32, md: 40 } }} />,
        number: '01'
    },
    {
        title: 'Marketing',
        desc: 'Our marketing services focus on building strong digital presence through targeted campaigns, social media management, and strategic brand consulting to drive growth.',
        icon: <SecurityIcon sx={{ fontSize: { xs: 32, md: 40 } }} />,
        number: '02'
    },
    {
        title: 'Business Formation',
        desc: 'We assist entrepreneurs and companies with complete business setup, handling registration, compliance, and legal processes both locally and internationally.',
        icon: <LightbulbIcon sx={{ fontSize: { xs: 32, md: 40 } }} />,
        number: '03'
    },
    {
        title: 'Management Consultancy',
        desc: 'Our consultancy services offer strategic insights and practical solutions to improve operational efficiency, organizational structure, and overall business performance.',
        icon: <TrendingUpIcon sx={{ fontSize: { xs: 32, md: 40 } }} />,
        number: '04'
    },
    {
        title: 'Accounting & Bookkeeping',
        desc: 'We deliver professional accounting and bookkeeping services to ensure accurate financial records, regulatory compliance, and informed financial decision-making.',
        icon: <AccountBalanceIcon sx={{ fontSize: { xs: 32, md: 40 } }} />,
        number: '05'
    },
];

export default function HomeContent() {
    const theme = useTheme();
    const [testimonialStep, setTestimonialStep] = useState(0);
    const [serviceStep, setServiceStep] = useState(0);
    const [isServiceTransitioning, setIsServiceTransitioning] = useState(true);
    const [whoWeHelpStep, setWhoWeHelpStep] = useState(0);
    const [isWhoWeHelpTransitioning, setIsWhoWeHelpTransitioning] = useState(true);
    const [howItWorksStep, setHowItWorksStep] = useState(0);
    const [isHowItWorksTransitioning, setIsHowItWorksTransitioning] = useState(true);
    const [isTestimonialTransitioning, setIsTestimonialTransitioning] = useState(true);
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));

    const whoWeHelpData = [
        {
            title: 'Entrepreneurs & Startups',
            desc: 'Business formation, structuring, accounting setup, IT support, and strategic guidance from idea to execution.',
            icon: <RocketLaunchIcon />,
            color: 'secondary.main'
        },
        {
            title: 'Small & Medium-Sized Businesses',
            desc: 'Operational optimization, financial management, marketing strategy, and scalable systems for sustainable growth.',
            icon: <StorefrontIcon />,
            color: 'secondary.main'
        },
        {
            title: 'Established Companies',
            desc: 'Management consulting, process improvement, digital transformation, and strategic advisory services.',
            icon: <DomainIcon />,
            color: 'secondary.main'
        },
        {
            title: 'Digital & Online Businesses',
            desc: 'IT solutions, marketing consultancy, accounting support, and performance optimization.',
            icon: <LanguageIcon />,
            color: 'secondary.main'
        },
        {
            title: 'Students & Early-Stage Professionals',
            desc: 'Business setup guidance, digital skills consulting, and entrepreneurial advisory services.',
            icon: <SchoolIcon />,
            color: 'secondary.main'
        }
    ];

    const steps = [
        {
            title: 'Initial Consultation',
            desc: 'We assess your requirements, objectives, and challenges to understand your business needs.',
            icon: <ChatIcon sx={{ fontSize: { xs: 28, md: 32 } }} />
        },
        {
            title: 'Strategy & Design',
            desc: 'We develop a comprehensive plan and creative design tailored to your specific goals.',
            icon: <DesignServicesIcon sx={{ fontSize: { xs: 28, md: 32 } }} />
        },
        {
            title: 'Development & Implementation',
            desc: 'Our team executes the plan with precision, building robust solutions that drive results.',
            icon: <EngineeringIcon sx={{ fontSize: { xs: 28, md: 32 } }} />
        },
        {
            title: 'Launch & Optimization',
            desc: 'We launch your solution and continuously monitor performance to ensure maximum impact.',
            icon: <PublishedWithChangesIcon sx={{ fontSize: { xs: 28, md: 32 } }} />
        }
    ];

    const testimonials = [
        {
            feedback: "Hifan Global LTD delivered a reliable IT solution that improved our system efficiency and reduced operational issues. Their team was responsive and technically sound.",
            name: "Sammy G",
            role: "IT Services"
        },
        {
            feedback: "The strategic guidance we received was instrumental in scaling our operations. Hifan Global is a partner you can trust.",
            name: "Jennifer M",
            role: "Business Director"
        },
        {
            feedback: "Exceptional marketing services that truly understood our target audience. Our engagement has never been higher.",
            name: "David K",
            role: "Marketing Head"
        },
        {
            feedback: "From company formation to IT setup, Hifan Global handled everything seamlessly. A true one-stop solution.",
            name: "Priya S",
            role: "Startup Founder"
        }
    ];



    const itemsToShow = isMobile ? 1 : isTablet ? 2 : 3;

    // Extend data for circular loops
    const extendedServices = [...services, ...services];
    const extendedTestimonials = [...testimonials, ...testimonials];
    const extendedWhoWeHelp = [...whoWeHelpData, ...whoWeHelpData];
    const extendedHowItWorks = [...steps, ...steps];


    // Who We Help Loop Logic
    useEffect(() => {
        if (!isMobile) return;
        const interval = setInterval(() => {
            setWhoWeHelpStep((prev) => prev + 1);
        }, 3000);
        return () => clearInterval(interval);
    }, [isMobile]);

    useEffect(() => {
        if (!isMobile) return;
        if (whoWeHelpStep === whoWeHelpData.length) {
            const timeout = setTimeout(() => {
                setIsWhoWeHelpTransitioning(false);
                setWhoWeHelpStep(0);
            }, 500);
            return () => clearTimeout(timeout);
        }
        if (whoWeHelpStep === 0 && !isWhoWeHelpTransitioning) {
            const timeout = setTimeout(() => {
                setIsWhoWeHelpTransitioning(true);
            }, 50);
            return () => clearTimeout(timeout);
        }
    }, [whoWeHelpStep, isWhoWeHelpTransitioning, isMobile, whoWeHelpData.length]);

    // How It Works Loop Logic
    useEffect(() => {
        if (!isMobile) return;
        const interval = setInterval(() => {
            setHowItWorksStep((prev) => prev + 1);
        }, 3000);
        return () => clearInterval(interval);
    }, [isMobile]);

    useEffect(() => {
        if (!isMobile) return;
        if (howItWorksStep === steps.length) {
            const timeout = setTimeout(() => {
                setIsHowItWorksTransitioning(false);
                setHowItWorksStep(0);
            }, 500);
            return () => clearTimeout(timeout);
        }
        if (howItWorksStep === 0 && !isHowItWorksTransitioning) {
            const timeout = setTimeout(() => {
                setIsHowItWorksTransitioning(true);
            }, 50);
            return () => clearTimeout(timeout);
        }
    }, [howItWorksStep, isHowItWorksTransitioning, isMobile, steps.length]);

    const itemsToShowNum = itemsToShow; // Helper alias if needed, but using itemsToShow directly is fine.

    // No longer using itemsToShow in dependency for step count to allow full loop

    useEffect(() => {
        const interval = setInterval(() => {
            setTestimonialStep((prev) => prev + 1);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (testimonialStep === testimonials.length) {
            const timeout = setTimeout(() => {
                setIsTestimonialTransitioning(false);
                setTestimonialStep(0);
            }, 500); // Wait for transition to finish
            return () => clearTimeout(timeout);
        }
        if (testimonialStep === 0 && !isTestimonialTransitioning) {
            const timeout = setTimeout(() => {
                setIsTestimonialTransitioning(true);
            }, 50); // Small delay to frame update
            return () => clearTimeout(timeout);
        }
    }, [testimonialStep, isTestimonialTransitioning, testimonials.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            setServiceStep((prev) => prev + 1);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (serviceStep === services.length) {
            const timeout = setTimeout(() => {
                setIsServiceTransitioning(false);
                setServiceStep(0);
            }, 500);
            return () => clearTimeout(timeout);
        }
        if (serviceStep === 0 && !isServiceTransitioning) {
            const timeout = setTimeout(() => {
                setIsServiceTransitioning(true);
            }, 50);
            return () => clearTimeout(timeout);
        }
    }, [serviceStep, isServiceTransitioning]);

    const handleTestimonialNext = () => {
        setTestimonialStep((prev) => prev + 1);
    };

    const handleTestimonialPrev = () => {
        setTestimonialStep((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const handleServiceNext = () => {
        if (serviceStep >= services.length) return;
        setServiceStep((prev) => prev + 1);
    };

    const handleServicePrev = () => {
        setServiceStep((prev) => (prev - 1 + services.length) % services.length);
    };

    return (
        <Box>
            {/* Hero Section */}
            <Box
                sx={{
                    height: '100vh',
                    width: '100%',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    mt: '-80px',
                    pt: '80px',
                    overflow: 'hidden',
                    background: 'linear-gradient(-45deg, #0a3d62, #1a4a6e, #0a3d62, #05263d)',
                    backgroundSize: '400% 400%',
                    animation: 'gradient 15s ease infinite',
                    '@keyframes gradient': {
                        '0%': { backgroundPosition: '0% 50%' },
                        '50%': { backgroundPosition: '100% 50%' },
                        '100%': { backgroundPosition: '0% 50%' },
                    },
                    color: '#fff',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: 'url("/images/back-img.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: 0.6,
                        mixBlendMode: 'normal',
                    },
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(10, 61, 98, 0.4)',
                        zIndex: 1
                    }
                }}
            >
                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
                    <Box sx={{ maxWidth: 750 }}>
                        <Typography
                            variant="h2"
                            component="h2"
                            sx={{
                                fontWeight: 800,
                                mb: 2,
                                lineHeight: 1.1,
                                color: '#fff'
                            }}
                        >
                            Building Trust, <br />
                            <span style={{ color: theme.palette.secondary.main }}>Driving Growth</span>
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={{
                                mb: 4,
                                fontWeight: 400,
                                opacity: 0.9,
                                color: 'rgba(255,255,255,0.9)',
                                lineHeight: 1.6,
                                maxWidth: '600px'
                            }}
                        >
                            Hifan Global empowers businesses with cutting-edge IT, Marketing, and Consultancy services. Your one-stop shop for business excellence.
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            <Button
                                component={Link}
                                href="/contact"
                                variant="contained"
                                color="secondary"
                                size="large"
                                sx={{
                                    px: { xs: 3, md: 4 },
                                    py: { xs: 1, md: 1.5 },
                                    borderRadius: '50px',
                                    fontWeight: 800
                                }}
                            >
                                Contact Us
                            </Button>
                            <Button
                                component={Link}
                                href="/services"
                                variant="outlined"
                                size="large"
                                sx={{
                                    color: '#fff',
                                    borderColor: '#fff',
                                    '&:hover': { borderColor: theme.palette.secondary.main, color: theme.palette.secondary.main, bgcolor: 'transparent' },
                                    px: { xs: 2, md: 3 },
                                    py: { xs: 0.5, md: 1 },
                                    borderRadius: '50px',
                                    fontWeight: 700
                                }}
                            >
                                Our Services
                            </Button>
                        </Stack>
                    </Box>
                </Container>
            </Box>

            {/* Services Section */}
            <Box sx={{ py: { xs: 6, md: 12 }, bgcolor: 'background.paper' }}>
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography variant="overline" sx={{ fontWeight: 800, color: 'primary.main', letterSpacing: 2 }}>OUR SERVICES</Typography>
                        <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, mt: 1 }}>What We Offer</Typography>
                        <Box sx={{ width: 60, height: 4, bgcolor: 'secondary.main', mx: 'auto', borderRadius: 2 }} />
                    </Box>
                    <Box sx={{ position: 'relative', px: { xs: 2, md: 6 } }}>
                        <IconButton
                            onClick={handleServicePrev}
                            sx={{
                                position: 'absolute',
                                left: { xs: -10, md: -20 },
                                top: '50%',
                                transform: 'translateY(-50%)',
                                zIndex: 2,
                                bgcolor: 'white',
                                boxShadow: 3,
                                '&:hover': { bgcolor: 'secondary.main' },
                                '& .MuiSvgIcon-root': { fontSize: 32, color: 'primary.main' },
                                display: { xs: 'none', sm: 'flex' }
                            }}
                        >
                            <ArrowBack />
                        </IconButton>

                        <IconButton
                            onClick={handleServiceNext}
                            sx={{
                                position: 'absolute',
                                right: { xs: -10, md: -20 },
                                top: '50%',
                                transform: 'translateY(-50%)',
                                zIndex: 2,
                                bgcolor: 'white',
                                boxShadow: 3,
                                '&:hover': { bgcolor: 'secondary.main' },
                                '& .MuiSvgIcon-root': { fontSize: 32, color: 'primary.main' },
                                display: { xs: 'none', sm: 'flex' }
                            }}
                        >
                            <ArrowForward />
                        </IconButton>

                        <Box sx={{ overflow: 'hidden', width: '100%', py: 4, mx: -2, px: 2 }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    transition: isServiceTransitioning ? 'transform 0.5s ease-in-out' : 'none',
                                    transform: `translateX(-${serviceStep * (100 / extendedServices.length)}%)`,
                                    width: `${(extendedServices.length / itemsToShow) * 100}%`
                                }}
                            >
                                {extendedServices.map((service, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            width: `${100 / extendedServices.length}%`,
                                            px: 2,
                                            boxSizing: 'border-box',
                                            display: 'flex'
                                        }}
                                    >
                                        <Card
                                            sx={{
                                                width: '100%',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                p: { xs: 3, md: 4 },
                                                transition: 'all 0.3s ease',
                                                borderTop: `4px solid ${theme.palette.secondary.main}`,
                                                boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                                                borderRadius: 3,
                                                height: '100%',
                                                '&:hover': {
                                                    transform: 'translateY(-10px)',
                                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                                    borderColor: theme.palette.secondary.main
                                                }
                                            }}
                                        >
                                            <Box sx={{ mb: 3, p: 2, bgcolor: 'rgba(255, 209, 102, 0.1)', borderRadius: '12px', width: 'fit-content' }}>
                                                {React.cloneElement(service.icon, { sx: { fontSize: { xs: 32, md: 40 }, color: 'primary.main' } })}
                                            </Box>
                                            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>{service.title}</Typography>
                                            <Typography variant="body2" sx={{ lineHeight: 1.8, color: 'text.secondary', flexGrow: 1, textAlign: 'justify' }}>
                                                {service.desc}
                                            </Typography>
                                        </Card>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                        {/* Mobile Navigation Dots for Services */}
                        <Box sx={{ display: { xs: 'flex', sm: 'none' }, justifyContent: 'center', mt: 4, gap: 1 }}>
                            {Array.from({ length: Math.ceil(services.length) }).map((_, index) => {

                                if (index > services.length - itemsToShow) return null;
                                return (
                                    <Box
                                        key={index}
                                        onClick={() => setServiceStep(index)}
                                        sx={{
                                            width: 10,
                                            height: 10,
                                            borderRadius: '50%',
                                            bgcolor: index === serviceStep ? 'secondary.main' : 'rgba(0,0,0,0.1)',
                                            cursor: 'pointer'
                                        }}
                                    />
                                );
                            })}
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* Why Choose Us Section */}
            <Box sx={{ py: { xs: 6, md: 12 }, bgcolor: '#f8f9fa' }}>
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: 'center', mb: 8, maxWidth: 800, mx: 'auto' }}>
                        <Typography variant="overline" sx={{ fontWeight: 800, color: 'primary.main', letterSpacing: 2 }}>WHY CHOOSE US</Typography>
                        <Typography variant="h3" sx={{ fontWeight: 800, mb: 3, mt: 1 }}>
                            Practical Solutions, <span style={{ color: theme.palette.secondary.main }}>Measurable Results</span>
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                            At Hifan Global LTD, we focus on delivering practical solutions backed by expertise, structure, and accountability.
                        </Typography>
                    </Box>

                    <Box sx={{ maxWidth: 900, mx: 'auto', textAlign: 'center', px: { xs: 2, md: 0 } }}>
                        <Typography variant="body1" sx={{ lineHeight: 2, color: 'text.secondary', mb: 4 }}>
                            Hifan Global defines itself through <Box component="span" sx={{ fontWeight: 800, color: 'primary.main' }}>Multi-Disciplinary Expertise</Box>, acting as your single partner for IT, marketing, and business consultancy. We combine <Box component="span" sx={{ fontWeight: 800, color: 'primary.main' }}>Strategic & Practical</Box> approaches, ensuring long-term planning meets hands-on execution.
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: 2, color: 'text.secondary' }}>
                            Operating as a <Box component="span" sx={{ fontWeight: 800, color: 'primary.main' }}>UK-Registered</Box> entity, we maintain high standards of <Box component="span" sx={{ fontWeight: 800, color: 'primary.main' }}>Transparency</Box> and ethics. Above all, we are <Box component="span" sx={{ fontWeight: 800, color: 'primary.main' }}>Client-Focused</Box>, tailoring every engagement to your specific goals and industry.
                        </Typography>
                    </Box>
                </Container>
            </Box>

            {/* Who We Help Section */}
            <Box sx={{ py: { xs: 6, md: 12 }, bgcolor: 'background.paper' }}>
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography variant="overline" sx={{ fontWeight: 800, color: 'primary.main', letterSpacing: 2 }}>WHO WE HELP</Typography>
                        <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, mt: 1 }}>Partnering for Success</Typography>
                        <Box sx={{ width: 60, height: 4, bgcolor: 'secondary.main', mx: 'auto', borderRadius: 2, mb: 3 }} />
                        <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 800, mx: 'auto' }}>
                            We support a diverse range of clients by adapting our services to their specific operational and growth needs.
                        </Typography>
                    </Box>

                    {isMobile ? (
                        /* Mobile Slider for Who We Help */
                        <Box sx={{ overflow: 'hidden' }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    transition: isWhoWeHelpTransitioning ? 'transform 0.5s ease-in-out' : 'none',
                                    transform: `translateX(-${whoWeHelpStep * (100 / extendedWhoWeHelp.length)}%)`,
                                    width: `${extendedWhoWeHelp.length * 100}%`
                                }}
                            >
                                {extendedWhoWeHelp.map((client, index) => (
                                    <Box key={index} sx={{ width: `${100 / extendedWhoWeHelp.length}%`, px: 2, boxSizing: 'border-box' }}>
                                        <Box sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            textAlign: 'center',
                                            gap: 4
                                        }}>
                                            <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                p: 4,
                                                bgcolor: 'rgba(0,0,0,0.02)',
                                                borderRadius: '50%',
                                                width: { xs: 140, sm: 200 },
                                                height: { xs: 140, sm: 200 },
                                                mx: 'auto'
                                            }}>
                                                {React.cloneElement(client.icon, { sx: { fontSize: { xs: 60, sm: 100 }, color: client.color } })}
                                            </Box>
                                            <Box>
                                                <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>{client.title}</Typography>
                                                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, textAlign: 'justify' }}>
                                                    {client.desc}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                            {/* Dots for Who We Help */}
                            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, gap: 1 }}>
                                {whoWeHelpData.map((_, index) => (
                                    <Box
                                        key={index}
                                        onClick={() => setWhoWeHelpStep(index)}
                                        sx={{
                                            width: 10,
                                            height: 10,
                                            borderRadius: '50%',
                                            bgcolor: index === whoWeHelpStep ? 'secondary.main' : 'rgba(0,0,0,0.1)',
                                            cursor: 'pointer'
                                        }}
                                    />
                                ))}
                            </Box>
                        </Box>
                    ) : (
                        /* Desktop Stack for Who We Help */
                        <Stack spacing={8}>
                            {whoWeHelpData.map((client, index) => (
                                <Box key={index} sx={{
                                    display: 'flex',
                                    flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                                    gap: { xs: 4, md: 8 },
                                    alignItems: 'center'
                                }}>
                                    {/* Visual Side */}
                                    <Box sx={{
                                        flex: 1,
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        p: 4
                                    }}>
                                        {React.cloneElement(client.icon, { sx: { fontSize: 150, color: client.color } })}
                                    </Box>

                                    {/* Text Side */}
                                    <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
                                        <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>{client.title}</Typography>
                                        <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, textAlign: 'justify' }}>
                                            {client.desc}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Stack>
                    )}
                </Container>
            </Box>

            {/* How It Works Section */}
            <Box sx={{ py: { xs: 6, md: 12 }, bgcolor: '#f8f9fa' }}>
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography variant="overline" sx={{ fontWeight: 800, color: 'primary.main', letterSpacing: 2 }}>HOW IT WORKS</Typography>
                        <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, mt: 1 }}>Our Process</Typography>
                        <Box sx={{ width: 60, height: 4, bgcolor: 'secondary.main', mx: 'auto', borderRadius: 2, mb: 3 }} />
                        <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 800, mx: 'auto' }}>
                            Our process is designed to be structured, transparent, and efficient.
                        </Typography>
                    </Box>

                    <Box sx={{ position: 'relative', mt: 8 }}>
                        {/* Connecting Line (Desktop Only) */}
                        <Box sx={{
                            position: 'absolute',
                            top: 40,
                            left: 0,
                            right: 0,
                            height: 4,
                            bgcolor: 'rgba(10, 61, 98, 0.1)',
                            display: { xs: 'none', md: 'block' },
                            zIndex: 0
                        }} />

                        {isMobile ? (
                            /* Mobile Slider for How It Works */
                            <Box sx={{ overflow: 'hidden' }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        transition: isHowItWorksTransitioning ? 'transform 0.5s ease-in-out' : 'none',
                                        transform: `translateX(-${howItWorksStep * (100 / extendedHowItWorks.length)}%)`,
                                        width: `${extendedHowItWorks.length * 100}%`
                                    }}
                                >
                                    {extendedHowItWorks.map((step, index) => (
                                        <Box key={index} sx={{ width: `${100 / extendedHowItWorks.length}%`, px: 2, boxSizing: 'border-box' }}>
                                            <Box
                                                sx={{
                                                    position: 'relative',
                                                    zIndex: 1,
                                                    textAlign: 'center',
                                                    height: '100%',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    p: 2
                                                }}
                                            >
                                                <Box sx={{
                                                    width: { xs: 60, sm: 80 },
                                                    height: { xs: 60, sm: 80 },
                                                    bgcolor: 'secondary.main',
                                                    borderRadius: '50%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    mb: 3,
                                                    boxShadow: '0 10px 20px rgba(255, 209, 102, 0.3)',
                                                    color: 'primary.dark',
                                                    border: '4px solid #fff'
                                                }}>
                                                    <Typography variant="h4" sx={{ fontWeight: 800 }}>{(index % steps.length) + 1}</Typography>
                                                </Box>

                                                <Box sx={{
                                                    flex: 1,
                                                    bgcolor: '#fff',
                                                    p: 3,
                                                    borderRadius: 4,
                                                    boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                                                    width: '100%',
                                                }}>
                                                    <Box sx={{ mb: 2, color: 'primary.main', opacity: 0.7 }}>
                                                        {step.icon}
                                                    </Box>
                                                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>{step.title}</Typography>
                                                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                                                        {step.desc}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    ))}
                                </Box>
                                {/* Dots for How It Works */}
                                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, gap: 1 }}>
                                    {steps.map((_, index) => (
                                        <Box
                                            key={index}
                                            onClick={() => setHowItWorksStep(index)}
                                            sx={{
                                                width: 10,
                                                height: 10,
                                                borderRadius: '50%',
                                                bgcolor: index === howItWorksStep ? 'secondary.main' : 'rgba(0,0,0,0.1)',
                                                cursor: 'pointer'
                                            }}
                                        />
                                    ))}
                                </Box>
                            </Box>
                        ) : (
                            /* Desktop Grid for How It Works */
                            <Box sx={{
                                display: 'grid',
                                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' },
                                gap: 4,
                                width: '100%'
                            }}>
                                {steps.map((step, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            position: 'relative',
                                            zIndex: 1,
                                            textAlign: 'center',
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            p: 2
                                        }}
                                    >
                                        <Box sx={{
                                            width: 80,
                                            height: 80,
                                            bgcolor: 'secondary.main',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            mb: 3,
                                            boxShadow: '0 10px 20px rgba(255, 209, 102, 0.3)',
                                            color: 'primary.dark',
                                            border: '4px solid #fff'
                                        }}>
                                            <Typography variant="h4" sx={{ fontWeight: 800 }}>{index + 1}</Typography>
                                        </Box>

                                        <Box sx={{
                                            flex: 1,
                                            bgcolor: '#fff',
                                            p: 3,
                                            borderRadius: 4,
                                            boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                                            width: '100%',
                                        }}>
                                            <Box sx={{ mb: 2, color: 'primary.main', opacity: 0.7 }}>
                                                {step.icon}
                                            </Box>
                                            <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>{step.title}</Typography>
                                            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                                                {step.desc}
                                            </Typography>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        )}

                    </Box>
                </Container>
            </Box>

            {/* Testimonials Section */}
            <Box sx={{ py: { xs: 6, md: 12 }, bgcolor: 'background.paper' }}>
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography variant="overline" sx={{ fontWeight: 800, color: 'primary.main', letterSpacing: 2 }}>TESTIMONIALS</Typography>
                        <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, mt: 1 }}>What Our Clients Say</Typography>
                        <Box sx={{ width: 80, height: 8, bgcolor: 'secondary.main', mx: 'auto', borderRadius: 1 }} />
                    </Box>

                    <Box sx={{ position: 'relative', px: { xs: 2, md: 6 } }}>
                        <IconButton
                            onClick={handleTestimonialPrev}
                            sx={{
                                position: 'absolute',
                                left: { xs: -10, md: -20 },
                                top: '50%',
                                transform: 'translateY(-50%)',
                                zIndex: 2,
                                bgcolor: 'white',
                                boxShadow: 3,
                                '&:hover': { bgcolor: 'secondary.main' },
                                '& .MuiSvgIcon-root': { fontSize: 32, color: 'primary.main' },
                                display: { xs: 'none', sm: 'flex' }
                            }}
                        >
                            <ArrowBack />
                        </IconButton>

                        <IconButton
                            onClick={handleTestimonialNext}
                            sx={{
                                position: 'absolute',
                                right: { xs: -10, md: -20 },
                                top: '50%',
                                transform: 'translateY(-50%)',
                                zIndex: 2,
                                bgcolor: 'white',
                                boxShadow: 3,
                                '&:hover': { bgcolor: 'secondary.main' },
                                '& .MuiSvgIcon-root': { fontSize: 32, color: 'primary.main' },
                                display: { xs: 'none', sm: 'flex' }
                            }}
                        >
                            <ArrowForward />
                        </IconButton>

                        <Box sx={{ overflow: 'hidden', width: '100%', py: 4, mx: -2, px: 2 }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'stretch',
                                    transition: isTestimonialTransitioning ? 'transform 0.5s ease-in-out' : 'none',
                                    transform: `translateX(-${testimonialStep * (100 / extendedTestimonials.length)}%)`,
                                    width: `${(extendedTestimonials.length / itemsToShow) * 100}%`
                                }}
                            >
                                {extendedTestimonials.map((item, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            width: `${100 / extendedTestimonials.length}%`,
                                            px: 2,
                                            boxSizing: 'border-box',
                                            display: 'flex',
                                            flexDirection: 'column'
                                        }}
                                    >
                                        <Card sx={{
                                            p: 3,
                                            flexGrow: 1,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            bgcolor: '#fff',
                                            boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                                            borderRadius: 4,
                                            position: 'relative',
                                            overflow: 'visible',
                                            transition: 'transform 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-5px)',
                                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                            }
                                        }}>
                                            <Box sx={{
                                                position: 'absolute',
                                                top: -15,
                                                left: 20,
                                                width: 30,
                                                height: 30,
                                                bgcolor: 'secondary.main',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'primary.dark'
                                            }}>
                                                <FormatQuote sx={{ fontSize: 18 }} />
                                            </Box>
                                            <Typography variant="body2" sx={{
                                                lineHeight: 1.6,
                                                mb: 2,
                                                fontStyle: 'italic',
                                                color: 'text.secondary',
                                                display: '-webkit-box',
                                                WebkitLineClamp: 4,
                                                WebkitBoxOrient: 'vertical',
                                                overflow: 'hidden',
                                                textAlign: 'justify'
                                            }}>
                                                "{item.feedback}"
                                            </Typography>
                                            <Box sx={{ mt: 'auto', display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                                <Box sx={{
                                                    width: 40,
                                                    height: 40,
                                                    bgcolor: 'primary.main',
                                                    borderRadius: '50%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: '#fff',
                                                    fontWeight: 700,
                                                    fontSize: '1rem'
                                                }}>
                                                    {item.name.charAt(0)}
                                                </Box>
                                                <Box>
                                                    <Typography variant="subtitle2" sx={{ fontWeight: 800, lineHeight: 1.2 }}>{item.name}</Typography>
                                                    <Typography variant="caption" sx={{ color: 'secondary.main', fontWeight: 600 }}>{item.role}</Typography>
                                                </Box>
                                            </Box>
                                        </Card>
                                    </Box>
                                ))}
                            </Box>
                        </Box>

                        {/* Mobile Navigation*/}
                        <Box sx={{ display: { xs: 'flex', sm: 'none' }, justifyContent: 'center', mt: 4, gap: 1 }}>
                            {testimonials.map((_, index) => {
                                if (index > testimonials.length - itemsToShow) return null;
                                return (
                                    <Box
                                        key={index}
                                        onClick={() => setTestimonialStep(index)}
                                        sx={{
                                            width: 10,
                                            height: 10,
                                            borderRadius: '50%',
                                            bgcolor: index === testimonialStep ? 'secondary.main' : 'rgba(0,0,0,0.1)',
                                            cursor: 'pointer'
                                        }}
                                    />
                                )
                            })}
                        </Box>
                    </Box>
                </Container>
            </Box>


            {/* CTA Section */}
            <Box
                sx={{
                    py: 12,
                    bgcolor: 'secondary.main',
                    color: 'primary.main',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2) 0%, transparent 70%)',
                        pointerEvents: 'none'
                    }
                }}
            >
                <Container maxWidth="md" sx={{ position: 'relative' }}>
                    <Typography variant="h3" sx={{ fontWeight: 800, mb: 3, color: 'primary.main' }}>Ready to Grow Your Business?</Typography>
                    <Typography variant="h6" sx={{ mb: 6, opacity: 0.9, fontWeight: 500, color: 'primary.main', px: { xs: 2, md: 0 } }}>Contact us today for a free consultancy and take the first step towards success.</Typography>
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
                            boxShadow: '0 10px 30px rgba(10, 61, 98, 0.3)',
                            '&:hover': {
                                transform: 'scale(1.05)',
                                transition: 'transform 0.3s ease'
                            }
                        }}
                    >
                        Contact Us Now
                    </Button>
                </Container>
            </Box>
        </Box>
    );
}
