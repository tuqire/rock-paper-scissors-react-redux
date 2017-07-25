import React from 'react';
import { connect } from 'react-redux';

import { ROCK, PAPER, SCISSORS } from '../constants/moves';
import Move from './move';
import { playerMoved } from '../actions/moves';

const MOVES = [ROCK, PAPER, SCISSORS];

export class Moves extends React.Component {
  render () {
    const moveEls = MOVES.map((move, i) => {
      return (
        <Move key={i}
          className={this.props.playerMove === move ? 'selected' : ''}
          disabled={this.props.disabled}
          onClick={this.props.playerMoved}
          move={move}
        />
      )
    });

    return (
      <div className='row'>
        <div className='moves'>
          {moveEls}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({
  game: { disabled },
  moves: { player }
}) => ({ playerMove: player, disabled });

const mapDispatchToProps = dispatch => ({
  playerMoved: move => {
    dispatch(playerMoved(move))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Moves);
