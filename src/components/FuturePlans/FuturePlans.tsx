"use client"
import React, { useState, useRef, useEffect } from 'react';
import { Box } from '@mui/material';
import AddPlan from './_components/AddPlan';
import Plans from './_components/Plans';

const ScrollableBox = ({ plans }: { plans: futurePlan[] | undefined }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const contentRef = useRef<HTMLElement>(null);

    const handleScroll = () => {
        if (contentRef.current) {
            setIsScrolled(contentRef.current.scrollTop > 0);
        }
    };

    useEffect(() => {
        const currentRef = contentRef.current;
        if (currentRef) {
            currentRef.addEventListener('scroll', handleScroll);
            return () => currentRef.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <Box
            ref={contentRef}
            sx={{
                bgcolor: "primary.main",
                color: "text.primary",
            }}
            boxShadow={7}
            className="flex flex-col rounded h-full max-h-[80vh] overflow-y-auto relative"
        >
            <Box
                className="sticky top-0 w-full z-50 px-5 pt-5 pb-2"
                sx={{
                    bgcolor: "primary.main",
                    color: "text.primary",
                    boxShadow: isScrolled
                        ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                        : "none", // Apply shadow only when scrolled
                    transition: "box-shadow 0.3s ease-in-out",
                }}
            >
                <h2 className="font-bold text-xl">Future plans</h2>
                <AddPlan />
            </Box>
            <Plans plans={plans || []} />
        </Box>
    );
};

export default ScrollableBox;
