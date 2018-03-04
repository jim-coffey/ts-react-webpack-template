import * as React from 'react';
import { shallow } from 'enzyme';

import { HelloProps, Hello } from '../Hello';

describe('<Hello />', () => {
  it('renders', () => {
    const expectedText = 'Hello, from Wibble and Wobble!';
    const testProps : HelloProps = {
      compiler: 'Wibble',
      framework: 'Wobble'
    }
    const Component = shallow(<Hello {...testProps} />);

    expect(Component.find('.app-heading').first().text()).toEqual(expectedText);
  });
});
