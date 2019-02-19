export default function (state = { appState: '', loginName: '', loginPassword: '' }, action) {
  switch (action.type) {

    case 'SAVE_NAME':
      return { loginName: state.loginName }
    case 'SAVE_PASSWORD':
      return { loginPassword: state.loginPassword }
    default:
      return state
  }
}
