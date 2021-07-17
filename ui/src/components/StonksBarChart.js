import React from 'react'
import {VictoryAxis, VictoryBar, VictoryChart, VictoryContainer, VictoryTheme} from 'victory'

// const data = [
//   {quarter: 1, earnings: 13000},
//   {quarter: 2, earnings: 16500},
//   {quarter: 3, earnings: 14250},
//   {quarter: 4, earnings: 19000}
// ];

class StonksBarChart extends React.Component {
  getStonksData = (holdings) => {
    let data = []
    holdings.forEach((holding) => {
      const _value = holding.amount * holding.price
      const thing = {
        "ticker": holding.holdingName,
        "value": isNaN(_value) ? 0 : _value
      }

      data.push(thing)
    })

    return data
  }

  getStonksTickers = (holdings) => {
    let data = []

    holdings.forEach((holding) => {
      data.push(holding.holdingName)
    })
  }

  render() {
    return (
      <VictoryChart
        // adding the material theme provided with Victory
        theme={VictoryTheme.material}
        domainPadding={30}
        padding={{
          top: 50,
          bottom: 50,
          left: 70,
          right: 70
        }}
        containerComponent={
          <VictoryContainer
            style={{height: '80vh'}}
            responsive={true}
          />
        }
      >
        <VictoryAxis
          tickValues={[1,2,3,4,5]}
          tickFormat={this.getStonksTickers(this.props.holdings)}
          style={{
            tickLabels: {
              fontSize: 5
            }
          }}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (`$${x}`)}
          style={{
            tickLabels: {
              fontSize: 10
            }
          }}
        />
        <VictoryBar
          data={this.getStonksData(this.props.holdings)}
          x="ticker"
          y="value"
          barRatio={0.8}
          style={{
            data: { fill: "MediumSeaGreen" }
          }}
        />
      </VictoryChart>
    )
  }
}

export default StonksBarChart