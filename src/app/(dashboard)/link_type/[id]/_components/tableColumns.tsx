"use client"
import { Typography } from '@mui/material';
import {
    GridColDef,
    GridRenderCellParams
} from '@mui/x-data-grid';
import Link from 'next/link';

// disableColumnMenu: true // for menu :
export const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70, disableColumnMenu: true },
    { field: 'link_type', headerName: 'Link_type', width: 550, disableColumnMenu: true },
    {
        field: 'related links', headerName: 'Related links', width: 200, disableColumnMenu: true,
        renderCell: (params: GridRenderCellParams<any, any, any>) => {
            return (
                <Link href={`link_type/${params.id}`}>
                    <Typography bgcolor={'info.main'} className='p-2 rounded opacity-90 hover:opacity-100'>
                        Links
                    </Typography>
                </Link>
            )
        }
    },
];

