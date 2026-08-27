'use client';

import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';

const TermsContent = () => {
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
                        Terms of Service
                    </Typography>
                </Box>

                <Paper elevation={0} sx={{ p: { xs: 3, md: 6 }, borderRadius: 4, border: '1px solid rgba(0,0,0,0.05)' }}>
                    <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                        Last updated: January 2026
                    </Typography>

                    <Typography variant="body1" paragraph>
                        Welcome to Hifan Global LTD (“Company”, “we”, “our”, “us”). By accessing or using our website, services, or communicating with us through any digital channel, you agree to be bound by these Terms of Service (“Terms”). If you do not agree, please do not use our website or services.
                    </Typography>

                    <Box component="section" sx={{ mb: 4 }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                            1. About Hifan Global LTD
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Hifan Global LTD is a consultancy and services company registered in the United Kingdom. Our services include, but are not limited to:
                        </Typography>
                        <ul style={{ paddingLeft: '20px', marginBottom: '16px', color: '#555' }}>
                            <li>Immigration and visa consultancy</li>
                            <li>Study abroad advisory services</li>
                            <li>International recruitment and workforce solutions</li>
                            <li>Business, management, and IT consulting</li>
                            <li>Digital marketing and advertising services</li>
                            <li>Import/export and trade consultancy</li>
                            <li>Billing, accounting support, and related advisory services</li>
                        </ul>
                        <Typography variant="body1">
                            We do not provide legal representation or guarantee approvals for visas, immigration, admissions, or government decisions.
                        </Typography>
                    </Box>

                    <Box component="section" sx={{ mb: 4 }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                            2. Eligibility
                        </Typography>
                        <Typography variant="body1">
                            You must be at least 18 years old to use our website or services. By using our website, you confirm that you have the legal capacity to enter into a binding agreement.
                        </Typography>
                    </Box>

                    <Box component="section" sx={{ mb: 4 }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                            3. Scope of Services
                        </Typography>
                        <Typography variant="body1" paragraph>
                            All services are provided based on:
                        </Typography>
                        <ul style={{ paddingLeft: '20px', marginBottom: '16px', color: '#555' }}>
                            <li>Information supplied by the client</li>
                            <li>Applicable laws, regulations, and third-party authorities</li>
                            <li>Service-specific agreements or contracts</li>
                        </ul>
                        <Typography variant="body1">
                            Outcomes such as visa approvals, admissions, job placements, or business results are not guaranteed.
                        </Typography>
                    </Box>

                    <Box component="section" sx={{ mb: 4 }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                            4. User Responsibilities
                        </Typography>
                        <Typography variant="body1" paragraph>
                            You agree to:
                        </Typography>
                        <ul style={{ paddingLeft: '20px', marginBottom: '16px', color: '#555' }}>
                            <li>Provide accurate, complete, and truthful information</li>
                            <li>Not misuse our website or services</li>
                            <li>Not submit fraudulent, misleading, or unlawful content</li>
                            <li>Comply with all applicable local and international laws</li>
                        </ul>
                        <Typography variant="body1">
                            We reserve the right to suspend or terminate services if false or misleading information is provided.
                        </Typography>
                    </Box>

                    <Box component="section" sx={{ mb: 4 }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                            5. Payments & Fees
                        </Typography>
                        <ul style={{ paddingLeft: '20px', marginBottom: '16px', color: '#555' }}>
                            <li>Fees are communicated before service initiation</li>
                            <li>Payments are generally non-refundable unless explicitly stated in writing</li>
                            <li>Third-party fees (government, universities, embassies, recruiters) are not included unless specified</li>
                        </ul>
                        <Typography variant="body1">
                            Refund policies, if applicable, are governed by separate written agreements.
                        </Typography>
                    </Box>

                    <Box component="section" sx={{ mb: 4 }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                            6. Intellectual Property
                        </Typography>
                        <Typography variant="body1">
                            All website content, including text, logos, designs, graphics, and materials, is the property of Hifan Global LTD and may not be copied, reproduced, or distributed without written consent.
                        </Typography>
                    </Box>

                    <Box component="section" sx={{ mb: 4 }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                            7. Limitation of Liability
                        </Typography>
                        <Typography variant="body1" paragraph>
                            To the maximum extent permitted by law, Hifan Global LTD shall not be liable for:
                        </Typography>
                        <ul style={{ paddingLeft: '20px', marginBottom: '16px', color: '#555' }}>
                            <li>Indirect, incidental, or consequential damages</li>
                            <li>Loss of data, profits, or opportunities</li>
                            <li>Decisions made by third parties or authorities</li>
                        </ul>
                        <Typography variant="body1">
                            Our total liability shall not exceed the amount paid for the specific service.
                        </Typography>
                    </Box>

                    <Box component="section" sx={{ mb: 4 }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                            8. Third-Party Links
                        </Typography>
                        <Typography variant="body1">
                            Our website may contain links to third-party websites. We are not responsible for their content, policies, or practices.
                        </Typography>
                    </Box>

                    <Box component="section" sx={{ mb: 4 }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                            9. Termination
                        </Typography>
                        <Typography variant="body1">
                            We may suspend or terminate access to our website or services without notice if these Terms are violated.
                        </Typography>
                    </Box>

                    <Box component="section" sx={{ mb: 4 }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                            10. Governing Law
                        </Typography>
                        <Typography variant="body1">
                            These Terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to conflict-of-law principles.
                        </Typography>
                    </Box>

                    <Box component="section" sx={{ mb: 4 }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                            11. Changes to Terms
                        </Typography>
                        <Typography variant="body1">
                            We reserve the right to modify these Terms at any time. Continued use of the website constitutes acceptance of updated Terms.
                        </Typography>
                    </Box>

                    <Box component="section">
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                            12. Contact Information
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 1 }}>
                            For questions regarding these Terms: Hifan Global LTD
                        </Typography>
                        <Typography variant="body1">
                            Email: <a href="mailto:hifanglobaluk@gmail.com" style={{ color: '#F39C12', textDecoration: 'none' }}>hifanglobaluk@gmail.com</a>
                        </Typography>
                    </Box>

                </Paper>
            </Container>
        </Box>
    );
};

export default TermsContent;
