'use client';

import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Container,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'Blog', path: '/blog' },
];

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 50,
    });

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', p: 2 }}>
            <Box sx={{ my: 2, display: 'flex', justifyContent: 'center' }}>
                <Image
                    src="/images/Hifan-blue-logo.png"
                    alt="Hifan Global"
                    width={180}
                    height={60}
                    style={{
                        objectFit: 'contain'
                    }}
                />
            </Box>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <Link href={item.path} passHref style={{ textDecoration: 'none', width: '100%', color: 'inherit' }}>
                            <ListItemText
                                primary={item.label}
                                sx={{
                                    textAlign: 'center',
                                    color: pathname === item.path ? 'primary.main' : 'inherit',
                                    fontWeight: pathname === item.path ? 700 : 400
                                }}
                            />
                        </Link>
                    </ListItem>
                ))}
            </List>
            <Button
                component={Link}
                href="/contact"
                variant="contained"
                color="primary"
                sx={{ mt: 2, width: '100%' }}
            >
                Contact Us
            </Button>
        </Box>
    );

    const isHome = pathname === '/';

    return (
        <AppBar
            position="sticky"
            elevation={trigger ? 4 : 0}
            sx={{
                bgcolor: trigger ? 'background.paper' : (isHome ? 'transparent' : 'background.paper'),
                color: trigger || !isHome ? 'text.primary' : '#fff',
                transition: 'all 0.3s ease',
                borderBottom: trigger || !isHome ? 'none' : '1px solid rgba(255,255,255,0.2)',
                top: 0,
                zIndex: 1100
            }}
        >
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ py: trigger ? 0.75 : 2, transition: 'padding 0.3s ease' }}>
                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                        <Link href="/" style={{
                            display: 'flex',
                            alignItems: 'center',
                            textDecoration: 'none',
                            position: 'relative',
                            width: (trigger || !isHome) ? 180 : 'auto',
                            height: (trigger || !isHome) ? 60 : 'auto',
                        }}>
                            <Image
                                src={trigger || !isHome ? "/images/Hifan-blue-logo.png" : "/images/white-logo.png"}
                                alt="Hifan Global"
                                width={trigger || !isHome ? 240 : 160}
                                height={trigger || !isHome ? 120 : 50}
                                style={{
                                    objectFit: 'contain',
                                    transition: 'all 0.3s ease',
                                    filter: 'none',
                                    ...((trigger || !isHome) && {
                                        position: 'absolute',
                                        top: '50%',
                                        left: 0,
                                        transform: 'translateY(-50%)',
                                        // Ensure it doesn't get clipped if overflow is hidden (Toolbar usually isn't)
                                        maxWidth: 'none',
                                    })
                                }}
                            />
                        </Link>
                    </Box>

                    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 3 }}>
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.path}
                                className="nav-link"
                                style={{
                                    textDecoration: 'none',
                                    color: 'inherit', // Uses AppBar's color sx property
                                    fontWeight: pathname === item.path ? 700 : 500,
                                    fontSize: '1rem',
                                    letterSpacing: '0.5px',
                                    position: 'relative',
                                    paddingBottom: '4px',
                                    transition: 'color 0.3s ease',
                                    textShadow: trigger || !isHome ? 'none' : '0 1px 4px rgba(0,0,0,0.5)',
                                    '&:hover': {
                                        color: 'secondary.main'
                                    }
                                }}
                            >
                                {item.label}
                                {pathname === item.path && (
                                    <Box sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '2px',
                                        bgcolor: 'secondary.main'
                                    }} />
                                )}
                            </Link>
                        ))}
                        <Button
                            component={Link}
                            href="/contact"
                            variant="contained"
                            color={isHome && !trigger ? "secondary" : "primary"}
                            sx={{
                                borderRadius: '50px',
                                px: 3,
                                fontSize: '0.9rem',
                                boxShadow: 'none',
                                fontWeight: 800
                            }}
                        >
                            Contact Us
                        </Button>
                    </Box>

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{
                            display: { md: 'none' },
                            filter: trigger || !isHome ? 'none' : 'drop-shadow(0 1px 4px rgba(0,0,0,0.5))'
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </Container>

            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 260 },
                }}
            >
                {drawer}
            </Drawer>
        </AppBar>
    );
};

export default Header;
