import useSettings from "src/hooks/useSettings";

export default function CryptoMarquee() {

    const { themeMode } = useSettings();
    return (
        <coingecko-coin-price-marquee-widget
            coin-ids="bitcoin,ethereum,a-hunters-dream,shiba-predator,childhoods-end,solana,binance-usd,cardano,shiba-inu,dogecoin,ripple,polkadot,matic-network"
            currency="usd"
            background-color={themeMode === "dark" ? "#1e1e1e" : "#ffffff"}
            font-color={themeMode === "dark" ? "#ffffff" : "#000000"}
            locale="en"
        />
    );
}