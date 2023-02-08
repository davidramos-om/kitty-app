import { Box, Card, Typography } from '@mui/material';
import useSettings from "src/hooks/useSettings";

export default function MarketCapWidget({ coinId, title }) {

    const { language } = useSettings();

    return (
        <Card
            sx={{ display: 'flex', alignItems: 'center', p: 3 }}
        >
            <Box sx={{ flexGrow: 1 }}>
                <Typography variant="subtitle2" paragraph> {title} </Typography>
                <coingecko-coin-price-chart-widget
                    id={`ccm-${coinId}`}
                    coin-id={coinId}
                    currency="usd"
                    height="300"
                    locale={language}
                />
            </Box>
        </Card>
    );
}
