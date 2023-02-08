
export default function HeatMap() {

    return (
        <coingecko-coin-compare-chart-widget
            coin-ids="bitcoin,eos,ethereum,litecoin,ripple,ethereum"
            currency="usd"
            locale="en"
            style={{ padding: '20px' }}
        />
    );
}