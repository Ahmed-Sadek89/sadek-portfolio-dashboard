export const toolbar = {
    background: "primary.main",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
}

export const leftSideContainer = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
}

export const searchInputContainer = {
    background: "transparent",
    border: `1px solid #2c2e33`,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "10px",
    gap: "10px",
    padding: " 5px 10px",
    width: "100%"
}

export const logoLink = {

    letterSpacing: "3px",
    fontSize: "15px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    gap: "10px"
}

export const rightSideContainer = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "end",
    gap: "10px"
}

export const createNewProjectMain = {
    backgroundColor: "success.main",
    color: "#fff",
    fontWeight: "bold",
    ":hover": {
        background: "#00d25b",
    },
    display: { xs: "none", lg: "block" }
}

export const menuLink = {
    cursor: 'pointer',
    padding: '20px 30px',
}