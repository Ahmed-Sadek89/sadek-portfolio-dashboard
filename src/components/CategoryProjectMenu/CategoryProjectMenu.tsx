import { FormControl, Typography } from '@mui/material'
import React from 'react'
import FormSelectInput from '../ui/form-select-input'
import { GetAsyncData } from '@/hooks/get-async-data';
import { getCategoryProject } from '@/lib/getCategoryProject';

const CategoryProjectMenu = () => {
    const data = GetAsyncData(getCategoryProject);
    return (
        <div className="flex items-center gap-x-3">
            <Typography variant='h6' className='underline' sx={{ color: "text.primary" }}>
                Category Project:
            </Typography>
            {/* <Typography variant='body1' className='p-2 font-bold rounded transition duration-300 italic' sx={{ color: "text.secondary", bgcolor: "primary.main", fontWeight: "bold", ":hover": { bgcolor: "text.secondary", color: "primary.main", } }}>
                Landing pages
            </Typography> */}
            <div className="w-1/2">
                <FormControl fullWidth>
                    <FormSelectInput label='Choose category Project' name='category_id' data={data} keyData="category_name" />
                </FormControl>
            </div>
        </div>
    )
}

export default CategoryProjectMenu
