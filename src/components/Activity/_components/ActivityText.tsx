import { ACTION, TABLE } from '@/enums'
import { Typography } from '@mui/material'
import React from 'react'

type props = {
    action: ACTION,
    table_name?: TABLE,
    table_name_id?: string | null
}
const sx = { color: "text.secondary", fontWeight: "100", fontSize: "13px" }
const ActivityText = ({ action, table_name, table_name_id }: props) => {
    return (
        <>
            {
                action.toString() === "LOGIN" &&
                <Typography sx={sx}>You logged in!</Typography>
            }
            {
                action.toString() === "CREATE" &&
                <Typography sx={sx}>You created a new <span className='lowercase'>{table_name}</span></Typography>
            }
            {
                action.toString() === "UPDATE" &&
                <Typography sx={sx}>You updated the <span className='lowercase'>{table_name}</span> number #{table_name_id}</Typography>
            }
            {
                action.toString() === "DELETE" &&
                <Typography sx={sx}>You deleted the <span className='lowercase'>{table_name}</span> number #{table_name_id}</Typography>
            }
        </>

    )
}

export default ActivityText
