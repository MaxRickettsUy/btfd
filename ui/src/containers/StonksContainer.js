import * as holdingsActions from '../actions/holdings'
import * as themesActions from '../actions/themes'
import {connect} from 'react-redux'
import { Grid } from 'semantic-ui-react'
import HoldingsTable from '../components/HoldingsTable'
import React from 'react'
import StonksBarChart from '../components/StonksBarChart'

class StonksContainer extends React.Component {

  componentDidMount = () => {
    this.props.getHoldings();
  }

  render(){
    const holdings = this.props.holdings || null
    return (
      <React.Fragment>
        <Grid columns="equal">
          <Grid.Row style={{margin: 10}}>
            <Grid.Column>
              {
                holdings ?
                  <StonksBarChart holdings={this.props.holdings}/>
                  :
                  null
              }
            </Grid.Column>
            <Grid.Column>
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
      </React.Fragment>
    )
  }
}

export default connect(
  (state) => {
    return {
      holding: state.holdings.holding,
      holdings: state.holdings.holdings,
      prices: state.holdings.prices,
      theme: state.themes.theme
    }
  },
  (dispatch) => {
    return {
      addHolding: (values) => dispatch(holdingsActions.addHolding(values)),
      getHoldings: () => dispatch(holdingsActions.getHoldings()),
      getPrices: (ticker) => dispatch(holdingsActions.getPrices(ticker)),
      updateHolding: (id, holding) => dispatch(holdingsActions.updateHolding(id, holding)),
      // getTheme: () => dispatch(themesActions.getTheme()),
      initializeTheme: () => dispatch(themesActions.initializeTheme()),
      toggleTheme: (theme) => dispatch(themesActions.toggleTheme(theme))
    }
  }
)(StonksContainer)
