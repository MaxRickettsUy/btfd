import * as authActions from './actions/auth'
import * as themesActions from './actions/themes'
import React from 'react';
import {connect} from 'react-redux'
import { GlobalStyles } from './global';
import LoginForm from './components/form/LoginForm'
import StonksContainer from './containers/StonksContainer';
import StonksMenu from './components/StonksMenu';
import { ThemeProvider } from 'styled-components';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

class DarkThemeProvider extends React.Component {
  state = {
    messageHidden: true
  }

  componentDidMount = () => {
    this.props.initializeTheme()
    this.props.welcome()
  }

  componentDidUpdate = (prevProps, prevState) => {
    if(prevProps.authStatus !== this.props.authStatus && this.props.authStatus) {
      this.renderMessageTimer()
    }
  }

  hideMessage = () => {
    this.setState({
      ...this.state,
      messageHidden: true
    })
    this.props.clearRegistrationStatus();
  }

  renderMessage = () => {
    this.setState({
      ...this.state,
      messageHidden: false
    })
  }

  renderMessageTimer = () => {
    this.renderMessage()

    setTimeout(() => {
      this.hideMessage()
    }, 2000)
  }

  render(){
    return (
      <BrowserRouter>
        <ThemeProvider theme={this.props.theme}>
          <GlobalStyles />
          {
            this.props.authenticated ?
              <Switch>
                <Route exact path='/'>
                  <StonksMenu logout={this.props.logoutUser} theme={this.props.theme} toggleTheme={this.props.toggleTheme}/>
                  <StonksContainer/>
                </Route>
              </Switch>
              :
              <LoginForm
                messageHidden={this.state.messageHidden}
                header={this.props.authStatus}
                content={this.props.authMessage}
                login={this.props.loginUser}
                renderMessageTimer={this.renderMessageTimer}
                register={this.props.registerUser}
              />
          }
        </ThemeProvider>
      </BrowserRouter>
    );
  }
};

export default connect(
  (state) => {
    return {
      authMessage: state.auth.authStatus.message,
      authStatus: state.auth.authStatus.status,
      authenticated: state.auth.authenticated,
      user: state.auth.user,
      theme: state.themes.theme
    }
  },
  (dispatch) => {
    return {
      clearRegistrationStatus: () => dispatch(authActions.clearRegistrationStatus()),
      initializeTheme: () => dispatch(themesActions.initializeTheme()),
      registerUser: (user) => dispatch(authActions.register(user)),
      loginUser: (user) => dispatch(authActions.login(user)),
      logoutUser: () => dispatch(authActions.logout()),
      toggleTheme: (theme) => dispatch(themesActions.toggleTheme(theme)),
      welcome: () => dispatch(authActions.welcome())
    }
  }
)(DarkThemeProvider);