import { useEffect, useState } from "react";
import { Card } from '@mui/material';

import Page from 'src/components/Page';
import VirtualizedSingleAutoComplete from "src/components/selectors/VirtualizedDataSingleValue";
import CoinConverter from "./ConverterWidget";

export default function CoinConverterPage() {

    const [ coins, setCoins ] = useState<string[]>([]);
    const [ selectedCoin, setSelectedCoin ] = useState("a-hunters-dream");

    useEffect(() => {

        const getCoins = async () => {

            const coinList = await getCoinList();
            const options = coinList.map((coin: any) => coin.id);
            setCoins(options);
        }

        getCoins();

    }, []);

    const getCoinList = async (

    ) => {
        const response = await fetch(
            "https://api.coingecko.com/api/v3/coins/list"
        );
        const data = await response.json();
        return data;
    }

    return (
        <Page title="Coin Converter" sx={{ height: 1 }}>
            <Card sx={{ p: 3 }}>
                <VirtualizedSingleAutoComplete
                    label="Select a coin"
                    options={coins}
                    value={selectedCoin}
                    onChange={(newValue) => {
                        setSelectedCoin(newValue);
                    }}
                />
                <br />
                < CoinConverter
                    coinId={selectedCoin}
                    toCurrency={"usd"}
                />
            </Card>
        </Page>
    );
}