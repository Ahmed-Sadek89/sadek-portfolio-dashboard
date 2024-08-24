import { format } from "date-fns";
import { activity } from "@/types"
import ActivityLogo from "./ActivityLogo"
import { Typography } from "@mui/material";
import ActivityText from "./ActivityText";


const Activities = ({ activities }: { activities: activity[] | undefined }) => {

    return (
        <>
            {
                activities && activities.length > 0 ?
                    <div className="flex flex-col gap-2  px-5 pb-5">
                        {
                            activities.map((activity, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-row py-2 justify-between items-center w-full border-b ${index !== activities.length - 1 ? "border-b-gray-500" : "border-b-transparent"}`}
                                >
                                    <div className="flex gap-3 items-center">
                                        <ActivityLogo action={activity.action} />
                                        <div className="flex flex-col">
                                            <h3 className="text-sm">{activity.table_name}</h3>
                                            <ActivityText action={activity.action} table_name={activity.table_name} table_name_id={activity.table_name_id} />
                                        </div>
                                    </div>
                                    <Typography sx={{ color: "text.secondary", fontWeight: "100", fontSize: "14px" }}>{format(new Date(activity.date), "MMM d, yyyy 'at' h:mm a")}</Typography>
                                </div>
                            ))
                        }
                    </div>
                    : <h4 className="italic text-sm px-5 pb-5 text-yellow-600">No activities yet!</h4>
            }
        </>
    )
}

export default Activities
