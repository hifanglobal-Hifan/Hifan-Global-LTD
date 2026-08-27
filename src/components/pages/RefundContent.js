'use client';

import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';

const RefundContent = () => {
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
                        Refund and Cancellation Policy
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
                        <Typography variant="body1" paragraph>
                            At Hifan Global LTD ("Hifan Global," "we," "us," or "our"), we are committed to delivering high-quality IT services, web development, SEO, digital marketing, business formation, management consultancy, and accounting/bookkeeping services to our clients. This Refund Policy outlines how payments are structured across our service lines and the terms under which refunds may be requested and issued for services purchased through hifanglobal.uk.
                        </Typography>
                        <Typography variant="body1">
                            By engaging our services, you agree to the terms set out in this policy. Please read it carefully before making a payment.
                        </Typography>
                    </Box>

                    <Box component="section" sx={{ mb: 4 }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                            2. Our Payment Structure
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Our payment terms vary by service type, as outlined below. Understanding how and when you are billed is central to understanding your refund eligibility.
                        </Typography>

                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                            2.1 Project-Based Services (Web Development, IT Services, etc.)
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Payment is collected either on <strong>completion of agreed milestones</strong> or <strong>completion of the full project</strong>, as specified in your service agreement. You are not charged in advance for work not yet delivered.
                        </Typography>

                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                            2.2 Consulting, Marketing, and Other Retainer-Based Services
                        </Typography>
                        <Typography variant="body1" paragraph>
                            These services require an <strong>upfront retainer</strong> at the start of the engagement, followed by <strong>monthly or quarterly billing</strong> for ongoing work, in line with your specific contract terms.
                        </Typography>

                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                            2.3 Company/Business Registration Services
                        </Typography>
                        <Typography variant="body1">
                            For company formation and regulatory filings, we charge a <strong>partial upfront payment covering our service fee</strong>. All government fees, registrar charges, and other third-party costs are collected <strong>only after that portion of the work has been completed</strong>, once the exact amounts are confirmed.
                        </Typography>
                    </Box>

                    <Box component="section" sx={{ mb: 4 }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                            3. General Refund Principles
                        </Typography>
                        <Typography variant="body1">
                            Because the majority of our fees are charged only after work has been performed or milestones reached, most completed billing is <strong>not eligible for a refund</strong>, as it reflects work already delivered. Refund eligibility below is organised by service type to match our billing structure.
                        </Typography>
                    </Box>

                    <Box component="section" sx={{ mb: 4 }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                            4. Refund Eligibility by Service Type
                        </Typography>

                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                            4.1 Project-Based Services (Milestone or Completion Billing)
                        </Typography>
                        <ul style={{ paddingLeft: '20px', marginBottom: '16px', color: '#555' }}>
                            <li>If you cancel <strong>before a milestone is reached or invoiced</strong>, no payment is due and no refund is applicable.</li>
                            <li>Once a milestone has been completed and invoiced/paid, that payment is <strong>final and non-refundable</strong>, as it reflects work already delivered and accepted.</li>
                            <li>If a completed milestone does not conform to the agreed scope of work, see Section 5 (Non-Conforming or Defective Work) before any refund is considered.</li>
                        </ul>

                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                            4.2 Consulting, Marketing, and Retainer-Based Services
                        </Typography>
                        <ul style={{ paddingLeft: '20px', marginBottom: '16px', color: '#555' }}>
                            <li><strong>Upfront retainer:</strong> This secures our capacity and covers onboarding, planning, and initial setup work. As this work begins immediately upon payment, the retainer is <strong>non-refundable</strong> once the engagement has commenced.</li>
                            <li><strong>Monthly/quarterly billing:</strong> Charges cover the service period being billed. You may cancel future billing at any time, effective at the end of the current paid cycle. Fees already paid for a current or completed billing cycle are <strong>non-refundable</strong>, as resources for that period have already been allocated or delivered.</li>
                            <li>No refunds are issued for partial months or partial quarters.</li>
                        </ul>

                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                            4.3 Company/Business Registration Services
                        </Typography>
                        <ul style={{ paddingLeft: '20px', marginBottom: '16px', color: '#555' }}>
                            <li><strong>Our service fee (upfront portion):</strong> Once we have begun preparing your application, documentation, or filing, this portion is <strong>non-refundable</strong>, reflecting work performed.</li>
                            <li>If you cancel <strong>before any work has commenced</strong> on your registration, the upfront service fee is refundable in full.</li>
                            <li><strong>Government/third-party fees:</strong> These are collected only after the relevant stage is complete and are passed through to government bodies or registrars. Once submitted to a third party, these fees are <strong>strictly non-refundable</strong> under any circumstances, in line with the policies of the receiving authority.</li>
                        </ul>
                    </Box>

                    <Box component="section" sx={{ mb: 4 }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                            5. Non-Conforming or Defective Work
                        </Typography>
                        <Typography variant="body1" paragraph>
                            If you believe delivered work does not conform to the agreed scope of work outlined in your service agreement or proposal, please notify us in writing within <strong>7 days</strong> of delivery or invoicing. We will:
                        </Typography>
                        <ol style={{ paddingLeft: '20px', marginBottom: '16px', color: '#555' }}>
                            <li>Review your concern against the agreed project scope.</li>
                            <li>Where valid, offer a revision or correction at no additional cost.</li>
                            <li>If the issue cannot be resolved through revision, consider a partial or full refund at our discretion, proportionate to the affected portion of the work.</li>
                        </ol>
                    </Box>

                    <Box component="section" sx={{ mb: 4 }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                            6. Non-Refundable Items
                        </Typography>
                        <Typography variant="body1" paragraph>
                            The following are non-refundable under all circumstances:
                        </Typography>
                        <ul style={{ paddingLeft: '20px', marginBottom: '16px', color: '#555' }}>
                            <li>Government, registrar, or other third-party fees once submitted on your behalf.</li>
                            <li>Completed and invoiced project milestones.</li>
                            <li>Retainer payments once the engagement has commenced.</li>
                            <li>Monthly/quarterly billing for periods already delivered.</li>
                            <li>Consultation and advisory sessions already conducted.</li>
                            <li>Custom work specifically requested and completed according to client instructions.</li>
                        </ul>
                    </Box>

                    <Box component="section" sx={{ mb: 4 }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                            7. How to Request a Refund
                        </Typography>
                        <Typography variant="body1" paragraph>
                            To request a refund, please contact us with the following information:
                        </Typography>
                        <ul style={{ paddingLeft: '20px', marginBottom: '16px', color: '#555' }}>
                            <li>Your full name and company name (if applicable).</li>
                            <li>Invoice or order reference number.</li>
                            <li>Date of payment.</li>
                            <li>Reason for the refund request.</li>
                        </ul>
                        <Typography variant="body1" paragraph>
                            Send your request to: <a href="mailto:hifanglobaluk@gmail.com" style={{ color: '#F39C12', textDecoration: 'none', fontWeight: 700 }}>hifanglobaluk@gmail.com</a>
                        </Typography>
                        <Typography variant="body1">
                            We aim to acknowledge all refund requests within <strong>3-5 business days</strong> and resolve them within <strong>14 business days</strong> of receiving all necessary information.
                        </Typography>
                    </Box>

                    <Box component="section" sx={{ mb: 4 }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                            8. Refund Processing
                        </Typography>
                        <Typography variant="body1">
                            Approved refunds will be processed to the original method of payment within <strong>10-14 business days</strong> of approval. Processing times may vary depending on your bank or payment provider. Hifan Global LTD is not responsible for delays caused by third-party financial institutions.
                        </Typography>
                    </Box>

                    <Box component="section" sx={{ mb: 4 }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                            9. Disputes
                        </Typography>
                        <Typography variant="body1">
                            If you disagree with a refund decision, you may escalate the matter by writing to us with additional supporting information. We will review escalated cases in good faith and respond within 14 business days. This policy does not affect any statutory rights you may have under UK consumer protection law, where applicable.
                        </Typography>
                    </Box>

                    <Box component="section" sx={{ mb: 4 }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                            10. Changes to This Policy
                        </Typography>
                        <Typography variant="body1">
                            Hifan Global LTD reserves the right to update or modify this Refund Policy at any time. Changes will be posted on this page with a revised "Last Updated" date. Continued use of our services after changes are posted constitutes acceptance of the updated policy.
                        </Typography>
                    </Box>

                    <Box component="section">
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                            11. Contact Us
                        </Typography>
                        <Typography variant="body1" paragraph>
                            For questions about this Refund Policy, please contact:
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

export default RefundContent;
