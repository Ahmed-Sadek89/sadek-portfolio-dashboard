import React from 'react';
import { Box, Pagination, PaginationItem, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { paginationContainerStyle, paginationNumberStyle } from './style';

interface CustomPaginationProps {
    page: number;
    onPageChange: (event: React.ChangeEvent<unknown>, newPage: number) => void;
    pageSize: number;
    rowCount: number;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({ page, onPageChange, pageSize, rowCount }) => {
    const handlePageChange = (event: React.ChangeEvent<unknown>, newPage: number) => {
        onPageChange(event, newPage - 1); // DataGrid uses zero-based index for pages
    };

    return (
        <Box sx={paginationContainerStyle}>
            <Typography sx={{ display: { xs: "none", lg: "block" } }}>
                Page {page + 1}, Showing {pageSize} of {rowCount} entries
            </Typography>
            <Pagination
                count={Math.ceil(rowCount / pageSize)}
                page={page + 1} // Pagination component uses one-based index
                onChange={handlePageChange}
                variant="outlined"
                shape="rounded"
                size='large'
                renderItem={(item) => (
                    <PaginationItem
                        slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                        {...item}
                    />
                )}
                sx={paginationNumberStyle}
            />
        </Box>
    );
};

export default CustomPagination;
