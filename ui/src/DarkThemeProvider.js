import * as themesActions from './actions/themes'
import React from 'react';
import {connect} from 'react-redux'
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import StonksContainer from './containers/StonksContainer';
import StonksMenu from './components/StonksMenu';

class DarkThemeProvider extends React.Component {
  componentDidMount = () => {
    this.props.initializeTheme()
  }

  render(){
    console.log(this.props.theme)
    return (
      <ThemeProvider theme={this.props.theme}>
        <>
          <GlobalStyles />
          <StonksMenu theme={this.props.theme} toggleTheme={this.props.toggleTheme}/>
          <StonksContainer/>
        </>
      </ThemeProvider>
    );
  }
};

export default connect(
  (state) => {
    return {
      theme: state.themes.theme
    }
  },
  (dispatch) => {
    return {
      initializeTheme: () => dispatch(themesActions.initializeTheme()),
      toggleTheme: (theme) => dispatch(themesActions.toggleTheme(theme))
    }
  }
)(DarkThemeProvider);