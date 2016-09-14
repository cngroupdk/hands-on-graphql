import React from 'react';
import { ProgressBar } from 'react-bootstrap';

export const SmallLoading = () => (
  <ProgressBar
    label="Loading..."
    className="SmallLoading"
    active
    now={100}
  />
)
