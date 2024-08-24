import { Checkbox, FormControlLabel } from "@mui/material";
import RemovePlan from "./RemovePlan";

const Plans = ({ plans }: { plans: futurePlan[] | undefined }) => {

    return (
        <>
            {
                plans ?
                    <div className="flex flex-col gap-2  px-5 pb-5">
                        {
                            plans.map((plan, index) => (
                                <div
                                    key={index}
                                    className={`flex py-2 flex-row justify-between items-center w-full border-b ${index !== plans.length - 1 ? "border-b-gray-500" : "border-b-transparent"}`}
                                >
                                    <form action="">
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={plan.is_completed || false}
                                                    size="small"
                                                    sx={{
                                                        "&.Mui-checked": {
                                                            color: "info.main",
                                                        },
                                                    }}
                                                />}
                                            label={plan.plan}
                                            sx={{
                                                ".MuiFormControlLabel-label": {
                                                    color: plan.is_completed ? "info.main" : "text.secondary",
                                                    fontSize: "14px"
                                                },
                                                "& .MuiCheckbox-root.Mui-checked + .MuiFormControlLabel-label": {
                                                    textDecoration: "line-through",
                                                },
                                            }}
                                        />
                                    </form>
                                    <RemovePlan id={plan.id} is_completed={plan.is_completed} />
                                </div>
                            ))
                        }
                    </div>
                    : <h4>No plans added.</h4>
            }
        </>
    )
}

export default Plans
