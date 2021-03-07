import React from 'react'
import {Checkbox} from 'semantic-ui-react'

const Toggle = ({ theme, toggleTheme }) => {
  const newTheme = theme.type === 'light' ? 'dark' : 'light';
  return (
    <Checkbox style={{marginRight: 10}} checked={theme.type === 'dark'} onClick={() => {toggleTheme(newTheme)}} toggle />
  );
};

export default Toggle;
