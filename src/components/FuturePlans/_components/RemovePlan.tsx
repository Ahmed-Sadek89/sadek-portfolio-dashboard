import { removePlan } from '@/actions/plan/plan-remove';
import ButtonSubmit from '@/components/ui/button-submit';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';

const RemovePlan = ({ id, is_completed }: { id: number, is_completed: boolean }) => {
    return (
        <form action={removePlan}>
            <input type="hidden" name="id" value={id} />
            <ButtonSubmit btnStyle={{ width: "auto", padding: "0px", }}>
                <DisabledByDefaultIcon
                    fontSize="small"
                    className="cursor-pointer w-full h-full"
                    sx={{ color: is_completed ? "info.main" : "text.primary" }}
                />
            </ButtonSubmit>
        </form>
    )
}

export default RemovePlan
