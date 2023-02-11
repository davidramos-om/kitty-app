import { useSettingsContext } from 'src/contexts/SettingsContext';

export default function CryptoMarquee() {

    const { themeMode, language } = useSettingsContext();

    return (
        <coingecko-coin-price-marquee-widget
            coin-ids="bitcoin,ethereum,a-hunters-dream,shiba-predator,childhoods-end,solana,binance-usd,cardano,shiba-inu,dogecoin,ripple,polkadot,matic-network"
            currency="usd"
            background-color={themeMode === "dark" ? "#1e1e1e" : "#ffffff"}
            font-color={themeMode === "dark" ? "#ffffff" : "#000000"}
            locale={language}
            style={{
                position: "fixed",
                zIndex: 9999,
                top: 0,
            }}
        />
    );
}