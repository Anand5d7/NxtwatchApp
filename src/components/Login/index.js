import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  AppLoginContainer,
  FormContainer,
  InputContainer,
  LoginButton,
  LoginLogo,
  SubmitError,
  InputLabel,
  UserInput,
  CheckboxContainer,
  Checkbox,
  ShowPassword,
  LoginContainer,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showSubmitErrorMsg: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  OnShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitErrorMsg: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <InputLabel htmlFor="username">USERNAME</InputLabel>
        <UserInput
          type="text"
          value={username}
          name="username"
          onChange={this.onChangeUsername}
          placeholder="Username"
          id="username"
        />
      </>
    )
  }

  renderPasswordField = () => {
    const {password, showPassword} = this.state
    const inputType = showPassword ? 'text' : 'password'

    return (
      <>
        <InputLabel htmlFor="password">PASSWORD</InputLabel>
        <UserInput
          type={inputType}
          value={password}
          onChange={this.onChangePassword}
          name="password"
          placeholder="Password"
          id="password"
        />
        <CheckboxContainer>
          <Checkbox
            type="checkbox"
            id="checkbox"
            onChange={this.OnShowPassword}
          />
          <ShowPassword htmlFor="checkbox">Show Password</ShowPassword>
        </CheckboxContainer>
      </>
    )
  }

  render() {
    const {showSubmitErrorMsg, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <AppLoginContainer>
        <LoginContainer>
          <FormContainer onSubmit={this.submitForm}>
            <LoginLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
            />
            <InputContainer>{this.renderUsernameField()}</InputContainer>
            <InputContainer>{this.renderPasswordField()}</InputContainer>
            <LoginButton type="submit">Login</LoginButton>
            {showSubmitErrorMsg && <SubmitError>*{errorMsg}</SubmitError>}
          </FormContainer>
        </LoginContainer>
      </AppLoginContainer>
    )
  }
}

export default Login
