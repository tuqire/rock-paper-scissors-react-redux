import React from 'react';
import { Provider } from 'react-redux';

import sassCSS from '../../sass/main.scss';

import RockPaperScissors from './rockPaperScissors';

export default class Root extends React.Component {
  render () {
    return (
      <Provider store={this.props.store}>
        <RockPaperScissors />
      </Provider>
    )
  }
}
