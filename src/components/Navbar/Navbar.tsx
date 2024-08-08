import React from "react";
import { Toolbar } from "@mui/material";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { toolbar } from "./style";

type props = {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
}
export default function Navbar({ setOpen }: props) {

    return (
        <Toolbar sx={toolbar}>
            <LeftSide setOpen={setOpen} />
            <RightSide />
        </Toolbar >
    );
}
