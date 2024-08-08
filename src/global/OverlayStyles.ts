export const editOverlayContainer = {
    display: "flex",
    flexDirection: "column",
    gap: "10px"
}
export const formStyle = {
    width: "100%",
    display: 'flex',
    
    gap: "20px"
}
export const textFiledStyle = {
    width: "100%",
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#2c2e33', // default border color
            color: "primary.main"
        },
        '&:hover fieldset': {
            borderColor: 'text.primary', // border color when hovered
        },
        '&.Mui-focused fieldset': {
            borderColor: 'text.primary', // border color when focused
        },
    },
    '& .MuiInputLabel-root': {
        color: 'text.secondary', // default label color
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: 'text.primary', // label color when focused
        fontWeight: "bold",
    },
}

export const btnsGroupStyle = {
    display: 'flex',
    flexDirection: "row",
    gap: "10px",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap"
}

export const btnStyle = {
    color: "#fff",
    display: "flex",
    alignItems: "center",
    gap: "4px"
}

export const datePickerStyle = {
    '& .MuiPaper-root': {
        backgroundColor: 'primary.main', // Background color of the calendar
        fontWeight: "bold"
    },
    '& .MuiPickersDay-root': {
        color: 'text.secondary', // Default day color
        backgroundColor: 'primary.dark',
        fontWeight: "bold",
        display: "flex",
        alighItems: "center",
        '&:hover': {
            color: 'primary.dark', // Default day color
            backgroundColor: 'text.secondary',
        },
        '&.Mui-selected': {
            backgroundColor: 'text.primary', // Background color of selected day
            color: 'primary.main', // Color of selected day
        },
    },
};