'use client';

import React, { useState, useEffect } from 'react';
import { Fab, Zoom, useScrollTrigger } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 300,
    });

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <Zoom in={trigger}>
            <Fab
                onClick={handleClick}
                color="secondary"
                size="small"
                aria-label="scroll back to top"
                sx={{
                    position: 'fixed',
                    bottom: 32,
                    right: 32,
                    zIndex: 9999,
                    '&:hover': {
                        bgcolor: 'secondary.dark',
                    }
                }}
            >
                <KeyboardArrowUpIcon color="primary" />
            </Fab>
        </Zoom>
    );
};

export default ScrollToTop;
