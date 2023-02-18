'use client';

import { useEffect, useState } from "react";
import { Stack, useTheme } from "@mui/material";
import { m } from "framer-motion";

import { marqueeVariants } from "src/components/animate/variants/marquee";
// import { GET_MARKET_PRICE_GQL } from 'src/graphql/queries';
// import gqlClient from 'src/graphql/client';
import { marketPrice } from 'src/services/market-fetch';

import { TokenData } from "./TokenData";
import { MarqueeBox } from "./MarqueeBox";

const tokenIds = 'bitcoin,ethereum,a-hunters-dream,shiba-predator,childhoods-end,solana,binance-usd,cardano,shiba-inu,dogecoin,ripple,polkadot,matic-network'.split(',');


const MapToken = (t: any) => {

    const mt: TokenData = {
        name: t.name || '',
        symbol: t.symbol || '',
        logo: t.image || '',
        percentage: t.p_change_24h || 0,
        price: t.current_price || 0,
        arrowDirection: t.p_change_24h > 0 ? 'up' : 'down',
    };

    return mt;
}

export function MarqueeLine() {

    const theme = useTheme();
    const bg = theme.palette.primary.lighter;
    const [ tokens, setTokens ] = useState<TokenData[]>([]);

    useEffect(() => {

        let active = true;

        const cb1 = async () => {

            try {

                // const { data } = await gqlClient.query({
                //     query: GET_MARKET_PRICE_GQL,
                //     errorPolicy: 'none',
                //     variables: {
                //         ids: tokenIds,
                //     },
                // });

                const data = await marketPrice(tokenIds);
                console.log(`🐛  -> 🔥 :  cb1 🔥 :  data`, data);


                if (!active)
                    return;

                setTokens(data.map(MapToken));
            }
            catch (error) {
                console.log('ERROR DURING GQL REQUEST', error);
            }
        }

        cb1();

        return () => {
            active = false;
        }

    }, []);

    return (
        <Stack
            id="marquee-line"
            spacing={0}
            zIndex={9999}
            sx={{
                position: "relative",
                width: "100vw",
                maxWidth: "100%",
                height: 32,
                overflowX: "hidden",
            }}
        >
            <m.div
                className="track"
                variants={marqueeVariants}
                animate="animate"
                style={{
                    position: 'absolute',
                    whiteSpace: 'nowrap',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                {(tokens || []).map((token: any) => (
                    <MarqueeBox
                        bgHoverColor={bg}
                        key={token.symbol}
                        token={token}
                    />
                ))}
            </m.div>
        </Stack>
    );
}