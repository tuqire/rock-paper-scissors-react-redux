import React from 'react';
import { shallow } from 'enzyme';

import Move from '../../../src/js/components/move';

import { ROCK } from '../../../src/js/constants/moves';

describe('COMPONENTS: <Move />', () => {
  it('should render self', () => {
    const enzymeWrapper = shallow(<Move />);

    expect(enzymeWrapper.find('div')).toHaveLength(2);
    expect(enzymeWrapper.find('div').first().hasClass('col-sm-4')).toBe(true);
    expect(enzymeWrapper.find('div').at(1).hasClass('move')).toBe(true);
  });

  it('should add prop className to correct element', () => {
    const enzymeWrapper = shallow(<Move className='test-class' />);

    expect(enzymeWrapper.find('div').at(1).hasClass('test-class')).toBe(true);
  });

  it('should use prop move display name as text', () => {
    const enzymeWrapper = shallow(<Move move={ROCK} />);

    expect(enzymeWrapper.text()).toBe('rock');
  });

  it('should add prop move to onClick as argument', () => {
    const onClick = jest.fn();
    const enzymeWrapper = shallow(<Move move={ROCK} onClick={onClick} />);

    enzymeWrapper.find('.move').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith(ROCK);
  });

  it('should not call onClick when disabled', () => {
    const onClick = jest.fn();
    const enzymeWrapper = shallow(<Move disabled={true} onClick={onClick} />);

    enzymeWrapper.find('.move').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(0);
  });
});
