'use client';

import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    TextField,
    Button,
    Stack,
    Card,
    CircularProgress,
    Alert,
    Snackbar,

    MenuItem,
    useTheme,
    useMediaQuery
} from '@mui/material';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const services = [
    'IT Services and consultancy',
    'Marketing services and consultancy',
    'Business formation services and consultancy',
    'Management consultancy',
    'Accounting and bookkeeping Services'
];

export default function ContactContent() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contact: '',
        service: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });


        const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyT-4l8vL4lT5d-BoVQETUWLyL_mehSq5DE4CaTC_xOakJWGYPt6mmsOGVybxKUhG8x/exec';

        try {

            const dataToSubmit = {
                date: new Date().toLocaleString(),
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                contact: formData.contact,
                service: formData.service,
                message: formData.message
            };

            const response = await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSubmit),
            });


            setLoading(false);
            setStatus({ type: 'success', message: 'Thank you! Your message has been sent.' });
            setOpenSnackbar(true);
            setFormData({ firstName: '', lastName: '', email: '', contact: '', service: '', message: '' });
        } catch (error) {
            setLoading(false);
            setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
            setOpenSnackbar(true);
            console.error('Error!', error.message);
        }
    };

    return (
        <Box>
            <Breadcrumbs />
            {/* Contact Us Section */}
            <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
                <Box sx={{ mb: 4 }}>
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
                        Get In Touch
                    </Typography>
                    <Typography variant="h3" sx={{ fontWeight: 700, mb: 3, color: 'secondary.main' }}>
                        We'd love to hear from you. Let's build something great together
                    </Typography>
                </Box>
            </Container>

            <Box sx={{ py: 10, bgcolor: 'background.paper' }}>
                <Container maxWidth="lg">
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 8, alignItems: 'stretch', justifyContent: 'center' }}>
                        <Box sx={{ width: { xs: '100%', md: '40%' } }}>
                            <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, position: 'relative' }}>
                                Contact Details
                                <Box sx={{ width: 40, height: 4, bgcolor: 'secondary.main', mt: 1, borderRadius: 2 }} />
                            </Typography>
                            <Stack spacing={4}>
                                {[
                                    { icon: <EmailIcon />, title: 'Email Us', detail: 'info@hifanglobal.com', color: 'primary.main' },
                                    {
                                        icon: <LocationOnIcon />,
                                        title: 'Delaware Office',
                                        detail: '8 The green, Dover, DE 19901',
                                        phone: '+1 (302) 201 8910',
                                        color: 'secondary.main'
                                    },
                                    {
                                        icon: <LocationOnIcon />,
                                        title: 'California Office',
                                        detail: '1305 E 9th st, Upland, CA 91786',
                                        phone: '+1 (909) 527 0360',
                                        color: 'primary.main'
                                    },
                                    { icon: <AccessTimeIcon />, title: 'Working Hours', detail: 'Mon - Fri: 9:00 AM - 6:00 PM', color: 'secondary.main' },
                                ].map((item, idx) => (
                                    <Box key={idx} sx={{ display: 'flex', gap: 3, p: 1.5, borderRadius: 3, transition: 'all 0.3s ease', '&:hover': { bgcolor: '#fff', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' } }}>
                                        <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 2, color: item.color, display: 'flex', alignItems: 'center' }}>
                                            {item.icon}
                                        </Box>
                                        <Box>
                                            <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'text.secondary', mb: 0.5 }}>{item.title}</Typography>
                                            <Typography variant="body1" sx={{ fontWeight: 600 }}>{item.detail}</Typography>
                                            {item.phone && (
                                                <Typography variant="body2" sx={{ fontWeight: 700, mt: 0.5, color: 'primary.main' }}>{item.phone}</Typography>
                                            )}
                                        </Box>
                                    </Box>
                                ))}
                            </Stack>
                        </Box>

                        <Box sx={{ width: { xs: '100%', md: '55%' } }}>
                            <Card
                                sx={{
                                    p: { xs: 4, md: 6 },
                                    borderRadius: 6,
                                    boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '6px',
                                        background: `linear-gradient(90deg, #FFD166 0%, #0A3D62 100%)`
                                    }
                                }}
                            >
                                <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, color: 'primary.main' }}>Send Us a Message</Typography>
                                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>Please fill in the form below to get in touch with us.</Typography>

                                <form onSubmit={handleSubmit}>
                                    <Box sx={{ maxWidth: '500px', mx: 'auto', px: { xs: 2, sm: 0 } }}>
                                        <Stack spacing={2.5}>
                                            {/* Row 1: Names */}
                                            <Box sx={{ display: 'flex', gap: { xs: 1, md: 7 }, width: '100%' }}>
                                                <Box sx={{ width: '50%' }}>
                                                    <TextField
                                                        fullWidth
                                                        size={isMobile ? "small" : "medium"}
                                                        placeholder="First name"
                                                        name="firstName"
                                                        value={formData.firstName}
                                                        onChange={handleChange}
                                                        variant="outlined"
                                                        required
                                                        sx={{ '& .MuiOutlinedInput-root': { bgcolor: 'rgba(0,0,0,0.04)', borderRadius: '8px', '& fieldset': { border: 'none' }, fontSize: isMobile ? '0.875rem' : '1rem' } }}
                                                    />
                                                </Box>
                                                <Box sx={{ width: '50%' }}>
                                                    <TextField
                                                        fullWidth
                                                        size={isMobile ? "small" : "medium"}
                                                        placeholder="Last name"
                                                        name="lastName"
                                                        value={formData.lastName}
                                                        onChange={handleChange}
                                                        variant="outlined"
                                                        required
                                                        sx={{ '& .MuiOutlinedInput-root': { bgcolor: 'rgba(0,0,0,0.04)', borderRadius: '8px', '& fieldset': { border: 'none' }, fontSize: isMobile ? '0.875rem' : '1rem' } }}
                                                    />
                                                </Box>
                                            </Box>

                                            {/* Row 2: Email & Contact */}
                                            <Box sx={{ display: 'flex', gap: { xs: 1, md: 7 }, width: '100%' }}>
                                                <Box sx={{ width: '50%' }}>
                                                    <TextField
                                                        fullWidth
                                                        size={isMobile ? "small" : "medium"}
                                                        placeholder="Email address"
                                                        name="email"
                                                        type="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        variant="outlined"
                                                        required
                                                        sx={{ '& .MuiOutlinedInput-root': { bgcolor: 'rgba(0,0,0,0.04)', borderRadius: '8px', '& fieldset': { border: 'none' }, fontSize: isMobile ? '0.875rem' : '1rem' } }}
                                                    />
                                                </Box>
                                                <Box sx={{ width: '50%' }}>
                                                    <TextField
                                                        fullWidth
                                                        size={isMobile ? "small" : "medium"}
                                                        placeholder="Phone Number"
                                                        name="contact"
                                                        value={formData.contact}
                                                        onChange={handleChange}
                                                        variant="outlined"
                                                        required
                                                        sx={{ '& .MuiOutlinedInput-root': { bgcolor: 'rgba(0,0,0,0.04)', borderRadius: '8px', '& fieldset': { border: 'none' }, fontSize: isMobile ? '0.875rem' : '1rem' } }}
                                                    />
                                                </Box>
                                            </Box>

                                            {/* Row 3: Services */}
                                            <TextField
                                                select
                                                fullWidth
                                                size={isMobile ? "small" : "medium"}
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                variant="outlined"
                                                required
                                                SelectProps={{
                                                    displayEmpty: true,
                                                    renderValue: (value) => {
                                                        if (!value) {
                                                            return <span style={{ color: "rgba(0, 0, 0, 0.4)" }}>Services</span>;
                                                        }
                                                        return value;
                                                    }
                                                }}
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        bgcolor: 'rgba(0,0,0,0.04)',
                                                        borderRadius: '8px',
                                                        '& fieldset': { border: 'none' },
                                                        fontSize: isMobile ? '0.875rem' : '1rem'
                                                    }
                                                }}
                                            >
                                                <MenuItem value="" disabled>Services</MenuItem>
                                                {services.map((option) => (
                                                    <MenuItem key={option} value={option}>
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </TextField>

                                            {/* Row 4: Message */}
                                            <TextField
                                                fullWidth
                                                multiline
                                                rows={4}
                                                placeholder="Message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                variant="outlined"
                                                required
                                                sx={{ '& .MuiOutlinedInput-root': { bgcolor: 'rgba(0,0,0,0.04)', borderRadius: '8px', '& fieldset': { border: 'none' } } }}
                                            />

                                            {/* Row 5: Submit Button */}
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                disabled={loading}
                                                sx={{
                                                    py: 1.5,
                                                    px: 6,
                                                    width: 'auto',
                                                    alignSelf: 'flex-start',
                                                    fontWeight: 800,
                                                    borderRadius: '12px',
                                                    textTransform: 'none',
                                                    backgroundColor: 'secondary.main',
                                                    color: 'secondary.contrastText',
                                                    '&:hover': {
                                                        backgroundColor: 'secondary.dark',
                                                        boxShadow: '0 8px 16px rgba(255, 209, 102, 0.3)'
                                                    }
                                                }}
                                            >
                                                {loading ? <CircularProgress size={24} color="inherit" /> : 'Submit'}
                                            </Button>
                                        </Stack>
                                    </Box>
                                </form>
                            </Card>
                        </Box>
                    </Box>


                </Container>
            </Box >

            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={() => setOpenSnackbar(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={() => setOpenSnackbar(false)} severity={status.type} sx={{ width: '100%' }}>
                    {status.message}
                </Alert>
            </Snackbar>
        </Box >
    );
}
