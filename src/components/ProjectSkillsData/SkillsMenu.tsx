import { skills } from '@/types'
import { Checkbox, FormControlLabel, Typography } from '@mui/material'
import { useState } from 'react'

type props = {
    name: string,
    skills: skills[]
}

const SkillsMenu = ({ name, skills }: props) => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [choosedSkills, setChoosedSkills] = useState<number[]>([])

    const handlesetChoosedSkills = (skill: number) => (event: any) => {
        if (event.target.checked) {
            setChoosedSkills(prev => [...prev, skill])
        } else {
            setChoosedSkills((prev) => prev.filter((item) => item !== skill));
        }
    };

    return (
        <div className="flex flex-col gap-y-1">
            <Typography variant='h6' sx={{ color: "text.primary" }}>
                Skills
            </Typography>
            <div className=' flex flex-col'>
                <input type="hidden" name={name} value={choosedSkills.join(',')} />
                {
                    skills?.map((skill, index) => (
                        <FormControlLabel
                            key={index}
                            control={<Checkbox {...label} color='info' name={name} />}
                            checked={choosedSkills.includes(skill.id)}
                            onChange={handlesetChoosedSkills(skill.id)}
                            sx={{
                                ".MuiFormControlLabel-label": {
                                    color: "text.secondary",
                                },

                            }}
                            label={skill.title}
                        />

                    ))
                }
            </div>
        </div>
    )
}

export default SkillsMenu
