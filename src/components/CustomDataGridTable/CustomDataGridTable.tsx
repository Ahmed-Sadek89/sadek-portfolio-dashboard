"use client"
import { useEffect, useState } from 'react'
import { DataGrid, GridRenderCellParams, GridColDef, GridRenderPaginationProps, GridCallbackDetails } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { boxContainer } from './style';
import CustomPagination from './CustomPagination';
import FirstRow from './FirstRow';
import SecondRow from './SecondRow';
import TableButtonControl from './TableButtonControl'

type props = {
    userRows: any,
    columns: any,
    pageName: string,
    EditOverlay: ({ param, handleClose }: any) => JSX.Element | JSX.Element,
    AddOverlay: ({ handleClose }: { handleClose: () => void }) => JSX.Element | any,
    RemoveOverlay: ({ param, handleClose }: any) => JSX.Element
}

const CustomDataGridTable = ({ userRows, columns, pageName, EditOverlay, AddOverlay, RemoveOverlay }: props) => {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        setRows(userRows)
    }, [userRows]);

    const actionColumn: GridColDef[] = [
        {
            field: 'action', headerName: 'Action', width: 200, disableColumnMenu: true,
            renderCell: (params: GridRenderCellParams<any, any, any>) => {
                return (
                    <TableButtonControl
                        param={params.row}
                        EditOverlay={EditOverlay}
                        RemoveOverlay={RemoveOverlay}
                    />
                )
            }
        },
    ];
    const [searchText, setSearchText] = useState('');

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const text = event.target.value;
        setSearchText(text);
        filterRows(text);
    };

    const filterRows = (text: string) => {
        const filteredRows = userRows.filter((row: any) => {
            return Object.values(row).some((value: any) =>
                value.toString().toLowerCase().includes(text.toLowerCase())
            );
        });
        setRows(filteredRows);
    };
    const [pageSize, setPageSize] = useState<number>(pageName === 'home' ? 5 : 10);
    const [page, setPage] = useState<number>(0);

    const handlePageChange = (newPage: number, details: GridCallbackDetails<any>) => {
        setPage(newPage);
    };
    const handlePageSizeChange = (newPageSize: number) => {
        setPageSize(newPageSize);
        setPage(0); // Reset to the first page whenever the page size changes
    };
    const paginationComponent: React.FC<GridRenderPaginationProps> = (props) => (
        <CustomPagination
            page={page}
            {...props}
            onPageChange={(event, newPage) => handlePageChange(newPage, {})}
            pageSize={pageSize}
            rowCount={rows.length} />
    );
    return (

        <Box sx={boxContainer} boxShadow={7}>
            <FirstRow pageName={pageName} AddOverlay={AddOverlay} />
            <SecondRow
                pageSize={pageSize} searchText={searchText} handleSearch={handleSearch} handlePageSizeChange={handlePageSizeChange}
            />
            <Box sx={{ width: "100%" }}>
                <DataGrid
                    sx={{ borderColor: 'transparent' }}
                    rows={rows}
                    columns={columns.concat(actionColumn)}
                    pageSize={pageSize}
                    onPageSizeChange={(newPageSize) => handlePageSizeChange(newPageSize)}
                    rowsPerPageOptions={[5, 10, 20]}
                    autoHeight
                    page={page}
                    onPageChange={(newPage, details) => handlePageChange(newPage, details)}
                    components={{ Pagination: paginationComponent }}
                    rowCount={rows.length}
                    disableSelectionOnClick
                />
            </Box>
        </Box>
    );
}

export default CustomDataGridTable 