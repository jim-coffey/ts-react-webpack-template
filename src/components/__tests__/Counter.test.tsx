import * as React from 'react';
import { shallow } from 'enzyme';

import { ICounterProps, Counter } from '../Counter';

describe('<Counter />', () => {
  it('renders', () => {
    const startsFrom = 5;
    const testProps : ICounterProps = {
      startsFrom
    };

    const Component = shallow(<Counter {...testProps} />);

    expect(Component.find('button').first().text()).toEqual(startsFrom.toString());
  });

  it('increments when the button is clicked', () => {
    const startsFrom = 5;
    const testProps : ICounterProps = {
      startsFrom
    };

    const Component = shallow(<Counter {...testProps} />);
    Component.find('button').simulate('click');

    expect(Component.find('button').first().text()).toEqual((startsFrom + 1).toString());
  });
});
