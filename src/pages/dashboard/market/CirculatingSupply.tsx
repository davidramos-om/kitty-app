import React from "react";
import { Box, LinearProgress, Stack, Typography } from '@mui/material';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

import { fNumber } from "src/utils/formatNumber";

type Props = {
    symbol: string;
    circulating: number;
    maxSupply: number;
    totalSupply: number;

}

interface HtmlTooltipProps extends TooltipProps {
    width?: number;
}

const HtmlTooltip = styled(({ className, width, ...props }: HtmlTooltipProps) => (
    <Tooltip
        {...props}
        classes={{ popper: className }}
    />
))(({ theme }) => ({
    [ `& .${tooltipClasses.tooltip}` ]: {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        maxWidth: 330,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
    },
}));


function CirculatingSupply({ symbol, circulating, maxSupply, totalSupply }: Props) {

    const val = Number(maxSupply > 0 ? ((circulating / maxSupply) * 100).toFixed(2) : 0);

    return (
        <Box sx={{ width: '100%' }}>
            <HtmlTooltip
                title={
                    <Box width={300}>
                        <Stack direction="row" >
                            <Typography>
                                Percentage
                            </Typography>
                            <Box sx={{ flexGrow: 1 }} />
                            <Typography>
                                {`${val}%`}
                            </Typography>
                        </Stack>
                        <Stack p={2}>
                            <LinearProgress
                                variant="determinate"
                                value={val}
                                sx={{
                                    height: 5,
                                    borderRadius: 4,
                                }}
                            />
                        </Stack>
                        <Stack direction="row">
                            <Typography>
                                Circulating Supply
                            </Typography>
                            <Box sx={{ flexGrow: 1 }} />
                            <Typography color="text.disabled">
                                {`${fNumber(circulating)} ${symbol}`}
                            </Typography>
                        </Stack>
                        <Stack direction="row">
                            <Typography>
                                Max Supply
                            </Typography>
                            <Box sx={{ flexGrow: 1 }} />
                            <Typography color="text.disabled">
                                {`${fNumber(maxSupply)} ${symbol}`}
                            </Typography>
                        </Stack>
                    </Box>
                }
            >
                <div>
                    <Typography>
                        {`${fNumber(totalSupply)} ${symbol}`}
                    </Typography>
                    {maxSupply > 0 && (
                        <LinearProgress
                            variant="determinate"
                            value={val}
                            sx={{ height: 7, borderRadius: 4 }}
                        />
                    )}
                </div>
            </HtmlTooltip>

        </Box>
    );
}

export default CirculatingSupply;