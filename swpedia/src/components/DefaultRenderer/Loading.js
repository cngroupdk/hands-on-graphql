import React from 'react';
import { Panel, ProgressBar } from 'react-bootstrap';

export const Loading = () => (
  <Panel>
    <h4><center>Loading...</center></h4>
    <ProgressBar active now={100}/>
  </Panel>
)
