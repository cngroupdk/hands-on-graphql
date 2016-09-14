import {
  cachedFetchAllResultsFromSWAPIByURLArray,
  cachedFetchJSONFromSWAPIAllResults,
  cachedFetchObjectFromSWAPIById,
} from './swapi.js';
import { planetImage } from './planet-image.js';

export { swapiURLtoId } from './swapi.js';

export const getAllFilmsPromise = () => cachedFetchJSONFromSWAPIAllResults('/films');
export const getAllPlanetsPromise = () => cachedFetchJSONFromSWAPIAllResults('/planets');
export const getPlanetPormiseById = (id) => cachedFetchObjectFromSWAPIById('/planets', id);
export const getFilmPromiseById = (id) => cachedFetchObjectFromSWAPIById('/films', id);

export function mapIdsToObjectsPromise(ids) {
  if (!ids) { return null; }
  return cachedFetchAllResultsFromSWAPIByURLArray(ids);
};

export function imageForPlanet(planet, args) {
  const { size, rotation } = args;
  const { name, surface_water } = planet;
  return planetImage({
    size,
    rotation,
    name,
    water: surface_water,
  });
}

// import { FILMS, PLANETS } from '../mockdata.js';
// export const getAllFilms = () => FILMS;
// export const getAllPlanets = () => PLANETS;
// export const getFilmById = (id) => findObejctById(FILMS, id);
// export const getPlanetById = (id) => findObejctById(PLANETS, id);

// function mapPlanetIdsToObjects(ids) {
//   return (ids || []).map(getPlanetById);
// };

// function mapFilmIdsToObjects(ids) {
//   return (ids || []).map(getFilmById);
// };

// function findObejctById(array, objectId) {
//   return array.find(({ id }) =>
//     id == objectId
//   );
// };
