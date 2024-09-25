import { skills } from '@/types'
import { Checkbox, FormControlLabel, Typography } from '@mui/material'

type props = {
    name: string,
    skills: skills[],
    choosedSkills: { id: number, category_id: number }[],
    handleSetChoosedSkills: (skill: skills) => (event: any) => void
}

const SkillsMenu = ({ name, skills, choosedSkills, handleSetChoosedSkills }: props) => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


    return (
        <div className="flex flex-col gap-y-1">
            <Typography variant='h6' sx={{ color: "text.primary" }}>
                Skills
            </Typography>
            <div className=' flex flex-col'>
                <input type="hidden" name={name} value={choosedSkills.map(skill => skill.id).join(',')} />

                {
                    skills?.map((skill, index) => (
                        <FormControlLabel
                            key={index}
                            control={<Checkbox {...label} color='info' />}
                            checked={choosedSkills.some(chosenSkill => chosenSkill.id === skill.id)}
                            onChange={handleSetChoosedSkills(skill)}
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
