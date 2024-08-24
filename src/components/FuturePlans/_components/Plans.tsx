import RemovePlan from "./RemovePlan";
import CheckPlan from "./CheckPlan";

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
                                    <CheckPlan id={plan.id} plan={plan.plan} is_completed={plan.is_completed} />
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
