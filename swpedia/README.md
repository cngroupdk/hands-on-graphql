# SWpedia Web Client

## Requirements

- node.js v6.1.1 or later
  - use of [nvm](https://github.com/creationix/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows) is suggested

## Install

```
npm install
```

## Run

```
npm run watch
```

Open [localhost:3000/](http://localhost:3000/).

## Useful Links

- [swapi.co/api/](http://swapi.co/api/)
- [graphql-swapi.parseapp.com/](http://graphql-swapi.parseapp.com/)
- [GraphQL](http://graphql.org/)
- [Relay](https://facebook.github.io/relay/)

## Useful Snippets


```JavaScript
fetch('http://localhost:8844/graphql', {
  method: 'POST',
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  body: "query=query { viewer { films { title, id } } }"
}).then(
  res => res.text()
).then(
  text => console.log('data:', JSON.parse(text))
);
```
