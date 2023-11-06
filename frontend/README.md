# CRYPTO EXCHANGE

Crypto Exchange is a progressive web app that inspired by [Binance](https://www.binance.com/en/markets) and was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## DEMO

Deployed using Vercel with automatic deployment per each changes in the master branch. Try out the demo [here](https://crypto-exchange-kohl.vercel.app/).

## API

This project is using CoinGecko API for getting the data. You can read the official documentation [here](https://www.coingecko.com/en/api/documentation).

## Tech Stacks

The tech stacks that used are:

- React (17+)
- Typescript
- [React-query](https://react-query.tanstack.com/)
- [Tailwind css](https://tailwindcss.com/)
- Jest (testing)

## How to use the app

This project is using `yarn` so make sure you have `yarn` installed first.

- git clone the app
- cd to `crypto-exchange`
- yarn
- yarn start
- Open [http://localhost:3000](http://localhost:3000) in the browser

## Important Scripts

The base scripts are the same as defined in the CRA app but with some modifications.
These are some important scripts that you need to aware of:

### `yarn start`

Using concurrently to start the project using `react-scripts-start` and can detect changes to build Tailwind CSS at the same time.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build:css`

Ask Tailwind to build the css and generate the output in the `src/style/tailwind.css`.
The generated folder is automatically ignored by `git`.

### `yarn build:watch`

Same script as above but it watching for any changes that we do during the development.
This script is automatically run when trigger `yarn start`.

## Screenshots

This are the screenshots of the app:

- Home
  <img width="1440" alt="Screen Shot 2022-03-07 at 13 21 16" src="https://user-images.githubusercontent.com/42708035/156979017-10f1b7f4-7859-43d7-965c-fb7682abd872.png" style="border: 1px solid black">
  <img width="1440" alt="Screen Shot 2022-03-07 at 13 28 47" src="https://user-images.githubusercontent.com/42708035/156979723-4329c3b9-dbb7-4c3e-89bb-2884becd0537.png" style="border: 1px solid black">

- Detail
  <img width="1440" alt="Screen Shot 2022-03-07 at 13 36 33" src="https://user-images.githubusercontent.com/42708035/156980508-57d3f66b-054e-4c0e-8066-a7ec8071d16b.png" style="border: 1px solid black">
  <img width="1440" alt="Screen Shot 2022-03-07 at 13 34 50" src="https://user-images.githubusercontent.com/42708035/156980343-5c3cb401-ad69-46d0-9998-f62702691068.png" style="border: 1px solid black">

- Performance (Lighthouse)
  <img width="1440" alt="Screen Shot 2022-03-07 at 13 39 19" src="https://user-images.githubusercontent.com/42708035/156980852-c8bfb482-c067-4049-9349-77f88f9c8e45.png" style="border: 1px solid black">

- Fallback with skeleton when loading
  <img width="1440" alt="Screen Shot 2022-03-07 at 08 33 52" src="https://user-images.githubusercontent.com/42708035/156981561-6207088b-0473-4256-a439-51b99d623cb9.png" style="border: 1px solid black">

- Route not found
  <img width="1440" alt="Screen Shot 2022-03-07 at 14 16 32" src="https://user-images.githubusercontent.com/42708035/156985366-1db0fe73-731f-4eae-9478-8536190ca02f.png" style="border: 1px solid black">
