import { Avatar, Stack, Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

import { fPercent, tokenPriceShitFormat } from "src/utils/formatNumber";

import Iconify from "../iconify";
import { TokenData } from "./TokenData";


type Props = {
    token: TokenData
    bgHoverColor?: string
}

export function MarqueeBox({ token, bgHoverColor }: Props) {

    const { logo, name, symbol, price, percentage, arrowDirection } = token;
    const priceFormated = `$${tokenPriceShitFormat(Number(price || 0), 10)}`;

    console.log({ name, price, priceFormated });

    return (
        <Stack
            spacing={1}
            direction="row"
            alignItems="center"
            sx={{
                padding: 1,
                ":hover": {
                    backgroundColor: bgHoverColor,
                    cursor: "pointer"
                }
            }}
        >
            <Avatar
                src={logo}
                alt={name}
                variant="circular"
                sx={{
                    bgcolor: deepPurple[ 100 ],
                    width: 24, height: 24
                }}
            >
                {name[ 0 ]}
            </Avatar>
            <Typography
                variant="body1"
                fontWeight="500"
                component="b"
                letterSpacing={0.5}
            >
                <b>
                    {name}
                    <span>
                        {` (${symbol})`}
                    </span>
                </b>
            </Typography>
            <Typography
                variant="body1"
                color={arrowDirection === "up" ? "success" : "error"}
            >
                {`${priceFormated}`}
                <span>
                    {` (${fPercent(percentage)})`}
                </span>
            </Typography>
            <Iconify
                icon={arrowDirection === "up" ? "material-symbols:arrow-drop-up-rounded" : "material-symbols:arrow-drop-down-rounded"}
                color={arrowDirection === "up" ? "success" : "error"}
            />
        </Stack>
    );
}