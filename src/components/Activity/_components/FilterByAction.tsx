import FormTextField from '@/components/ui/form-text-field';
import { ACTION } from '@/enums';
import { activity } from '@/types';
import { MenuItem } from '@mui/material';
import React, { useEffect, useMemo, useCallback, useState, memo } from 'react';

type props = {
    activities: activity[] | undefined;
    setActivityState: React.Dispatch<React.SetStateAction<activity[] | undefined>>;
};

const FilterByAction = ({ activities, setActivityState }: props) => {
    const sx = {
        textTransform: 'capitalize',
        color: '#000',
        fontSize: '1rem',
        fontWeight: 'light',
        '&:hover': {
            backgroundColor: '#e0e0e0',
        },
    };

    const actionEntries = useMemo(() => Object.keys(Object.assign({ all: "all" }, ACTION)).filter(key => isNaN(Number(key))), []);

    const [selectedAction, setSelectedAction] = useState("all");

    const debounceSetTable = useCallback(
        (value: string) => {
            setTimeout(() => {
                setSelectedAction(value);
            }, 300);
        },
        []
    );

    useEffect(() => {
        if (selectedAction !== "all") {
            setActivityState(activities?.filter(index => index.action.toString() === selectedAction));
        } else {
            setActivityState(activities);
        }
    }, [selectedAction, activities, setActivityState]);
    console.log({ selectedAction })
    return (
        <FormTextField
            width="50%"
            label="Action"
            value={selectedAction}
            onChange={(e) => debounceSetTable(e.target.value)}
        >
            {actionEntries.map(key => (
                <MenuItem key={key} sx={sx} value={key}>
                    {key.toLowerCase()}
                </MenuItem>
            ))}
        </FormTextField>
    );
};

export default memo(FilterByAction);
