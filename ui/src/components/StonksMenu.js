import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class StonksMenu extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu style={{background: 'black', border: '1px solid white'}}>
        <Menu.Item
          name='editorials'
          active={activeItem === 'editorials'}
          onClick={this.handleItemClick}
          style={{color: 'white', border: '1px solid white'}}
        >
          Editorials
        </Menu.Item>

        <Menu.Item
          name='reviews'
          active={activeItem === 'reviews'}
          onClick={this.handleItemClick}
          style={{color: 'white', border: '1px solid white'}}
        >
          Reviews
        </Menu.Item>

        <Menu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          onClick={this.handleItemClick}
          style={{color: 'white', border: '1px solid white'}}
        >
          Upcoming Events
        </Menu.Item>
      </Menu>
    )
  }
}