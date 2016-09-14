# Hands on GraphQL Workshop Repo

See [client README](./swpedia/README.md) and [server README](./graphql-server/README.md) for more info.

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
