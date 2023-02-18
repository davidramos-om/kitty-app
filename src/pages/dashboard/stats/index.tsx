import { useState } from "react";
import { Container, Tabs, Tab, Stack } from '@mui/material';

import Page, { DashboardLayout } from 'src/components/Page';
import Iconify from "src/components/iconify";

import PriceTicker from './PriceTicker';
import HeatMap from './HeatMap';
import CompareChart from './CompareChart';

StatsPage.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

export default function StatsPage() {

  const [ value, setValue ] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => setValue(newValue);

  return (
    <Page title="Crypto Stats">
      <Stack alignContent="center" alignItems="center" >
        <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
          <Tab icon={<Iconify icon="arcticons:tickertape" width={24} height={24} />} label="Price Ticker" iconPosition="top" />
          <Tab icon={<Iconify icon="carbon:heat-map" width={24} height={24} />} label="Coin Heatmap" iconPosition="top" />
          <Tab icon={<Iconify icon="la:chart-line" width={24} height={24} />} label="Compare Chart" iconPosition="top" />
        </Tabs>
      </Stack>
      <Container
        maxWidth={false}
        sx={{
          marginTop: 3,
          borderRadius: 2,
          borderColor: 'divider',
          borderWidth: 1,
          borderStyle: 'solid',
          backgroundColor: 'background.default',
        }}
      >
        {value === 0 && <PriceTicker />}
        {value === 1 && < HeatMap />}
        {value === 2 && < CompareChart />}
      </Container>
    </Page >
  );
}
