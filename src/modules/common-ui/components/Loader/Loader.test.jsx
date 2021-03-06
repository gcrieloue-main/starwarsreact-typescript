import React from 'react';
import TestRenderer from 'react-test-renderer';

import { Loader } from '.';

it('renders correctly a loader component', () => {
  const testRenderer = TestRenderer.create(<Loader />);
  expect(testRenderer.toJSON()).toMatchSnapshot();
});
