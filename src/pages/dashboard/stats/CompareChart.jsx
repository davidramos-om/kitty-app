import { memo } from 'react';
import { useSettingsContext } from 'src/contexts/SettingsContext';

function CompareChart() {

    const { language } = useSettingsContext();

    return (
        <coingecko-coin-compare-chart-widget
            coin-ids="bitcoin,eos,ethereum,litecoin,ripple,ethereum"
            currency="usd"
            locale={language}
            style={{ padding: '20px' }}
        />
    );
}

export default memo(CompareChart);