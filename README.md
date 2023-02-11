# Inspired by : 
1. [Shiba Swap](https://shibaswap.com/#/)
2. [Pancake Swap](https://pancakeswap.finance/swap)
3. [Venus Protocol](https://app.venus.io/dashboard)

# Under development

## Purpose
Have fun and practice using web3 libraries, connect to wallet and blockchains, use trading charts

## Built With
- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Apollo GraphQL](https://www.apollographql.com/docs/react/)
- [NestJS Backend](https://nestjs.com/)
- [Material UI](https://mui.com/)
- [CoinGecko API](https://www.coingecko.com/en/api)
- [CoinMarketCap API](https://coinmarketcap.com/api/)
- [Framer Motion](https://www.framer.com/motion/)


## Installation

```bash
$ npm install
```

## Publishing

package.json

```json
"homepage": ".",
{
  "scripts": {
    "predeploy": "rm -rf build && rm -rf node_modules/.cache/gh-pages && npm run build",
        "deploy": "gh-pages -d build"
  }
}
```

```bash
yarn add gh-pages --dev
yarn run deploy
```