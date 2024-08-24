"use client"
import { editPlan } from '@/actions/plan/plan-edit';
import ButtonSubmit from '@/components/ui/button-submit';
import { Checkbox, FormControlLabel } from '@mui/material';
import React, { useRef } from 'react';

const CheckPlan = ({ id, plan, is_completed }: { id: number, plan: string, is_completed: boolean }) => {
    const formRef = useRef<HTMLFormElement>(null);

    const handleCheckboxChange = () => {
        if (formRef.current) {
            formRef.current.requestSubmit(); // Submit form when checkbox state changes
        }
    };

    return (
        <form action={editPlan} ref={formRef}>
            <input type="hidden" name="id" value={id} />
            <ButtonSubmit btnStyle={{padding: "0px"}}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={is_completed || false}
                            name='is_completed'
                            size="small"
                            onChange={handleCheckboxChange} // Trigger form submission on change
                            sx={{
                                "&.Mui-checked": {
                                    color: "info.main",
                                },
                            }}
                        />
                    }
                    label={plan}
                    sx={{
                        ".MuiFormControlLabel-label": {
                            color: is_completed ? "info.main" : "text.secondary",
                            fontSize: "12px",
                            textTransform: "none"
                        },
                        "& .MuiCheckbox-root.Mui-checked + .MuiFormControlLabel-label": {
                            textDecoration: "line-through",
                        },
                    }}
                />
            </ButtonSubmit>
        </form>
    );
};

export default CheckPlan;
