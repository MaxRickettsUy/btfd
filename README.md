<p align="center">
  <a alt="btfd" target="_blank"><img width=300 height=300 src="ui/public/btfd1.png"/></a>
</p>



# BTFD ![Node.js CI](https://github.com/MaxRickettsUy/btfd/actions/workflows/node.js.yml/badge.svg)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [React Electron](https://github.com/MaxRickettsUy/react-electron).

### Install [Mongodb](https://docs.mongodb.com/manual/installation/)
### Install [NodeJs](https://nodejs.org/en/https://docs.mongodb.com/manual/installation/)
### Install [Docker](https://docs.docker.com/engine/install/)
### Install [Docker Compose](https://docs.docker.com/compose/install/)

Make sure to check out the [backend README for more configuration instructions](https://github.com/MaxRickettsUy/btfd/blob/main/backend/README.md).

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
