'use client';

import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';

const PrivacyContent = () => {
    return (
        <Box sx={{ bgcolor: '#f8f9fa', py: 10 }}>
            <Container maxWidth="lg">
                <Box sx={{ mb: 6, textAlign: 'center' }}>
                    <Typography
                        variant="h2"
                        component="h1"
                        sx={{
                            fontWeight: 800,
                            color: 'primary.main',
                            textTransform: 'uppercase',
                            letterSpacing: 2,
                            position: 'relative',
                            display: 'inline-block',
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                left: '50%',
                                bottom: -16,
                                transform: 'translateX(-50%)',
                                width: 80,
                                height: 4,
                                backgroundColor: 'secondary.main',
                                borderRadius: 2
                            }
                        }}
                    >
                        Privacy Policy
                    </Typography>
                </Box>

                <Paper elevation={0} sx={{ p: { xs: 3, md: 6 }, borderRadius: 4, border: '1px solid rgba(0,0,0,0.05)' }}>
                    <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                        Last updated: January 2026
                    </Typography>

                    <Typography variant="body1" paragraph>
                        Hifan Global LTD respects your privacy and is committed to protecting your personal information.
                    </Typography>

                    <Box component="section" sx={{ mb: 4 }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                            1. Information We Collect
                        </Typography>
                        <Typography variant="body1" paragraph>
                            We may collect:
                        </Typography>
                        <ul style={{ paddingLeft: '20px', marginBottom: '16px', color: '#555' }}>
                            <li>Personal information (name, email, phone number, address)</li>
                            <li>Identification and document data provided for consultancy services</li>
                            <li>Business and educational information</li>
                            <li>Payment-related information (processed via secure third-party providers)</li>
                            <li>Website usage data (IP address, browser type, device information)</li>
                        </ul>
                    </Box>

                    <Box component="section" sx={{ mb: 4 }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                            2. How We Use Your Information
                        </Typography>
                        <Typography variant="body1" paragraph>
                            We use your data to:
                        </Typography>
                        <ul style={{ paddingLeft: '20px', marginBottom: '16px', color: '#555' }}>
                            <li>Provide and manage services</li>
                            <li>Communicate with you</li>
                            <li>Process payments</li>
                            <li>Improve our website and services</li>
                            <li>Comply with legal and regulatory requirements</li>
                        </ul>
                    </Box>

                    <Box component="section" sx={{ mb: 4 }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                            3. Data Sharing
                        </Typography>
                        <Typography variant="body1" paragraph>
                            We may share information with:
                        </Typography>
                        <ul style={{ paddingLeft: '20px', marginBottom: '16px', color: '#555' }}>
                            <li>Government authorities, embassies, institutions, or partners (with consent)</li>
                            <li>Service providers and payment processors</li>
                            <li>Legal or regulatory authorities when required by law</li>
                        </ul>
                        <Typography variant="body1">
                            We do not sell personal data.
                        </Typography>
                    </Box>

                    <Box component="section" sx={{ mb: 4 }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                            4. Data Security
                        </Typography>
                        <Typography variant="body1">
                            We implement reasonable technical and organizational measures to protect your data. However, no online transmission is completely secure.
                        </Typography>
                    </Box>

                    <Box component="section" sx={{ mb: 4 }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                            5. Data Retention
                        </Typography>
                        <Typography variant="body1">
                            We retain personal data only as long as necessary to fulfill service obligations or comply with legal requirements.
                        </Typography>
                    </Box>

                    <Box component="section" sx={{ mb: 4 }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                            6. Your Rights
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Depending on applicable laws, you may have the right to:
                        </Typography>
                        <ul style={{ paddingLeft: '20px', marginBottom: '16px', color: '#555' }}>
                            <li>Access your personal data</li>
                            <li>Request correction or deletion</li>
                            <li>Withdraw consent</li>
                            <li>Object to certain processing activities</li>
                        </ul>
                        <Typography variant="body1">
                            Requests can be sent to our contact email.
                        </Typography>
                    </Box>

                    <Box component="section" sx={{ mb: 4 }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                            7. International Data Transfers
                        </Typography>
                        <Typography variant="body1">
                            Your information may be transferred and processed in countries outside your residence, including the United States, United Kingdom, and Pakistan, subject to appropriate safeguards.
                        </Typography>
                    </Box>

                    <Box component="section" sx={{ mb: 4 }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                            8. Children’s Privacy
                        </Typography>
                        <Typography variant="body1">
                            Our services are not intended for individuals under 18 years of age.
                        </Typography>
                    </Box>

                    <Box component="section" sx={{ mb: 4 }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                            9. Policy Updates
                        </Typography>
                        <Typography variant="body1">
                            We may update this Privacy Policy periodically. Updates will be posted on this page.
                        </Typography>
                    </Box>

                    <Box component="section">
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                            10. Contact
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 1 }}>
                            For privacy-related inquiries:
                        </Typography>
                        <Typography variant="body1">
                            Email: <a href="mailto:privacy@hifanglobal.com" style={{ color: '#F39C12', textDecoration: 'none' }}>privacy@hifanglobal.com</a>
                        </Typography>
                    </Box>

                </Paper>
            </Container>
        </Box>
    );
};

export default PrivacyContent;
