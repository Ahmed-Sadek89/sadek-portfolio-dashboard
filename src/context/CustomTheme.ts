import { createTheme } from "@mui/material";

const generalColors = {
    secondary: {
        main: '#f2edf3', // Customize your secondary color
    },
    success: {
        main: '#4caf50', // Customize your success color
    },
    error: {
        main: '#f44336', // Customize your error color
    },
    warning: {
        main: '#ff9800', // Customize your warning color
    },
    info: {
        main: '#2196f3', // Customize your info color
    },
}
export const darkTheme = createTheme({
    palette: {
        primary: {
            main: '#19202f', // Customize your primary color
            dark: "#242b39"
        },
        text: {
            primary: "#dedfd7",
            secondary: "#6c7293"
        },
        custom: {
            customSuccess: '#193130',
            customSuccessText: '#21c03c',
            customInfo: '#162742',
            customInfoText: '#0860e8',
            customError: '#2e2234',
            customErrorText: '#ee324e',
        },
        ...generalColors
    },
});

export const lightTheme = createTheme({
    palette: {
        primary: {
            main: '#fff', // Customize your primary color
            dark: "#f2edf3"
        },
        text: {
            primary: "#000",
            secondary: "#191c24"
        },
        custom: {
            customSuccess: '#e8f9eb',
            customSuccessText: '#22c041',
            customInfo: '#e5effd',
            customInfoText: '#0162e9',
            customError: '#fdeaef',
            customErrorText: '#ee337e',
        },
        ...generalColors
    },
})


// for adding {{custom}} to Palette
declare module '@mui/material/styles' {
    interface Palette {
        custom: {
            customSuccess: string,
            customSuccessText: string,
            customInfo: string,
            customInfoText: string,
            customError: string,
            customErrorText: string,
        },
    }
    interface PaletteOptions {
        custom?: {
            customSuccess?: string,
            customSuccessText?: string,
            customInfo?: string,
            customInfoText?: string,
            customError?: string,
            customErrorText?: string,
        };
    }
}