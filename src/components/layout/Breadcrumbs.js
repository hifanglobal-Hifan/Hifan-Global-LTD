'use client';

import React from 'react';
import { Breadcrumbs as MuiBreadcrumbs, Link as MuiLink, Typography, Box, Container } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const breadcrumbNameMap = {
    '/': 'Home',
    '/about': 'About Us',
    '/services': 'Services',
    '/projects': 'Projects',
    '/blog': 'Blog',
    '/contact': 'Contact Us',
};

const Breadcrumbs = ({ customLastLabel }) => {
    const pathname = usePathname();
    const pathnames = pathname.split('/').filter((x) => x);


    if (pathname === '/') {
        return null;
    }

    return (
        <Box sx={{ bgcolor: 'grey.50', py: 2 }}>
            <Container maxWidth="lg">
                <MuiBreadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb"
                >
                    <MuiLink
                        component={Link}
                        href="/"
                        color="inherit"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            textDecoration: 'none',
                            '&:hover': { textDecoration: 'underline' }
                        }}
                    >
                        Home
                    </MuiLink>
                    {pathnames.map((value, index) => {
                        const last = index === pathnames.length - 1;
                        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                        const name = breadcrumbNameMap[to] || value.charAt(0).toUpperCase() + value.slice(1).replace(/-/g, ' ');

                        return last ? (
                            <Typography key={to} color="text.primary" sx={{ fontWeight: 600 }}>
                                {customLastLabel || name}
                            </Typography>
                        ) : (
                            <MuiLink
                                component={Link}
                                href={to}
                                key={to}
                                color="inherit"
                                sx={{
                                    textDecoration: 'none',
                                    '&:hover': { textDecoration: 'underline' }
                                }}
                            >
                                {name}
                            </MuiLink>
                        );
                    })}
                </MuiBreadcrumbs>
            </Container>
        </Box>
    );
};

export default Breadcrumbs;
