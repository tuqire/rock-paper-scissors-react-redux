import React from 'react';
import { shallow } from 'enzyme';

import { Moves } from '../../../src/js/components/moves';

import { ROCK } from '../../../src/js/constants/moves';

describe('COMPONENTS: <Moves />', () => {
  it('should render self', () => {
    const enzymeWrapper = shallow(<Moves />);

    expect(enzymeWrapper.find('div')).toHaveLength(2);
    expect(enzymeWrapper.find('div').first().hasClass('row')).toBe(true);
    expect(enzymeWrapper.find('div').at(1).hasClass('moves')).toBe(true);
    expect(enzymeWrapper.find('Move')).toHaveLength(3);
  });

  it('should send props through to all Move els', () => {
    const onClick = jest.fn();
    const enzymeWrapper = shallow(
      <Moves
        disabled={true}
        playerMoved={onClick}
      />
    );

    enzymeWrapper.find('Move').forEach(moveEl => {
      expect(moveEl.props().disabled).toBe(true);
      expect(moveEl.props().onClick).toBe(onClick);
    });
  });

  it('should add prop className `selected` to correct Move el', () => {
    const enzymeWrapper = shallow(<Moves playerMove={ROCK} />);

    enzymeWrapper.find('Move').forEach(moveEl => {
      if (moveEl.props().move === ROCK) {
        expect(moveEl.props().className).toBe('selected');
      }
    });
  });
});
