import React from 'react';
import { connect } from 'react-redux';

import { ROCK, PAPER, SCISSORS } from '../constants/moves';
import Moves from '../components/moves';
import GameStatus from '../components/gameStatus';
import { playerMove } from '../actions/moves';

class RockPaperScissors extends React.Component {
  render () {
    return (
      <div className='rock-paper-scissors'>
        <div className='container'>
          <h1>Rock, Paper, Scissors Demo</h1>
          <Moves />
          <GameStatus />
        </div>
      </div>
    );
  }
}

export default RockPaperScissors;
