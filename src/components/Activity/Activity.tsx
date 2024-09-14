"use client"
import React, { useState, useRef, useEffect } from 'react';
import { Box } from '@mui/material';
import Activities from './_components/Activities';
import { activity } from '@/types';
import FilterByAction from './_components/FilterByAction';
import FilterByTable from './_components/FilterByTable';

const Activity = ({ activities }: { activities: activity[] | undefined }) => {
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

    const [activityState, setActivityState] = useState<activity[] | undefined>()
    console.log({activityState, activities, length: activities?.length})
    useEffect(() => {
        setActivityState(activities);
    }, [activities])

    return (
        <Box
            ref={contentRef}
            sx={{
                bgcolor: "primary.main",
                color: "text.primary",
            }}
            boxShadow={7}
            className="flex flex-col rounded h-[60vh] overflow-y-auto "
        >
            <Box
                className="sticky top-0 w-full z-50 px-5 pt-5 pb-2 flex items-center justify-between"
                sx={{
                    bgcolor: "primary.main",
                    color: "text.primary",
                    boxShadow: isScrolled
                        ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                        : "none",
                    transition: "box-shadow 0.3s ease-in-out",
                }}
            >
                <h2 className="font-bold text-xl">Activities</h2>
                <div className='w-1/2 flex items-center gap-2'>
                    <FilterByTable activities={activities} setActivityState={setActivityState} />
                    <FilterByAction activities={activities} setActivityState={setActivityState} />
                </div>
            </Box>
            <Activities activities={activityState || []} />
        </Box >
    );
};

export default Activity;
