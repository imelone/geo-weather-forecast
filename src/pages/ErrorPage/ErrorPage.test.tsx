import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { ErrorPage } from './index';

describe('<ErrorPage />', () => {
  test('renders component', () => {
    const component = render(
      <BrowserRouter>
        <ErrorPage title='test title' description='test description' buttonText='button text' />
      </BrowserRouter>
    );
    component.getByText('test title');
    component.getByText('test description');
    component.getByText('button text');
  });
});
