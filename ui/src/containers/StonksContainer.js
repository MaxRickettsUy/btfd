import {connect} from 'react-redux'
import React from 'react'
import { Grid } from 'semantic-ui-react'
import HoldingsTable from '../components/HoldingsTable'
import StonksBarChart from '../components/StonksBarChart'
import StonksChart from '../components/StonksChart'
import * as holdingsActions from '../actions/holdings'
<StonksChart />

class StonksContainer extends React.Component {

  componentDidMount = () => {
    this.props.getHoldings();
  }

  render(){
    const holdings = this.props.holdings || null
    return (
      <div style={{background: 'black', height: '100vh', margin: 10, overflowY: 'scroll', overflowX: 'hidden'}}>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column width={9}>
              {
                holdings ? 
                  <StonksBarChart holdings={this.props.holdings}/>
                  :
                  null
              }
            </Grid.Column>
            <Grid.Column width={7}>
                <HoldingsTable 
                  addHolding={this.props.addHolding} 
                  holdings={this.props.holdings}
                  prices={this.props.prices}
                  getPrices={this.props.getPrices}
                  updateHolding={this.props.updateHolding}
                />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      holding: state.holdings.holding,
      holdings: state.holdings.holdings,
      prices: state.holdings.prices
    }
  },
  (dispatch) => {
    return {
      addHolding: (values) => dispatch(holdingsActions.addHolding(values)),
      getHoldings: () => dispatch(holdingsActions.getHoldings()),
      getPrices: (ticker) => dispatch(holdingsActions.getPrices(ticker)),
      updateHolding: (id, holding) => dispatch(holdingsActions.updateHolding(id, holding))
    }
  }
)(StonksContainer)
