export interface Platform {
    id: string;
    name: string;
    symbol: string;
    slug: string;
    token_address: string;
};

export interface Coin {
    id: string;
    name: string;
    symbol: string;
    slug: string;
    rank: number;
    usd_price: number;
    market_cap_usd: number;
    max_supply: number;
    circulating_supply: number;
    total_supply: number;
    icon: string;
    platform: Platform;
}