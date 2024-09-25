import React, { useState } from 'react'
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

    const handleCheckboxChange = (category: number) => async (event: any) => {
        if (event.target.checked) {
            const skillsByCategoryId = await getSkillsCategoryId(category)
            console.log({ skillsByCategoryId })
            setCheckedCategories((prev) => [...prev, category]);
            setSkills(prev => [...prev, ...skillsByCategoryId as skills[]])
        } else {
            setSkills((prev) => prev.filter((item) => item.category_id !== category));
            setCheckedCategories((prev) => prev.filter((item) => item !== category));
        }
    };
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 items-start gap-x-3 gap-y-2 w-full flex-wrap sm:w-2/3 justify-between">
            <CategorySkillsMenu data={data} checkedCategories={checkedCategories} name="category_skills_id" handleCheckboxChange={handleCheckboxChange} />
            {
                skills && skills.length > 0 &&
                <SkillsMenu skills={skills}  name="skills_id"/>
            }
        </div>
    )
}

export default ProjectSkillsData
