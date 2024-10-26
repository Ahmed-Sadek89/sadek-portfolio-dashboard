"use client"
import { Typography } from '@mui/material';
import {
    GridColDef,
    GridRenderCellParams
} from '@mui/x-data-grid';
import Image from 'next/image';
import Link from 'next/link';

// disableColumnMenu: true // for menu :
export const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70, disableColumnMenu: true },
    { field: 'title', headerName: 'Title', width: 200, disableColumnMenu: true },
    {
        field: 'icon', headerName: 'Icon', width: 200, disableColumnMenu: true,
        renderCell: (params: GridRenderCellParams<any, any, any>) => {
            return (
                <Image src={params.row.icon} alt={params.row.title} width={40} height={40} className='object-cover w-[40px] h-[40px] rounded-full' />
            )
        }
    },
    { field: 'category_name', headerName: 'Category', width: 200, disableColumnMenu: true },
    {
        field: 'related', headerName: 'Related', width: 200, disableColumnMenu: true,
        renderCell: (params: GridRenderCellParams<any, any, any>) => {
            return (
                <Link href={`/skill/${params.row.id}/projects`}>
                    <Typography bgcolor={'success.main'} className='p-2 rounded opacity-90 hover:opacity-100'>
                        Projects
                    </Typography>
                </Link>
            )
        }
    },
];