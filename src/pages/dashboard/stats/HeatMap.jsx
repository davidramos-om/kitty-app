import { memo } from 'react';
import { useSettingsContext } from 'src/contexts/SettingsContext';

function HeatMap() {

    const { language } = useSettingsContext();

    return (
        <coingecko-coin-heatmap-widget
            id="coin-heatmap"
            height="800"
            locale={language}
            style={{ padding: '20px' }}
        />
    );
}

export default memo(HeatMap);