'use client';

import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';

const PricingDeliveryContent = () => {
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
                        Pricing & Service Delivery
                    </Typography>
                </Box>

                <Paper elevation={0} sx={{ p: { xs: 3, md: 6 }, borderRadius: 4, border: '1px solid rgba(0,0,0,0.05)' }}>
                    <Typography variant="body2" sx={{ mb: 4, color: 'text.secondary' }}>
                        Last Updated: 25 November 2025
                    </Typography>

                    <Box component="section" sx={{ mb: 4 }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                            1. Overview
                        </Typography>
                        <Typography variant="body1">
                            This page explains how Hifan Global LTD prices its services, the currencies we charge in, and what clients can expect in terms of deliverables and timeframes. It applies to all services offered through hifanglobal.uk, including IT services, web development, SEO, digital marketing, business formation, management consultancy, and accounting/bookkeeping.
                        </Typography>
                    </Box>

                    <Box component="section" sx={{ mb: 4 }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                            2. Currency
                        </Typography>
                        <Typography variant="body1" paragraph>
                            We invoice and accept payment in the following currencies:
                        </Typography>
                        <ul style={{ paddingLeft: '20px', marginBottom: '16px', color: '#555' }}>
                            <li><strong>GBP (£)</strong> — British Pounds Sterling</li>
                            <li><strong>EUR (€)</strong> — Euro</li>
                            <li><strong>USD ($)</strong> — US Dollars</li>
                        </ul>
                        <Typography variant="body1">
                            The currency for your engagement will be confirmed in your quote or service agreement, based on your location and preference. All fees stated during the quoting process are in the agreed currency unless otherwise noted.
                        </Typography>
                    </Box>

                    <Box component="section" sx={{ mb: 4 }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                            3. How Pricing Works
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Our pricing approach depends on the type of service:
                        </Typography>

                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                            3.1 Fixed-Price Services
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Certain well-defined services — such as standard business/company registration packages and clearly scoped deliverables — are offered at a <strong>fixed, published price</strong>. Where a fixed price applies, it will be clearly stated before you engage us, and covers the defined scope only; work outside that scope is quoted separately.
                        </Typography>

                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                            3.2 Custom-Quoted Services
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Services that vary significantly by client requirements — such as web development, larger IT projects, bespoke marketing campaigns, and management consultancy — are priced through a <strong>custom quote</strong>. We assess the scope, complexity, and timeline of your requirements and provide a written quote before any work begins. No custom-quoted work starts until the quote has been reviewed and accepted by you.
                        </Typography>

                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                            3.3 Retainer and Recurring Services
                        </Typography>
                        <Typography variant="body1" paragraph>
                            For consulting, marketing, and similar ongoing engagements, pricing is structured as:
                        </Typography>
                        <ul style={{ paddingLeft: '20px', marginBottom: '16px', color: '#555' }}>
                            <li>An <strong>upfront retainer</strong> to begin the engagement, and</li>
                            <li><strong>Monthly or quarterly billing</strong> thereafter, at a rate agreed in your contract.</li>
                        </ul>
                        <Typography variant="body1" paragraph>
                            Recurring rates are fixed for the term of your contract and will not change without prior written notice.
                        </Typography>

                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                            3.4 Company/Business Registration Services
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Pricing for registration services is split into:
                        </Typography>
                        <ul style={{ paddingLeft: '20px', marginBottom: '16px', color: '#555' }}>
                            <li><strong>Our service fee</strong> — fixed and quoted upfront, and</li>
                            <li><strong>Government/third-party fees</strong> — passed through at cost, and collected once confirmed and due, as these vary by jurisdiction and change over time.</li>
                        </ul>
                    </Box>

                    <Box component="section" sx={{ mb: 4 }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                            4. Service Delivery
                        </Typography>

                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                            4.1 Project-Based Services (Web Development, IT Services, etc.)
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Clients receive an agreed set of deliverables as defined in the project scope or proposal (e.g., a completed website, application, or system). Projects are typically delivered in one of two ways:
                        </Typography>
                        <ul style={{ paddingLeft: '20px', marginBottom: '16px', color: '#555' }}>
                            <li><strong>Milestone-based delivery</strong> — work is broken into stages, each delivered and reviewed in sequence.</li>
                            <li><strong>Single delivery</strong> — smaller projects are delivered as one complete package.</li>
                        </ul>
                        <Typography variant="body1">
                            <strong>Typical timeframes</strong> range from <strong>2 to 8 weeks</strong>, depending on project size and complexity, and will be confirmed in your quote.
                        </Typography>

                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, mt: 3 }}>
                            4.2 Consulting, Marketing, and Retainer Services
                        </Typography>
                        <Typography variant="body1">
                            Clients receive ongoing services for the duration of their contract term (monthly or quarterly), such as strategy sessions, campaign management, reporting, or advisory support, as defined in the service agreement. Deliverables and reporting cadence (e.g., monthly performance reports) are outlined at the start of the engagement.
                        </Typography>

                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, mt: 3 }}>
                            4.3 Company/Business Registration Services
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Clients receive completed registration documentation and confirmation once the relevant government/regulatory body has processed the application.
                        </Typography>
                        <Typography variant="body1">
                            <strong>Typical timeframes</strong> depend on the jurisdiction and processing times of the relevant registrar or government authority, and are outside our direct control. We will advise expected timeframes at the outset and keep you updated on progress.
                        </Typography>
                    </Box>

                    <Box component="section">
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                            5. Getting a Quote
                        </Typography>
                        <Typography variant="body1" paragraph>
                            To request a quote or discuss pricing for your project, please contact us with:
                        </Typography>
                        <ul style={{ paddingLeft: '20px', marginBottom: '16px', color: '#555' }}>
                            <li>A brief description of the service you require</li>
                            <li>Your preferred currency (GBP, EUR, or USD)</li>
                            <li>Any relevant deadlines or timeframes</li>
                        </ul>
                        <Typography variant="body1">
                            Email: <a href="mailto:hifanglobaluk@gmail.com" style={{ color: '#F39C12', textDecoration: 'none' }}>hifanglobaluk@gmail.com</a>
                        </Typography>
                    </Box>

                </Paper>
            </Container>
        </Box>
    );
};

export default PricingDeliveryContent;
