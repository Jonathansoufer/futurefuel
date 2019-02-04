import React, { Component } from "react";
import {
  GO_LOGIN,
  GO_FORGOT,
  GO_RECOVER,
  GO_LOGGED
} from '../store/ActionTypes'

function handleCard (Card) {
  class ComposedCardComponent extends Component {
    state = {
      appState: ''
    }

    _handleLogin = () => {
      this.setState(
        {
          appState: GO_LOGIN
        }
      )
    }

    _handleForgot = () => {
      this.setState(
        {
          appState: GO_FORGOT
        }
      )
    }

    _handleRecover = () => {
      this.setState(
        {
          appState: GO_RECOVER
        }
      )
    }

    render () {
      return (
        <Card
          {...this.props}
          appState={this.state.appState}
          handleLoginAction={this._handleLogin}
          handleAction={this._handleForgot}
          handleSubmitAction={this._handleRecover}
        />
      );
    }
  }

  return ComposedCardComponent
}

export default handleCard
