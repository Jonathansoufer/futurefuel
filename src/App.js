import React, { Component } from 'react'
import styled from 'styled-components'
import { Provider } from 'react-redux'
import Routes from './routes/Index'
import store from './store/Index'

import Header from './components/Header'

import logo from './assets/logo.png'

class App extends Component {
  render () {
    return (
      <Wrapper>
        <Header>
          <img alt='' src={logo} style={{ paddingLeft: '50px', height: '50px', width: '100px' }} />
        </Header>
        <Provider store={store}>
          <Routes />
        </Provider>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background:#F0F4F8;
  align-items: center;
`

export default App
