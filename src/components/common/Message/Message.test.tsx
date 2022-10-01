import { render } from '@testing-library/react';
import { Message } from './index';

describe('<Message />', () => {
  test('render component', () => {
    const component = render(<Message text='error' />);
    component.getByText('error');
  });
});
