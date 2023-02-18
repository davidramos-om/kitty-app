import { MarketPriceModel } from "src/types/MarketPriceModel";
import { HttpGet, QueryString } from "./api-fetch";


export async function marketPrice(ids: String[]): Promise<MarketPriceModel[]> {

    const params = {
        ids: ids.join(','),
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 100,
        sparkline: false,
    };

    const queryString = QueryString(params);
    const result = await HttpGet(`coins/markets?${queryString}`);
    const data = result?.data || null;


    if (Array.isArray(data)) {

        const list = result.map((coin: any) => {

            const item: MarketPriceModel = {
                id: coin.id || '',
                name: coin.name || '',
                symbol: coin.symbol || '',
                image: coin.image || '',
                current_price: coin.current_price || 0,
                market_cap: coin.market_cap || 0,
                market_cap_rank: coin.market_cap_rank || 0,
                p_change_24h: coin.price_change_percentage_24h || 0,
                ath: coin.ath || 0,
                ath_24h: coin.ath_change_percentage_24h || 0,

                atl: coin.atl || 0,
                atl_24h: coin.atl_change_percentage_24h || 0,
            };

            return item;
        });


        return list
    }

    return [];
}