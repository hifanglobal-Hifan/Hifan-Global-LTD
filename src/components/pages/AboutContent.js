'use client';

import { Box, Container, Typography, Grid, Card } from '@mui/material';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export default function AboutContent() {
    return (
        <Box>
            <Breadcrumbs />
            {/* About Us Section */}
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
                        KNOW MORE ABOUT US
                    </Typography>
                    <Typography variant="h3" sx={{ fontWeight: 700, mb: 3, color: 'secondary.main' }}>
                        Leading the Way in Business Excellence
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.8, textAlign: 'justify' }}>
                        Hifan Global LTD is a UK-registered professional services and consulting firm headquartered in London, UK. We provide integrated solutions in IT services, marketing services and consultancy, business formation services, accounting and bookkeeping, and management consulting, supporting businesses at every stage of growth.

                        We work closely with entrepreneurs, startups, SMEs, and established organizations to build strong operational foundations, improve efficiency, and enable sustainable expansion. Our approach combines strategic thinking, modern technology, and practical execution to deliver tailored solutions aligned with international business standards.

                        At Hifan Global LTD, we believe in empowering businesses to move forward with clarity and confidence—transforming potential into measurable performance.

                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                        By bringing together the best experts in Web Development, SEO, Business Formation, and Management Consultancy, we provide a unified platform that drives growth and simplifies operations.
                    </Typography>
                </Box>

                {/* Vision, Mission, Philosophy Cards */}
                <Grid container spacing={4}>
                    {/* Our Vision */}
                    <Grid item xs={12} md={4}>
                        <Card
                            sx={{
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
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 700,
                                    mb: 3,
                                    color: 'primary.main',
                                    borderBottom: '3px solid',
                                    borderColor: 'secondary.main',
                                    pb: 2
                                }}
                            >
                                Our Vision
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                                To be a globally trusted consulting firm that enables businesses to grow stronger, operate smarter, and compete effectively in an evolving marketplace.
                            </Typography>
                        </Card>
                    </Grid>

                    {/* Our Mission */}
                    <Grid item xs={12} md={4}>
                        <Card
                            sx={{
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
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 700,
                                    mb: 3,
                                    color: 'primary.main',
                                    borderBottom: '3px solid',
                                    borderColor: 'secondary.main',
                                    pb: 2
                                }}
                            >
                                Our Mission
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                                To deliver reliable, ethical, and results-driven professional services that help businesses strengthen operations, make informed decisions, and achieve long-term success through structured growth and strategic support.
                            </Typography>
                        </Card>
                    </Grid>

                    {/* Our Philosophy */}
                    <Grid item xs={12} md={4}>
                        <Card
                            sx={{
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
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 700,
                                    mb: 3,
                                    color: 'primary.main',
                                    borderBottom: '3px solid',
                                    borderColor: 'secondary.main',
                                    pb: 2
                                }}
                            >
                                Our Philosophy
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                                We are guided by a simple belief: when businesses are built on clarity, structure, and expertise, their true potential emerges. Every engagement is driven by integrity, accountability, and a commitment to creating lasting value.
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
