import { memo } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import { Box, Card, Typography } from '@mui/material';
import { useSettingsContext } from 'src/contexts/SettingsContext';

MarketCapWidget.propTypes = {
    coinId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

function MarketCapWidget({ coinId, title }) {

    const { language } = useSettingsContext();

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


export default memo(MarketCapWidget);