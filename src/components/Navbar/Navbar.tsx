import React from "react";
import { Toolbar } from "@mui/material";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

type props = {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
}
export default function Navbar({ setOpen }: props) {

    return (
        <Toolbar sx={{background: "primary.main"}} className="w-full flex items-center justify-between flex-wrap sm:flex-nowrap">
            <LeftSide setOpen={setOpen} />
            <RightSide />
        </Toolbar >
    );
}
