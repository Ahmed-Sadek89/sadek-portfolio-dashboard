import FormTextField from '@/components/ui/form-text-field';
import { TABLE } from '@/enums';
import { activity } from '@/types';
import { MenuItem } from '@mui/material';
import React, { useEffect, useMemo, useCallback, useState, memo } from 'react';

type props = {
    activities: activity[] | undefined;
    setActivityState: React.Dispatch<React.SetStateAction<activity[] | undefined>>;
};

const FilterByTable = ({ activities, setActivityState }: props) => {
    const sx = {
        textTransform: 'capitalize',
        color: '#000',
        fontSize: '1rem',
        fontWeight: 'light',
        '&:hover': {
            backgroundColor: '#e0e0e0',
        },
    };

    const tableEntries = useMemo(() => Object.keys(Object.assign({ all: "all" }, TABLE)).filter(key => isNaN(Number(key))), []);

    const [selectedTable, setSelectedTable] = useState("all");

    const debounceSetTable = useCallback(
        (value: string) => {
            setTimeout(() => {
                setSelectedTable(value);
            }, 300);
        },
        []
    );

    useEffect(() => {
        if (selectedTable !== "all") {
            setActivityState(activities?.filter(index => index.table_name.toString() === selectedTable));
        } else {
            setActivityState(activities);
        }
    }, [selectedTable, activities, setActivityState]);
    console.log({ selectedTable })
    return (
        <FormTextField
            width="50%"
            label="Table"
            value={selectedTable}
            onChange={(e) => debounceSetTable(e.target.value)}
        >
            {tableEntries.map(key => (
                <MenuItem key={key} sx={sx} value={key}>
                    {key.toLowerCase()}
                </MenuItem>
            ))}
        </FormTextField>
    );
};

export default memo(FilterByTable);
