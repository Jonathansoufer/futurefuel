import React, { Component } from "react";
import {
  GO_LOGIN,
  GO_FORGOT,
  GO_RECOVER,
  SAVE_NAME,
  SAVE_PASSWORD
} from '../store/ActionTypes'

import { connect } from 'react-redux'

function handleCard (Card) {
  class ComposedCardComponent extends Component {
    state = {
      appState: '',
      loginName: '',
      loginPassword: ''

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
          handleNameChange={this._handleNameChange}
          handlePasswordChange={this._handlePasswordChange}
        />
      );
    }
  }

  return ComposedCardComponent
}

function mapStateToProps (state) {
  return {
    loginName: state.loginName,
    loginPassword: state.loginPassword
  }
}

function mapDispatchToProps (dispatch) {
  return {
    _handleNameChange: () => dispatch({ type: 'SAVE_NAME' }),
    _handlePasswordChange: () => dispatch({ type: 'SAVE_PASSWORD' })
  }
}

export default handleCard
//export default connect(mapStateToProps, mapDispatchToProps)(handleCard)
