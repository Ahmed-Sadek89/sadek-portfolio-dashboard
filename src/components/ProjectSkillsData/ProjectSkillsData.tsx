import React, { useEffect, useState } from 'react'
import CategorySkillsMenu from './CategorySkillsMenu'
import { GetAsyncData } from '@/hooks/get-async-data';
import { getCategorySkills } from '@/lib/getCategorySkills';
import SkillsMenu from './SkillsMenu';
import { skills } from '@/types';
import { getSkillsCategoryId } from '@/lib/getSkillsByCategoryId';

const ProjectSkillsData = () => {
    const data = GetAsyncData(getCategorySkills);
    const [checkedCategories, setCheckedCategories] = useState<number[]>([])
    const [skills, setSkills] = useState<skills[]>([])
    const [choosedSkills, setChoosedSkills] = useState<{ id: number, category_id: number }[]>([])

    const handleSetChoosedSkills = (skill: skills) => (event: any) => {
        if (event.target.checked) {
            setChoosedSkills(prev => [...prev, { id: skill.id, category_id: skill.category_id }])
        } else {
            setChoosedSkills((prev) => prev.filter((item) => item.id !== skill.id));

        }
    };

    const handleCheckboxChange = (category: number) => async (event: any) => {
        if (event.target.checked) {
            const skillsByCategoryId = await getSkillsCategoryId(category)

            setCheckedCategories((prev) => [...prev, category]);
            setSkills(prev => [...prev, ...skillsByCategoryId as skills[]])
            setChoosedSkills(prev => {
                const res = skillsByCategoryId?.map(skill => {
                    return { id: skill.id, category_id: category }
                })
                return [...prev, ...res as { id: number, category_id: number }[]]
            })
        } else {
            setCheckedCategories((prev) => prev.filter((item) => item !== category));
            setSkills((prev) => prev.filter((item) => item.category_id !== category));

            setChoosedSkills((prev) => prev.filter((item) => item.category_id !== category));
        }
    };

    useEffect(() => {
        checkedCategories.map((index) => {
            const skillsBycatId = choosedSkills.find(skill => skill.category_id === index)
            console.log({index, skillsBycatId})
            if (!skillsBycatId) {
                setCheckedCategories((prev) => prev.filter((item) => item !== index));
                setSkills((prev) => prev.filter((item) => item.category_id !== index));
            }
        })
    }, [checkedCategories, choosedSkills])
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 items-start gap-x-3 gap-y-2 w-full flex-wrap sm:w-2/3 justify-between">
            <CategorySkillsMenu data={data} checkedCategories={checkedCategories} name="category_skills_id" handleCheckboxChange={handleCheckboxChange} />
            {
                skills && skills.length > 0 &&
                <SkillsMenu skills={skills} name="skills_id" choosedSkills={choosedSkills} handleSetChoosedSkills={handleSetChoosedSkills} />
            }
        </div>
    )
}

export default ProjectSkillsData
