'use-client';

// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { useSettingsContext } from 'src/contexts/SettingsContext';

CoinConverter.propTypes = {
    coinId: PropTypes.string.isRequired,
    toCurrency: PropTypes.string.isRequired
}

export default function CoinConverter(props) {

    const { themeMode, language } = useSettingsContext();
    const { coinId, toCurrency } = props;

    return (
        <coingecko-coin-converter-widget
            coin-id={coinId || "bitcoin"}
            currency={toCurrency || "usd"}
            locale={language}
            background-color={themeMode === "dark" ? "#1e1e1e" : "#ffffff"}
            font-color={themeMode === "dark" ? "#ffffff" : "#000000"}
        />
    );
}
