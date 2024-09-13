"use client"
import React, { useEffect, useState } from 'react';

export const GetAsyncData = (fetchFunction: () => Promise<any>) => {
    const [data, setData] = useState<any[]>([]); // use generic type for state if needed

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetchFunction();
                setData(res);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [fetchFunction]);

    return data;
};