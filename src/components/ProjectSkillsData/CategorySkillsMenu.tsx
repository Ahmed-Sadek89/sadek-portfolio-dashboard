import { Checkbox, FormControlLabel, Typography } from '@mui/material'
import { categorySkill } from '@/types';

type props = {
    name: string,
    data: categorySkill[],
    checkedCategories: number[],
    handleCheckboxChange: (category: number) => (event: any) => void
}

const CategorySkillsMenu = ({ name, data, checkedCategories, handleCheckboxChange }: props) => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <div className="flex flex-col gap-y-1">
            <Typography variant='h6' sx={{ color: "text.primary" }}>
                Category skills
            </Typography>
            <div className='flex flex-col'>
                <input type="hidden" name={name} value={checkedCategories.join(',')} />
                {
                    data.map((key, index) => (
                       
                        <FormControlLabel
                            key={index}
                            control={<Checkbox {...label} color='info'/>}
                            checked={checkedCategories.includes(key.id)}
                            onChange={handleCheckboxChange(key.id)}
                            sx={{
                                ".MuiFormControlLabel-label": {
                                    color: "text.secondary",
                                },

                            }}
                            label={key.category_name}
                        />

                    ))
                }
            </div>
        </div>
    )
}

export default CategorySkillsMenu
