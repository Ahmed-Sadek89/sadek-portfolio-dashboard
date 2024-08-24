import RemovePlan from "./RemovePlan";
import CheckPlan from "./CheckPlan";
import { futurePlan } from "@/types";

const Plans = ({ plans }: { plans: futurePlan[] | undefined }) => {

    return (
        <>
            {
                plans && plans.length > 0 ?
                    <div className="flex flex-col gap-2  px-5 pb-5">
                        {
                            plans.map((plan, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-row justify-between items-center w-full border-b ${index !== plans.length - 1 ? "border-b-gray-500" : "border-b-transparent"}`}
                                >
                                    <CheckPlan id={plan.id} plan={plan.plan} is_completed={plan.is_completed} />
                                    <RemovePlan id={plan.id} is_completed={plan.is_completed} />
                                </div>
                            ))
                        }
                    </div>
                    : <h4 className="italic text-sm px-5 pb-5 text-yellow-600">No plans added.</h4>
            }
        </>
    )
}

export default Plans
