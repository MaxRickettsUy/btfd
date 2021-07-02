import React from 'react'
import StonksModal from './StonksModal'
import { Button, Icon, Menu, Table } from 'semantic-ui-react'

const needsUpdate = (holding) => {
  const today = new Date().toISOString();
  const t = new Date(today)

  let year = t.getFullYear();
  let month = t.getMonth()+1;
  let dt = t.getDate();

  const todayDate = (year+"-"+month+"-"+dt)

  const updateAtDate = new Date(holding.updatedAt)

  let uYear = updateAtDate.getFullYear();
  let uMonth = updateAtDate.getMonth()+1;
  let uDay = updateAtDate.getDate();

  const lastUpdated = (uYear+"-"+uMonth+"-"+uDay)

  return lastUpdated !== todayDate

}

const TableRow = (holding, prices, index, getPrices, updateHolding) => {
  let holdingPriceNeedsUpdate = needsUpdate(holding)

  const ticker = holding.holdingName.toUpperCase()

  const getPricesProps = {
    "ticker": ticker,
    "id": holding._id,
    "holding": holding
  }

  const price = holding.price || 0

  const value = (price * holding.amount).toFixed(2);

  let totalReturn = 0

  if(price){
    totalReturn = ((price - holding.costBasis) * holding.amount).toFixed(2);
  }

  return (
      <Table.Row key={index}>
          <Table.Cell textAlign='left'>
            {holding.holdingName}
          </Table.Cell>
          <Table.Cell>
            {
              holding.price && !holdingPriceNeedsUpdate?
                holding.price
              :
                <Button onClick={()=>{getPrices(getPricesProps)}}>
                  Get Price
                </Button>
            }
          </Table.Cell>
          <Table.Cell>{holding.costBasis}</Table.Cell>
          <Table.Cell>{holding.amount}</Table.Cell>
          <Table.Cell>{value}</Table.Cell>
          <Table.Cell
            style={{color: totalReturn < 0 ? 'red' : 'green'}}
            textAlign='center'
          >
            {totalReturn ? totalReturn : 0}
          </Table.Cell>
      </Table.Row>
  )
}

const HoldingsTable = ({addHolding, holdings, prices, getPrices, updateHolding}) => {
  return (
    <React.Fragment>
      <Table striped style={{overflowX: 'scroll'}}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Ticker</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Cost Basis</Table.HeaderCell>
            <Table.HeaderCell>Amount</Table.HeaderCell>
            <Table.HeaderCell>Value</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>Return</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {
          holdings ?
            <Table.Body>
              {
                holdings.map((holding, index) => {
                  return(
                    TableRow(holding, prices, index, getPrices, updateHolding)
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
              <Menu pagination>
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
            <Table.HeaderCell colSpan='3'>
              <StonksModal addHolding={addHolding}/>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </React.Fragment>
  )
}

export default HoldingsTable