import { AdvancedRealTimeChart, Ticker } from "react-ts-tradingview-widgets";

import useSettingsContext from 'src/hooks/useSettings';
import Page, { DashboardLayout } from 'src/components/Page';

TradingPage.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

const symbols = [ {
  "proName": "BINANCE:BTCUSDT",
  "title": "BTC/USDT"
}, {
  "proName": "BINANCE:ETHUSDT",
  "title": "ETH/USDT"
},
{
  "proName": "MEX:CAWUSDT",
  "title": "CAW/USDT"
}
]

export default function TradingPage() {

  const { themeMode, language } = useSettingsContext();
  return (
    <Page
      title="Trade digital assets"
      height={600}
    // containerSx={{
    //   sx: {
    //     height: '600px',
    //   }
    // }}
    >
      <Ticker
        colorTheme={themeMode}
        symbols={symbols}
        locale={language as any}
      />
      <AdvancedRealTimeChart
        autosize
        locale={language as any}
        symbol="BINANCE:BTCUSDT"
        theme={themeMode}
      />
    </Page>
  );
}
