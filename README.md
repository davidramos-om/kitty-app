# Inspired by : 
1. [Shiba Swap](https://shibaswap.com/#/)
2. [Pancake Swap](https://pancakeswap.finance/swap)
3. [Venus Protocol](https://app.venus.io/dashboard)

# Under development

## Purpose
Have fun and practice using web3 libraries, connect to wallet and blockchains, use trading charts

## Built With
1. [React](https://reactjs.org/)
2. [CoinGecko API](https://www.coingecko.com/en/api)
3. [CoinMarketCap API](https://coinmarketcap.com/api/)
4. [Apollo GraphQL](https://www.apollographql.com/docs/react/)
5. [NestJS Backend](https://nestjs.com/)
6. [Material UI](https://mui.com/)
7. [Framer Motion](https://www.framer.com/motion/)


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
npm install -g gh-pages --save-dev
npm run build
npm run deploy
```