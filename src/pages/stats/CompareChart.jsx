import useSettings from "src/hooks/useSettings";

export default function HeatMap() {

    const { language } = useSettings();

    return (
        <coingecko-coin-compare-chart-widget
            coin-ids="bitcoin,eos,ethereum,litecoin,ripple,ethereum"
            currency="usd"
            locale={language}
            style={{ padding: '20px' }}
        />
    );
}