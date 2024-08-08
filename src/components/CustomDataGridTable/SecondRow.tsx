import { Box, FormControl, InputBase, MenuItem, Select, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { boxSearchInput, boxSecondRowContainer, menuSelectionStyle, rowCountSelectionStyleContainer, rowCountSelectionStyleForm } from './style'

type props = {
    pageSize: number,
    handlePageSizeChange: (newPageSize: number) => void,
    searchText: string,
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const SecondRow = ({ pageSize, handlePageSizeChange, searchText, handleSearch }: props) => {
    return (
        <Box sx={boxSecondRowContainer}>
            <Box sx={rowCountSelectionStyleContainer}>
                <Typography variant="subtitle2">
                    Show
                </Typography>
                <FormControl variant="outlined" size="small" sx={rowCountSelectionStyleForm} >
                    <Select
                        value={pageSize}
                        onChange={(e) => handlePageSizeChange(Number(e.target.value))}
                    >

                        {[5, 10, 20].map((size) => (
                            <MenuItem
                                key={size}
                                value={size}
                                sx={menuSelectionStyle}
                            >
                                {size}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Typography variant="subtitle2">
                    Entries
                </Typography>
            </Box>
            <Box sx={boxSearchInput}>
                <InputBase
                    placeholder="Search…"
                    sx={{ width: "100%" }}
                    value={searchText}
                    onChange={handleSearch}
                />
                <SearchIcon />
            </Box>
        </Box>
    )
}

export default SecondRow