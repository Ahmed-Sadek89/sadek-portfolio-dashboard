"use client"
import {
    GridColDef
} from '@mui/x-data-grid';

export const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70, disableColumnMenu: true , sortable: true},
    { field: 'phone_number', headerName: 'Phone number', width: 700, disableColumnMenu: true, sortable: false },
];

