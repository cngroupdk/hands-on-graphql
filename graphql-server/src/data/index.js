import {
  cachedFetchAllResultsFromSWAPIByURLArray,
  cachedFetchJSONFromSWAPIAllResults,
  cachedFetchObjectFromSWAPIById,
} from './swapi.js';
import { planetImage } from './planet-image.js';











// ----------------

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
