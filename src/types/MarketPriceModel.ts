
export type MarketPriceModel = {
    id: string;
    symbol: string;
    name: string;
    current_price: number;
    image: string;
    market_cap: number;
    market_cap_rank: number;
    p_change_24h: number;

    ath: number;
    ath_24h: number;

    atl: number;
    atl_24h: number;

}