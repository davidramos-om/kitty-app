import useSettings from "src/hooks/useSettings";

export default function HeatMap() {

    const { language } = useSettings();

    return (
        <>
            <coingecko-coin-heatmap-widget
                id="coin-heatmap"
                height="800"
                locale={language}
                style={{ padding: '20px' }}
            />
        </>
    );
}