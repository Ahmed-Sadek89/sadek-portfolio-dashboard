"use client"
import {
    GridColDef
} from '@mui/x-data-grid';

// disableColumnMenu: true // for menu :
export const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70, disableColumnMenu: true },
    { field: 'title', headerName: 'Title', width: 700, disableColumnMenu: true },
    
];

