import fetch from 'node-fetch';
import DataLoader from 'dataloader';

const SWAPI_ENDPOINT = 'http://swapi.co/api';

const swapiURLIdRegExp = new RegExp(/\/(\d+)\/$/);

const CACHE = {};

const swapiDataLoader = new DataLoader(fetchAllResultsFromSWAPIByURLArray, {
  cache: true,
});

export function swapiURLtoId(url) {
  if (!url) { return null };
  const matches = url.match(swapiURLIdRegExp);
  if (!matches || matches.length < 2) { return null; }

  return matches[1];
}

export async function cachedFetchJSONFromSWAPIAllResults(path) {
  const hitResults = CACHE[path];
  if (hitResults) { return hitResults; }

  const results = await fetchJSONFromSWAPIAllResults(path);
  CACHE[path] = results;
  return results;
}

export async function fetchObjectFromSWAPIById(path, id) {
  const data = await fetchJSONFromSWAPI(
    swapiURLFromPath(`${path}/${id}`)
  );
  return data;
}

export async function cachedFetchObjectFromSWAPIById(path, id) {
  return swapiDataLoader.load(swapiURLFromPath(`${path}/${id}`));
}

export function cachedFetchAllResultsFromSWAPIByURLArray(urlArray) {
  return swapiDataLoader.loadMany(urlArray);
}

export function fetchAllResultsFromSWAPIByURLArray(urlArray) {
  return Promise.all(urlArray.map(url =>
    fetchJSONFromSWAPI(url)
  ));
}

function swapiURLFromPath(path) {
  return `${SWAPI_ENDPOINT}${path}`;
}

async function fetchJSONFromSWAPIAllResults(path) {
  let nextURL = swapiURLFromPath(path);
  let allResults = [];

  while (nextURL) {
    const data = await fetchJSONFromSWAPI(nextURL);
    allResults = [...allResults, ...data.results];
    nextURL = data.next;
  }

  return allResults;
}

function fetchJSONFromSWAPI(url) {
  console.log('--- fetching:', url)
  return (
    fetch(url, {
      headers: {
        Accept: 'application/json'
      },
    })
    .then(response => response.text())
    .then(text => JSON.parse(text))
  );
}
