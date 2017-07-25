import React from 'react';
import { connect } from 'react-redux';

import { resetGame } from '../actions/game';
import { PENDING, PLAYER, DRAW, COMP } from '../constants/game';
import { getMoveDisplayName } from '../utils';

export class GameStatus extends React.Component {
  render() {
    return (
      <div>
        {this.getGameStatusText()}
        <h5 className='game-counter'>
          <span className='win-counter'>Win counter: {this.props.winCounter}</span>
          <span className='loss-counter'>Loss counter: {this.props.lossCounter}</span>
        </h5>
        {this.props.gameStatus !== PENDING ? <button className='btn btn-primary reset-game-btn' onClick={this.props.resetGame}>Reset Game</button> : null}
      </div>
    );
  }

  getGameStatusText() {
    const compMovePrefixText = this.getCompMovePrefixText();
    return (
      <h2 className='game-status'>
        {this.props.gameStatus === PENDING ? <span>Click an icon to make a move</span> : null}
        {this.props.gameStatus === PLAYER ? <span>{compMovePrefixText} you <span className='player-won'>won</span>!</span> : null}
        {this.props.gameStatus === COMP ? <span>{compMovePrefixText} you <span className='comp-won'>lost</span> :(</span> : null}
        {this.props.gameStatus === DRAW ? <span>{compMovePrefixText} It was a draw</span> : null}
        {this.props.gameStatus !== PENDING ? <span className='next-game-instructions'>Click icon to play again</span> : null}
      </h2>
    );
  }

  getCompMovePrefixText() {
    return <span>Computer picked <span className='comp-move'>{getMoveDisplayName(this.props.compMove)}</span>,</span>;
  }
}

const mapStateToProps = ({
  moves : {
    comp: compMove
  },
  game: {
    status: gameStatus,
    winCounter,
    lossCounter
  }
}) => ({
  compMove,
  gameStatus,
  winCounter,
  lossCounter
});

const mapDispatchToProps = dispatch => ({
  resetGame: move => {
    dispatch(resetGame())
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameStatus);
