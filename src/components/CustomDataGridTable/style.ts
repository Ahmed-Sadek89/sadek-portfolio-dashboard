export const dataGridStyle = {
    '& .MuiDataGrid-iconButtonContainer': {
        '& .MuiSvgIcon-root': {
            color: 'red', // Change this to your desired color
        },
    },
    "& .MuiDataGrid-main": {
        backgroundColor: "primary.main",
    },
    "& .MuiDataGrid-columnHeaderTitle": {
        color: "text.primary",
        fontWeight: "bold",
        fontSize: "17px",
    },
    "& .MuiDataGrid-columnHeader, & .MuiDataGrid-cell": {
        color: "text.secondary",
    }
};

export const boxContainer = {
    display: 'flex',
    flexDirection: "column",
    gap: "20px",
    bgcolor: "primary.main",
    color: "text.primary",
    borderRadius: "10px",
    padding: "20px 10px"
}

export const BoxFirstRowContainer = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "5px"
}

export const btnCreateNew = {
    bgcolor: "success.main",
    color: "#fff",
    fontWeight: "bold",
    ":hover": {
        background: "#00d25b",
    },
}
export const linkCreateNew = {
    fontWeight: "bold", 
    padding: "8px", 
    borderRadius: "5px", 
    color: "#fff"
}

export const boxSecondRowContainer = {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px"
}

export const rowCountSelectionStyleContainer = {
    display: "flex",
    alignItems: "center",
    gap: "10px"
}

export const rowCountSelectionStyleForm = {
    minWidth: 65,
    color: "text.primary",
    bgcolor: "primary.main"
}

export const menuSelectionStyle = {
    color: "text.secondary",
    bgcolor: "transparent",
    ":hover": { color: "text.primary", bgcolor: "primary.dark" },
    '&.Mui-selected': { color: 'text.primary', bgcolor: 'primary.dark' },
    '&.Mui-selected:hover': { color: 'text.primary', bgcolor: 'primary.dark' },
}

export const boxSearchInput = {
    background: "transparent",
    border: `1px solid #2c2e33`,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "10px",
    gap: "10px",
    padding: " 5px 10px",
    width: { xs: "100%", sm: "50%" }
}

export const paginationContainerStyle = {
    display: 'flex',
    flexDirection: { xs: "column", md: "row" },
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    padding: "20px 0px",
    gap: "20px",
}

export const paginationNumberStyle = {
    '& .MuiPaginationItem-root': {
        color: 'text.secondary', // Default text color for pagination items
        bgcolor: 'primary.main', // Default background color for pagination items
        padding: { xs: "10px", sm: "0px" },
        minWidth: { xs: "20px", sm: "40px" },
        height: { xs: "20px", sm: "40px" },
        ':hover': {
            bgcolor: 'primary.light', // Background color on hover
        },
        '&.Mui-selected': {
            bgcolor: 'primary.dark', // Background color when selected
            color: 'text.primary', // Text color when selected
            ':hover': {
                bgcolor: 'primary.dark', // Background color when selected and hovered
            },
        },
    },
}

export const EditOvelayStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: "100%", sm: 500 },
    bgcolor: 'primary.main',
    color: "text.primary",
    boxShadow: 24,
    borderRadius: "10px",
    padding: 3
}

export const editLink = {
    minWidth: "64px", padding: "6px 8px",
}