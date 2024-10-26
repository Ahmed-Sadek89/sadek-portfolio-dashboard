import { Typography } from '@mui/material'
import React from 'react'
import FormSelectInput from '../ui/form-select-input'
import { GetAsyncData } from '@/hooks/get-async-data';
import { getCategoryProject } from '@/lib/getCategoryProject';

const CategoryProjectMenu = ({ defaultCategoryProject }: { defaultCategoryProject?: number }) => {
    const data = GetAsyncData(getCategoryProject);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-x-3 gap-y-2 w-full flex-wrap sm:w-2/3 justify-between">
            <Typography variant='h6' sx={{ color: "text.primary" }}>
                Category Project:
            </Typography>
            <div className="w-full flex items-end justify-end">
                <FormSelectInput label='Choose category Project' name='category_project_id' data={data} keyData="category_name" defaultValue={defaultCategoryProject} />
            </div>
        </div>
    )
}

export default CategoryProjectMenu
