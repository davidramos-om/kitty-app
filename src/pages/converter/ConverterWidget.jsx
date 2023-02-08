import useSettings from "src/hooks/useSettings";

export default function CoinConverter({ coinId, toCurrency }) {

    const { themeMode, language } = useSettings();

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