import { Box } from "@mui/material";
import AddPlan from "./_components/AddPlan";
import Plans from "./_components/Plans";

const FuturePlans = ({ plans }: { plans: futurePlan[] | undefined }) => {

    return (
        <Box
            sx={{
                bgcolor: "primary.main",
                color: "text.primary",
            }}
            boxShadow={7}
            className="flex flex-col gap-[20px] rounded p-5 h-full max-h-[80vh] overflow-y-auto"
        >
            <h2 className="font-bold text-xl">Future plans</h2>
            <AddPlan />
            <Plans />
        </Box>
    );
};

export default FuturePlans;
