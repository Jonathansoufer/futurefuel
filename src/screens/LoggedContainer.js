import React from 'react'
import { Redirect } from 'react-router-dom'
import { FormControl, FormGroup, FormLabel, FormText } from 'react-bootstrap'
import styled from 'styled-components'

import Card from '../components/Card'
import ForgotLogo from '../assets/forgotLogo.svg'
import StyledButton from '../components/Button'
import { GO_LOGIN, GO_FORGOT } from '../store/ActionTypes'

import handleCard from '../components/HandleCards'

const RecoverContainer = ({ appState, handleAction, handleSubmitAction }) => {
  return appState === GO_FORGOT ? (
    <Redirect to={{ pathname: '/forgot' }} />
  ) : (
      <Card>
        <img alt='' src={ForgotLogo} style={{ height: '20%', width: '15%' }} />
        <StyledTitle>Wellcome to your workplace</StyledTitle>
        <StyledText>Set you account password.</StyledText>
        <StyledForm>
          <StyledButton variant='primary' type='submit' onClick={handleSubmitAction}>
            Request new password
        {appState === GO_FORGOT ? (<Redirect to='/forgot' />) : null}
          </StyledButton>
          <StyledFormText onClick={handleAction}>
            Go Back
        {appState === GO_LOGIN ? (<Redirect to='/' />) : null}
          </StyledFormText>
        </StyledForm>
      </Card>
    )
}

const StyledForm = styled.form`
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: flex-start;
      padding-top: 30px;
    `
const StyledFormLabel = styled(FormLabel)`
    font-family: 'Lato', sans-serif;
    color:#606060;
    font-size:14px;
    padding-left:15px;
    `

const StyledFormText = styled(FormText)`
    font-family: 'Lato', sans-serif;
    color:#4B85E5;
    font-size:14px;
    font-weight: 700;
    padding-top:10px;
    padding-left:130px;
    padding-right:100px;
:hover {
      color: #6998E7;
      cursor: pointer;
      }
    `

const StyledControl = styled(FormControl)`
      font-family: 'Lato', sans-serif;
      font-size:14px;
      margin: 1em;
      background-color: #FFFFFF;
      padding: 0.25em 1em;
      height:45px;
      width:250px;
:focus {
        border-color: #4B85E5;
        border-width:thin;
        outline: 0 none;
      }
    `

const StyledTitle = styled.h1`
    font-family: 'Lato', sans-serif;
    color:#393939;
    font-size:18px;
    `

const StyledText = styled.p`
    font-family: 'Lato', sans-serif;
    font-size:16px;
    text-align:center;
    color:#606060;
    padding-left: 15%;
    padding-right:15%;
    `

export default handleCard(RecoverContainer)
