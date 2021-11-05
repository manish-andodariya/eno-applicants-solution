import HelpIcon from "@mui/icons-material/HelpOutline";
import { IconButton, Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { ReactElement, ReactNode, useState } from "react";
import { PropsWithChildren } from "react";

const useStyles = makeStyles({
    container: {
        position: "relative",
    },
});

export interface ENOTooltipProps extends PropsWithChildren<{}> {
    text?: string;
    children: ReactElement<any, any>;
}

export default function ENOTooltip({ text, children }: ENOTooltipProps) {
    const classes = useStyles();

    const [forceOpen, setForceOpen] = useState(false);

    return text && children ? (
        <div className={classes.container}>
            <Tooltip title={text} placement="top" enterTouchDelay={0}>
                <IconButton
                    sx={{
                        position: "absolute",
                        right: 0,
                        zIndex: 2,
                        padding: "5",
                    }}
                    size="small"
                    tabIndex={-1}
                >
                    <HelpIcon />
                </IconButton>
            </Tooltip>
            <div>{children}</div>
        </div>
    ) : (
        children
    );
}
