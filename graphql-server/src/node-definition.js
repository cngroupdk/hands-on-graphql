import {
  fromGlobalId,
  nodeDefinitions,
} from 'graphql-relay';

import {
  getFilmPromiseById,
  getPlanetPormiseById,
} from './data';

const __NODE_TYPE_KEY__ = '__NODE_TYPE_KEY__';

function addNodeType(node, nodeType) {
  if (!node) {
    return node;
  }

  return {
    ...node,
    [__NODE_TYPE_KEY__]: nodeType,
  }
}

function getNodeAndType(nodeWithType) {
  const {
    [__NODE_TYPE_KEY__]: nodeType,
    node,
  } = nodeWithType;

  return { nodeType, node };
}

function resolveNodeData(globalId) {
  const { FilmType } = require('./types/film.js');
  const { PlanetType } = require('./types/planet.js');

  const getNodeByIdFunctions = {
    [FilmType.name]: getFilmPromiseById,
    [PlanetType.name]: getPlanetPormiseById,
  };

  const {
    type: nodeType,
    id: nodeLocalId,
  } = fromGlobalId(globalId);

  const getNodeById = getNodeByIdFunctions[nodeType] || (() => null);

  return getNodeById(nodeLocalId).then(
    node => addNodeType(node, nodeType)
  );
}

function resolveNodeType(nodeWithType) {
  const { FilmType } = require('./types/film.js');
  const { PlanetType } = require('./types/planet');

  const { nodeType, node } = getNodeAndType(nodeWithType);

  return {
    [FilmType.name]: FilmType,
    [PlanetType.name]: PlanetType,
  }[nodeType];
}

const {
  nodeInterface,
  nodeField,
} = nodeDefinitions(resolveNodeData, resolveNodeType);

export { nodeInterface, nodeField };
