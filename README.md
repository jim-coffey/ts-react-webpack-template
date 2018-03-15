# Typescript React & Webpack Template

Barebones template of a React application written with Typescript, and built with Webpack.

Develop via `npm start` which starts a webpack-dev-server with hot reloading.

Bundles JS & CSS to one bundle, and auto includes in the HTML template via Webpack HTML plugin.

Includes Jest & Enzyme for testing via `ts-jest`

Includes linting via `ts-lint`

**NOTE** Coming from airbnb linting, I pretty much hate the ts-lint recommended rules
(Mostly around quotes and trailing commas)

## Recommended Install

`yarn install`

## Run and Build commands

* production build - `npm run build`
* development build - `npm run dev`
* start webpackserver - `npm start` - access at http://localhost:8080/

## Test

* lint and jest - `npm test`
* lint - `npm run lint`
* jest - `npm run jest`
