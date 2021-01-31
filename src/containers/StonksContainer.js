import {connect} from 'react-redux'
import React from 'react'
import { Grid } from 'semantic-ui-react'
import HoldingsTable from '../components/HoldingsTable'
import StonksChart from '../components/StonksChart'
import {getHoldings, getHolding} from '../actions/holdings'

class StonksContainer extends React.Component {

  componentDidMount = () => {
    this.props.getHoldings();
  }

  render(){
    return (
      <div style={{background: 'black', height: '100vh', margin: 10}}>
        <Grid columns={2} divided>
          <Grid.Row>
          <Grid.Column width={10}>
              <StonksChart />
          </Grid.Column>
          <Grid.Column width={6}>
              <HoldingsTable holdings={this.props.holdings}/>
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
      holdings: state.holdings.holdings
    }
  },
  (dispatch) => {
    return {
      getHolding: (ticker) => dispatch(getHolding(ticker)),
      getHoldings: () => dispatch(getHoldings())
    }
  }
)(StonksContainer)
