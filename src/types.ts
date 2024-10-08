import { ACTION, TABLE } from "@/enums";

export type PropsFromAwnerCounts = {
    name: string,
    count: string | number,
    route: string,
    icon: any
}[];

export type awner = {
    id: number;
    name: string;
    email: string;
    description: string | null;
    image: string | null;
    isPriamry: boolean | null;
    Project?: project[],
    Activity?: activity[],
    FuturePlan?: futurePlan[],
    _count?: {
        JobTitle: number,
        CategoryProject: number,
        CategorySkill: number,
        Link: number,
        LinkType: number,
        Skill: number,
        FuturePlan: number,
        Message: number,
        Phone: number,
        Activity: number,
        Project: number,
        ProjectNote: number,
        Visitor: number
    }
}
export type visitor = {
    id: string;
    name: string;
    email: string;
    image: string | null;
    login_by: string;
    awner_id: number;
}
export type project = {
    id: number;
    title: string;
    description: string;
    live_url: string;
    repo_url: string;
    status: string;
    created_at: string;
    ended_at: string | null;
    attachment: string;
    awner_id: number;
    category_project_name: string
    category_project: {
        id: number,
        name: string
    },
    categorySkills: string[],
    skills: string[]
}



export type activity = {
    id: number;
    action: ACTION;
    table_name: TABLE;
    date: Date;
    table_name_id: string | null;
    awner_id: number;
}
export type categoryProject = {
    id: number;
    category_name: string;
    awner_id: number;
}
export type categorySkill = {
    id: number;
    category_name: string;
    awner_id: number;
}
export type colorsSetting = {
    id: number;
    main_color: string;
    color1: string;
    color2: string;
    awner_id: number;
}

export type futurePlan = {
    id: number;
    plan: string;
    is_completed: boolean;
    awner_id: number;
}

export type jobTitle = {
    id: number;
    title: string;
    awner_id: number;
}

export type linkType = {
    id: number;
    link_type: string;
    awner_id: number;
}

export type link = {
    id: number;
    title: string;
    link: string;
    icon: string | null;
    link_type_id: number;
    awner_id: number;
}

export type LinksWithItsType = {
    id: number,
    link_type: string,
    links: link[]
}

export type phone = {
    id: number;
    phone_number: string;
    awner_id: number;
}

export type phoneWithoutAwnerId = Omit<phone, 'awner_id'>;

export type skills = {
    id: number;
    title: string;
    icon: string | null;
    category_id: number;
    category_name: string;
    awner_id: number;
}


export type message = {
    id: number;
    subject: string;
    message: string;
    visitor_id: string;
    awner_id: number;
}

export type projectNote = {
    id: number;
    notes: string | null;
    project_id: number;
    visitor_id: string;
    react: string;
    awner_id: number;
}

