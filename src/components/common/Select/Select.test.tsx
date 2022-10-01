import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Select } from './index';
import { ICity } from '../../../pages/Home/models';

describe('<Select />', () => {
  const dataMock: ICity[] = [{ description: 'Lima', value: { lat: -12.04, lon: -77.04 } }];
  const onChangeMock = jest.fn();

  test('renders component', () => {
    const component = render(<Select data={dataMock} handleChange={onChangeMock} />);
    expect(component.container.getElementsByTagName('select')).toHaveLength(1);
  });
});
