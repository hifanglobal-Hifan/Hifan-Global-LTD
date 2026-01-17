'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#0A3D62',
            dark: '#05263d',
            light: '#14598d',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#FFD166',
            light: '#FFE099',
            dark: '#CCA752',
            contrastText: '#0A3D62',
        },
        background: {
            default: '#FFFFFF',
            paper: '#F8F9FA',
        },
        text: {
            primary: '#0A3D62',
            secondary: '#455A64',
        },
    },
    typography: {
        fontFamily: 'var(--font-body)',
        h1: {
            fontFamily: 'var(--font-header)',
            fontWeight: 800,
            color: '#0A3D62',
            fontSize: '2.5rem',
            '@media (min-width:600px)': {
                fontSize: '3.5rem',
            },
            '@media (min-width:960px)': {
                fontSize: '4.5rem',
            },
        },
        h2: {
            fontFamily: 'var(--font-header)',
            fontWeight: 800,
            color: '#0A3D62',
            fontSize: '2rem',
            '@media (min-width:600px)': {
                fontSize: '3rem',
            },
            '@media (min-width:960px)': {
                fontSize: '3.75rem',
            },
        },
        h3: {
            fontFamily: 'var(--font-header)',
            fontWeight: 700,
            color: '#0A3D62',
            fontSize: '1.75rem',
            '@media (min-width:600px)': {
                fontSize: '2.5rem',
            },
            '@media (min-width:960px)': {
                fontSize: '3rem',
            },
        },
        h4: {
            fontFamily: 'var(--font-header)',
            fontWeight: 700,
            fontSize: '1.5rem',
            '@media (min-width:600px)': {
                fontSize: '2rem',
            },
        },
        h5: {
            fontFamily: 'var(--font-header)',
            fontWeight: 600,
            fontSize: '1.25rem',
            '@media (min-width:600px)': {
                fontSize: '1.5rem',
            },
        },
        h6: {
            fontFamily: 'var(--font-header)',
            fontWeight: 600,
            fontSize: '1rem',
            '@media (min-width:600px)': {
                fontSize: '1.25rem',
            },
        },
        body1: {
            fontSize: '0.95rem',
            '@media (min-width:600px)': {
                fontSize: '1rem',
            },
        },
        button: {
            fontWeight: 600,
            textTransform: 'none',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    padding: '8px 24px',
                },
                containedPrimary: {
                    '&:hover': {
                        backgroundColor: '#0A3D62',
                    },
                },
                sizeLarge: {
                    padding: '8px 22px',
                    fontSize: '0.925rem',
                    '@media (min-width:600px)': {
                        padding: '10px 28px',
                        fontSize: '1.05rem',
                    },
                    '@media (min-width:960px)': {
                        padding: '12px 34px',
                        fontSize: '1.2rem',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                },
            },
        },
    },
});

export default theme;
