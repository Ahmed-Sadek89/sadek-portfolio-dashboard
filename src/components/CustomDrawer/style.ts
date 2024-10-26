export const drawerContainer = {
    width: 240,
    flexShrink: 0,
    position: "relative",
    '& .MuiDrawer-paper': {
        width: 240,
        boxSizing: 'border-box',
        backgroundColor: "primary.main",
    },
}

export const ListItemIconStyle = {
    backgroundColor: "primary.dark",
    minWidth: "auto",
    padding: "5px",
    borderRadius: "50%"
}

export const themeColorsContainer = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "10px",
    mt: "10px"
}

export const themeColor = {
    padding: "20px",
    borderRadius: "10px",
    cursor: "pointer",
    width: "20px",
    height: "20px"
}

export const logoutLinkStyle = {
    display: "flex",
    alignItems: "center",
    textTransform: "capitalize",
    gap: "10px",
    color: "#fff",
    width: "80%",
    margin: "10px 0px",
    padding: "10px 0px",
    borderTopLeftRadius: "0px",
    borderBottomLeftRadius: "0px",
    borderTopRightRadius: "10px",
    borderBottomRightRadius: "10px",
    ":hover": {
        bgcolor: "none"
    }
}