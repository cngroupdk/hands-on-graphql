import Relay from 'react-relay';

import { PlanetDetailContainer } from '../Planets/PlanetDetail.js';
import { createDefaultRenderer } from '../DefaultRenderer';

class PlanetDetailRoute extends Relay.Route {
  static routeName = 'PlanetDetailRoute';
  static queries = {
    planet: () => Relay.QL`query {
      planet: node(id: $planetId)
    }`,
  };
}

export const PlanetDetailPageRenderer = createDefaultRenderer({
  Container: PlanetDetailContainer,
  getQueryConfig(that) {
    const { params } = that.props;
    const { planetId } = params || {};

    return new PlanetDetailRoute({ planetId });
  },
});
