export const boxContainer = {
    backgroundColor: "primary.main",
    padding: "1.75rem 1.5625rem",
    display: "flex",
    flexDirection: "column",
    gap: "25px",
}

export const profileImageContainer = { position: "relative", width: "150px", height: "150px" };

export const profileImageIcon = {
    borderRadius: "50%", position: "absolute", top: 2, right: 2,
    backgroundColor: "primary.dark", color: "text.primary", transition: "all 0.3s ease",
    ":hover": { backgroundColor: "text.primary", color: "primary.dark" }
}

export const profileLable = {
    cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", padding: "4px"
}

export const profileMainImage = { borderRadius: "50%", width: "100%", height: "100%" }

export const profileSocialContainer = { display: "flex", flexDirection: "column", gap: "10px" }

export const profileSocialTitle = { fontWeight: "bold", color: "text.primary", mb: "10px" }

export const linkContent = { display: "flex", flexDirection: "row", gap: "15px", alignItems: "center" }

export const linkIcon = {
    padding: "10px",
    borderRadius: "50%", display: "flex", alignItems: "center", bgcolor: "primary.dark", color: "text.main"
}

export const socialName = { fontWeight: "bold", color: "text.primary", textTransform: "capitalize" }

export const socialIcon = { color: "info.main", cursor: "pointer" }

export const conactContainer = { display: "flex", flexDirection: "row", alignItems: "center", gap: "10px", flexWrap: "wrap" }

export const profileNumberInformationContainer = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }

export const profileNumberIcon = { display: "flex", padding: "10px", borderRadius: "50%" }

export const profileNumberText = { display: "flex", flexDirection: "column", gap: "4px" }




