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
    { field: 'category_name', headerName: 'category_name', width: 550, disableColumnMenu: true },
    {
        field: 'related projects', headerName: 'Related Projects', width: 200, disableColumnMenu: true,
        renderCell: (params: GridRenderCellParams<any, any, any>) => {
            return (
                <Link href={`/category_project/${params.row.id}`}>
                    <Typography bgcolor={'info.main'} className='p-2 rounded opacity-90 hover:opacity-100'>
                        Projects
                    </Typography>
                </Link>
            )
        }
    },
];

