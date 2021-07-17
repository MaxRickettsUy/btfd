import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default class Example extends React.Component {
  static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

  constructData = (holdings) => {
    let data = []

    holdings.forEach((holding) => {
      let thing = holding.price * holding.amount

      data.push({
        "ticker": holding.holdingName,
        "value": thing
      })
    })

    return data
  }

  render() {
    console.log(this.props.holdings)

    const data = this.constructData(this.props.holdings)

    return (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="ticker" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
