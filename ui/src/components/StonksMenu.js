import Toggle from './Toggle';
import React, { Component } from 'react'
import { Button, Menu, Segment } from 'semantic-ui-react'

export default class StonksMenu extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <Segment>
        <Menu stackable>
          <Menu.Item>
            <img alt='btfd logo' src={process.env.PUBLIC_URL + '/btfd1.png'} />
          </Menu.Item>
          <Menu.Item
            name='portfolio'
            active={activeItem === 'portfolio'}
            onClick={this.handleItemClick}
          >
            Portfolio
          </Menu.Item>
          <Menu.Item
            name='reviews'
            active={activeItem === 'reviews'}
            onClick={this.handleItemClick}
          >
            StonkSwap
          </Menu.Item>
          <Menu.Item
            name='darkModeToggle'
            onClick={this.handleItemClick}
            position='right'
          >
              <Toggle 
                theme={this.props.theme} 
                toggleTheme={this.props.toggleTheme}
              />
              <Button onClick={this.props.logout}>
                Logout
              </Button>
          </Menu.Item>
        </Menu>
      </Segment>
    )
  }
}