import WorkIcon from '@mui/icons-material/Work';
import CategoryIcon from '@mui/icons-material/Category';
import BrushIcon from '@mui/icons-material/Brush';
import LinkIcon from '@mui/icons-material/Link';
import PhoneIcon from '@mui/icons-material/Phone';
import NoteIcon from '@mui/icons-material/Note';
import PeopleIcon from '@mui/icons-material/People';
import MessageIcon from '@mui/icons-material/Message';
import HandymanIcon from '@mui/icons-material/Handyman';
import NextPlanIcon from '@mui/icons-material/NextPlan';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import HistoryIcon from '@mui/icons-material/History';

const iconMapping = {
    JobTitle: WorkIcon,
    CategoryProject: CategoryIcon,
    CategorySkill: HandymanIcon,
    ColorsSetting: BrushIcon,
    Link: LinkIcon,
    LinkType: LinkIcon, // You can customize this further if needed
    Skill: HandymanIcon,
    FuturePlan: NextPlanIcon,
    Message: MessageIcon,
    Phone: PhoneIcon,
    Activity: HistoryIcon,
    Project: AccountTreeIcon,
    ProjectNote: NoteIcon,
    Visitor: PeopleIcon
};


export const getPropsFromAwnerCounts = (awner: awner): PropsFromAwnerCounts => {
    const result = awner && Object.entries(awner._count as { [x: string]: number | string }).map(([modelName, count]) => ({

        name: modelName.replace(/([A-Z])/g, ' $1').trim(),
        count,
        route: modelName.replace(/([A-Z])/g, '_$1').toLowerCase().replace(/^_/, ''),
        icon: iconMapping[modelName as keyof typeof iconMapping]
    }));
    return result;
};