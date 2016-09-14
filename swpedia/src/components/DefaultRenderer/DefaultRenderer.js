import React, { Component } from 'react';
import Relay from 'react-relay';

import { Loading } from './Loading.js';
import { ShowError } from './ShowError.js';
import { SmallLoading  } from './SmallLoading.js';

export function createDefaultRenderer({ getQueryConfig, ...rendererProps }) {
  class DefaultRenderer extends Component {
    render() {
      const { Container } = rendererProps;
      const queryConfig = getQueryConfig(this);

      return (
        <Relay.Renderer
          forceFetch
          queryConfig={queryConfig}
          environment={Relay.Store}
          render={({done, error, props, retry, stale}) => {
            if (error) {
              return (
                <ShowError error={error} retry={retry}/>
              );
            }

            if (!props) {
              return <Loading />;
            }

            return (
              <div>
                {!done && <SmallLoading />}
                <Container {...props}/>
              </div>
            );
          }}
          {...rendererProps}
        />
      );
    }
  }
  return DefaultRenderer;
}
