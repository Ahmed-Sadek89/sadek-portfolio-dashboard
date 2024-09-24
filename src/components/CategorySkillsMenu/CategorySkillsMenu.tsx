import { Checkbox, FormControlLabel, Typography } from '@mui/material'
import React from 'react'
import { GetAsyncData } from '@/hooks/get-async-data';
import { getCategorySkills } from '@/lib/getCategorySkills';

const CategorySkillsMenu = () => {
    const data = GetAsyncData(getCategorySkills);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <div className="flex flex-col gap-y-1">
            <Typography variant='h6' className='underline' sx={{ color: "text.primary" }}>
                Category skills
            </Typography>
            <div className='flex flex-col'>
                {
                    data.map((key, index) => (
                        <FormControlLabel
                            key={index}
                            control={<Checkbox {...label} color='info' />}
                            label={key.category_name}
                            sx={{
                                ".MuiFormControlLabel-label": {
                                    color: "text.secondary",
                                },

                            }}
                        />

                    ))
                }
            </div>
        </div>
    )
}

export default CategorySkillsMenu
