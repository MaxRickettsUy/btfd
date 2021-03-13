<p align="center">
  <a alt="btfd" target="_blank"><img width=300 height=300 src="ui/public/btfd1.png"/></a>
</p>



# BTFD ![Node.js CI](https://github.com/MaxRickettsUy/btfd/actions/workflows/node.js.yml/badge.svg)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [React Electron](https://github.com/MaxRickettsUy/react-electron).

### Install [Mongodb](https://docs.mongodb.com/manual/installation/)
### Install [NodeJs](https://nodejs.org/en/https://docs.mongodb.com/manual/installation/)
### Install [Docker](https://docs.docker.com/engine/install/)
### Install [Docker Compose](https://docs.docker.com/compose/install/)

Claim API Key from [Alpha Advantage](https://www.alphavantage.co/support/#api-key) and set `ALPHA_ADVANTAGE_API_KEY` in `backend/.env`
<br/>
Claim API Key from [CoinMarketCap](https://coinmarketcap.com/api/) and set `COIN_MARKET_CAP_API_KEY` in `backend/.env`

## To start application in browser with docker-compose

### From project directory
#### `docker-compose build`
#### `docker-compose up`
#### Open in browser at `localhost:8000`

## To start application as Electron application or browers with npm

### From `/backend`
#### `npm install`
#### `npm start` or `node server.js`

### From `/ui`
#### `npm install`
#### `npm run start:electron` (start as Electron app)
#### `npm run start` (start in browser at http://localhost:3000)

## Same Available Scripts from Create React App

## Env variables
- ALPHA_ADVANTAGE_API_KEY=(see above)
- COIN_MARKET_API_KEY=(see above)
- PORT=(ex. 5001)
- MONGO_ATLAS(mongo atlas connection string) 
- NODE_ENV=(ex. staging)
- JWT_SECRET=(a long secret string)
