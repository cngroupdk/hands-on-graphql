import Relay from 'react-relay';

import { FilmDetailContainer } from '../Films/FilmDetail.js';
import { createDefaultRenderer } from '../DefaultRenderer';

class FilmDetailRoute extends Relay.Route {
  static routeName = 'FilmDetailRoute';
  static queries = {
    film: () => Relay.QL`query {
      film: node(id: $filmId)
    }`,
  };
}
export const FilmDetailPageRenderer = createDefaultRenderer({
  Container: FilmDetailContainer,
  getQueryConfig(that) {
    const { params } = that.props;
    const { filmId } = params || {};

    return new FilmDetailRoute({ filmId });
  },
});
