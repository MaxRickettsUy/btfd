import React from 'react'
import { Icon, Menu, Table } from 'semantic-ui-react'

const TableRow = (holding, index) => {
  return (
      <Table.Row key={index}>
          <Table.Cell>{holding.holdingName}</Table.Cell>
          <Table.Cell>insert price</Table.Cell>
          <Table.Cell>{holding.costBasis}</Table.Cell>
          <Table.Cell>{holding.amount}</Table.Cell>
          <Table.Cell>{holding.costBasis * holding.amount}</Table.Cell>
          <Table.Cell>insert return</Table.Cell>
      </Table.Row>
  )
}

const HoldingsTable = ({holdings}) => {
  return (
    <Table celled style={{width: '100%', height: '90vh', background: 'grey'}}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Ticker</Table.HeaderCell>
          <Table.HeaderCell>Price</Table.HeaderCell>
          <Table.HeaderCell>Cost Basis</Table.HeaderCell>
          <Table.HeaderCell>Amount</Table.HeaderCell>
          <Table.HeaderCell>Value</Table.HeaderCell>
          <Table.HeaderCell>Return</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      {
        holdings ? 
          <Table.Body>
            {
              holdings.map((holding, index) => {
                return(
                  TableRow(holding, index)
                )
              })
            }
          </Table.Body>
        :
          null
      }
      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan='3'>
            <Menu floated='right' pagination>
              <Menu.Item as='a' icon>
                <Icon name='chevron left' />
              </Menu.Item>
              <Menu.Item as='a'>1</Menu.Item>
              <Menu.Item as='a'>2</Menu.Item>
              <Menu.Item as='a'>3</Menu.Item>
              <Menu.Item as='a'>4</Menu.Item>
              <Menu.Item as='a' icon>
                <Icon name='chevron right' />
              </Menu.Item>
            </Menu>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  )
}

export default HoldingsTable