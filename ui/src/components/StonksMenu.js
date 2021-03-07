import Toggle from '../components/Toggle';
import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

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
            name='editorials'
            active={activeItem === 'editorials'}
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
            name='upcomingEvents'
            active={activeItem === 'upcomingEvents'}
            onClick={this.handleItemClick}
            position='right'
          >
            <Toggle 
              theme={this.props.theme} 
              toggleTheme={this.props.toggleTheme} 
            />
          </Menu.Item>
        </Menu>
      </Segment>
    )
  }
}