export const userContainer = {
    height: "100vh",
    backgroundColor: "primary.dark",
}

export const userContents = {
    width: "100%",
    height: "100%",
    padding: 2,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: { xs: "0px", md: "50px" }
}

export const userBackgroundBox = {
    width: "calc(100%- 33.33%)",
    bgcolor: "primary.main",
    height: "100%",
    borderRadius: "20px",
    display: { xs: "none", md: "flex" },
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
}

export const formContainer = {
    width: { xs: "100%", md: "33.33%" },
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: { xs: "center", md: "start" }
}
