import { Grid } from "@mui/material";
import MarketCapWidget from "./Widget";

const mcCoinIds = [
    {
        id: 'bitcoin',
        name: 'Bitcoin',
    },
    {
        id: 'ethereum',
        name: 'Ethereum',
    },
    {
        id: 'a-hunters-dream',
        name: 'CAW',
    },
    {
        id: 'shiba-predator',
        name: 'QOM',
    },
    {
        id: 'childhoods-end',
        name: 'O',
    },
    {
        id: 'solana',
        name: 'Solana',
    },
    {
        id: 'binancecoin',
        name: 'Binance Coin',
    },
    {
        id: 'çardano',
        name: 'Cardano',
    },
    {
        id: 'dogecoin',
        name: 'Dogecoin',
    },
    {
        id: 'shiba-inu',
        name: 'Shiba Inu',
    },
    {
        id: 'ripple',
        name: 'XRP',
    },
    {
        id: 'polkadot',
        name: 'Polkadot',
    },
    {
        id: 'matic-network',
        name: 'Polygon',
    }
];

export default function PriceTicker() {


    return (
        <Grid container padding={2} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {mcCoinIds.map((coin) => (
                <Grid item xs={12} md={6} key={coin.id} >
                    <MarketCapWidget
                        coinId={coin.id}
                        title={coin.name}
                    />
                </Grid>
            ))}
        </Grid>
    );
}