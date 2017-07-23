import React from 'react';

import { getMoveDisplayName } from '../utils/moves';

export default class Move extends React.Component {
  render() {
    return (
      <div className='col-sm-4'>
        <div className={`move ${getMoveDisplayName(this.props.move)} ${this.props.className}`} onClick={() => !this.props.disabled && this.props.onClick(this.props.move)}>{getMoveDisplayName(this.props.move)}</div>
      </div>
    );
  }
}
