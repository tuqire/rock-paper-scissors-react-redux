import React from 'react';
import { shallow } from 'enzyme';

import { GameStatus } from '../../../src/js/components/gameStatus';

import { PENDING, PLAYER, DRAW, COMP } from '../../../src/js/constants/game';
import { ROCK } from '../../../src/js/constants/moves';

describe('COMPONENTS: <GameStatus />', () => {
  it('should render self', () => {
    const enzymeWrapper = shallow(<GameStatus gameStatus={PENDING} />);

    expect(enzymeWrapper.find('div')).toHaveLength(1);
    expect(enzymeWrapper.find('h2.game-status')).toHaveLength(1);
    expect(enzymeWrapper.find('h5.game-counter')).toHaveLength(1);
    expect(enzymeWrapper.find('span.next-game-instructions')).toHaveLength(0);
    expect(enzymeWrapper.find('button.reset-game-btn')).toHaveLength(0);
  });

  it('should display player win and loss counters', () => {
    const enzymeWrapper = shallow(<GameStatus winCounter={5} lossCounter={5} />);
    expect(enzymeWrapper.find('.win-counter').text()).toBe('Win counter: 5');
    expect(enzymeWrapper.find('.loss-counter').text()).toBe('Loss counter: 5');
  });

  it('should display comp move', () => {
    const enzymeWrapper = shallow(<GameStatus gameStatus={PLAYER} compMove={ROCK} />);
    expect(enzymeWrapper.find('.comp-move').text()).toBe('rock');
  });

  it('should display reset game button after one game', () => {
    const resetGame = jest.fn();
    const enzymeWrapper = shallow(<GameStatus gameStatus={PLAYER} resetGame={resetGame} />);

    enzymeWrapper.find('.reset-game-btn').simulate('click');
    expect(resetGame).toHaveBeenCalledTimes(1);
  });

  describe('should display correct game state description', () => {
    it('display game state when game state is PENDING', () => {
      const enzymeWrapper = shallow(<GameStatus gameStatus={PENDING} />);
      expect(enzymeWrapper.find('h2.game-status').text()).toBe('Click an icon to make a move');
    });

    it('display game state when game state is PLAYER', () => {
      const enzymeWrapper = shallow(<GameStatus gameStatus={PLAYER} compMove={ROCK} />);
      expect(enzymeWrapper.find('h2.game-status').find('span').first().text()).toBe('Computer picked rock, you won!');
    });

    it('display game state when game state is COMP', () => {
      const enzymeWrapper = shallow(<GameStatus gameStatus={COMP} compMove={ROCK} />);
      expect(enzymeWrapper.find('h2.game-status').find('span').first().text()).toBe('Computer picked rock, you lost :(');
    });

    it('display game state when game state is DRAW', () => {
      const enzymeWrapper = shallow(<GameStatus gameStatus={DRAW} compMove={ROCK} />);
      expect(enzymeWrapper.find('h2.game-status').find('span').first().text()).toBe('Computer picked rock, It was a draw');
    });

    it('display next game instructions when game state is not PENDING', () => {
      const enzymeWrapper = shallow(<GameStatus gameStatus={DRAW} compMove={ROCK} />);
      expect(enzymeWrapper.find('span.next-game-instructions').text()).toBe('Click icon to play again');
    });
  });
});
