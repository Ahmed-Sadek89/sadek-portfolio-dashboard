"use client"
import {
    GridColDef,
    GridRenderCellParams
} from '@mui/x-data-grid';
import Image from 'next/image';

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
    { field: 'category_name', headerName: 'Category', width: 400, disableColumnMenu: true },
];