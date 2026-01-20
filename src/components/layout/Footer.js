'use client';

import React from 'react';
import { Box, Container, Grid, Typography, Link as MuiLink, IconButton, Divider, TextField, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: '#0A3D62', color: '#fff', pt: 8, pb: 4 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ mb: 3 }}>
                            <Image src="/images/white-logo.png" alt="Hifan Global" width={180} height={60} style={{ objectFit: 'contain' }} />
                        </Box>
                        <Typography variant="body2" sx={{ mb: 3, color: 'rgba(255,255,255,0.8)', lineHeight: 2 }}>
                            Hifan Global is your one-stop shop for IT, Marketing, and Consultancy services. We empower businesses with innovative solutions to achieve global excellence.
                        </Typography>

                    </Grid>

                    <Grid item xs={6} md={2}>
                        <Typography variant="h6" sx={{ mb: 3, fontWeight: 700, color: 'secondary.main' }}>Company</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                            {[
                                { label: 'About Us', path: '/about' },
                                { label: 'Services', path: '/services' },
                                { label: 'Projects', path: '/projects' },
                                { label: 'Blog', path: '/blog' },
                                { label: 'Contact Us', path: '/contact' }
                            ].map((item) => (
                                <Link key={item.label} href={item.path} passHref style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
                                    {item.label}
                                </Link>
                            ))}
                        </Box>
                    </Grid>

                    <Grid item xs={6} md={3}>
                        <Typography variant="h6" sx={{ mb: 3, fontWeight: 700, color: 'secondary.main' }}>Solutions</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                            {[
                                'IT Services',
                                'Marketing',
                                'Business Formation',
                                'Management Consultancy',
                                'Accounting & Bookkeeping'
                            ].map((service) => (
                                <MuiLink
                                    key={service}
                                    component={Link}
                                    href="/services"
                                    sx={{
                                        color: 'rgba(255,255,255,0.8)',
                                        textDecoration: 'none',
                                        '&:hover': { color: 'secondary.main' }
                                    }}
                                >
                                    {service}
                                </MuiLink>
                            ))}
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" sx={{ mb: 1.7, fontWeight: 700, color: 'secondary.main' }}>Contact Info</Typography>
                        <Box sx={{ mb: 2 }}>
                            <Typography variant="subtitle2" sx={{ color: 'secondary.main', fontWeight: 800 }}>UK Office:</Typography>
                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>Suite C163 4 - 6, Greatorex Street</Typography>
                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>London, United Kingdom E1 5NF</Typography>
                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>+44 7856 228013</Typography>
                        </Box>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>info@hifanglobal.com</Typography>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)' }}>
                        © 2024 Hifan Global LTD. All rights reserved.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 3 }}>
                        <MuiLink component={Link} href="/privacy-policy" sx={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '0.8rem', '&:hover': { color: '#fff' } }}>
                            Privacy Policy
                        </MuiLink>
                        <MuiLink component={Link} href="/terms-of-service" sx={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '0.8rem', '&:hover': { color: '#fff' } }}>
                            Terms of Service
                        </MuiLink>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
