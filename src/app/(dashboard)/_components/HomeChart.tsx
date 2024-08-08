"use client"
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { boxContainer } from './home-style';
import { Box, Grid } from '@mui/material';

export default function HomeChart() {
    return (
        <Grid item xs={12} lg={6} >
            <Box boxShadow={7} sx={{ ...boxContainer, padding: "10px 0px" }}>
                <BarChart
                    xAxis={[
                        {
                            id: 'barCategories',
                            data: ['bar A', 'bar B', 'bar C', 'bar D', 'bar E', 'bar F', 'bar G', 'bar H'],
                            scaleType: 'band',
                        },
                    ]}
                    series={[
                        {
                            data: [2, 10, 3, 2, 15, 3, 2, 5],
                        },
                    ]}
                    sx={{ width: "100%" }}
                    height={460}
                />
            </Box>
        </Grid>
    );
}