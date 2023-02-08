import { useState, useEffect, useCallback, } from 'react';
import { Box, Card, Typography, Skeleton } from '@mui/material';

export default function MarketCapWidget({ coinId, title }) {

    const [ loaded, setLoaded ] = useState(false);

    const isLoaded = useCallback(() => {

        const elId = `ccm-${coinId}`;
        const widget = document.getElementById(elId);
        if (widget)
            return (widget.getAttribute('data-currencyid') || '0') === String(coinId);

        return false;
    }, [ coinId ]);

    const checkLoaded = useCallback(() => {

        if (isLoaded()) {
            setLoaded(true);
        }

    }, [ isLoaded ]);

    useEffect(() => {

        const interval = setInterval(checkLoaded, 1000);
        return () => clearInterval(interval);

    }, [ checkLoaded ]);


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
                    locale="en"
                />
            </Box>
        </Card>
    );
}
