"use client"
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
        field: 'link', headerName: 'Link', width: 200, disableColumnMenu: true,
        renderCell: (params: GridRenderCellParams<any, any, any>) => {
            console.log({ params })
            return (
                <Link target="_blank" href={params.row.link} rel="noopener noreferrer">
                    <Image src={params.row.icon} alt={params.row.title} width={40} height={40} className='object-cover rounded-full' />
                </Link>
            )
        }
    },
    { field: 'link_type', headerName: 'Link type', width: 400, disableColumnMenu: true },
];