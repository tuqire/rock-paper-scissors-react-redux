import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';

import RockPaperScissors from '../../../src/js/components/rockPaperScissors';

import { ROCK } from '../../../src/js/constants/moves';

describe('COMPONENTS: <RockPaperScissors />', () => {
  it('should render self', () => {
    const enzymeWrapper = shallow(<RockPaperScissors />);

    expect(enzymeWrapper.find('div')).toHaveLength(2);
    expect(enzymeWrapper.find('div').first().hasClass('rock-paper-scissors')).toBe(true);
    expect(enzymeWrapper.find('div').at(1).hasClass('container')).toBe(true);
    expect(enzymeWrapper.find('h1')).toHaveLength(1);
    expect(enzymeWrapper.find('Connect(Moves)')).toHaveLength(1);
    expect(enzymeWrapper.find('Connect(GameStatus)')).toHaveLength(1);
  });
});
