
import { GO_LOGIN, GO_FORGOT, GO_RECOVER } from './ActionTypes'

export const goLogin = () => ({
  type: GO_LOGIN
})

export const goForgot = () => ({
  type: GO_FORGOT
})

export const goRecover = () => ({
  type: GO_RECOVER
})

export const saveName = () => ({
  type: SAVE_NAME
})

export const savePassword = () => ({
  type: SAVE_PASSWORD
})
