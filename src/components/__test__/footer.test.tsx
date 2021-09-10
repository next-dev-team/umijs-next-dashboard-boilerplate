/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import React from 'react';
import Footer from '../Footer';

test('it should render correctly', () => {
  const app = render(<Footer />);
  expect(app.asFragment()).toMatchSnapshot();
});
