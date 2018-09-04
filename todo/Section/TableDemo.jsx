import React from 'react'

import {Table} from '../../web/Table'

const tx = {
  block: 201933,
  hash: '4cc38e356d416262c73518be7b520f4ca8373cd205a8a9c91e57ba8e43647844',
  amount: '1,597.8750',
  age: 'min',
  timestamp: '2019-01-01 01:01:00 UTC'
}

const cols = [
  {text: 'Block', key: 'block'},
  {text: 'Transaction Hash', key: 'hash'},
  {text: 'Amount', key: 'amount'},
  {text: 'Age', key: 'age'},
  {text: 'Timestamp', key: 'timestamp'}
]

const rows = [1, 2, 3, 4, 5].map(i => ({...tx, age: `${i} min`}))

export default class TableDemo extends React.Component {
  state = {
    column: 'block',
    descending: false
  }

  handleSelect = row => console.log(row)

  handleSort = column => {
    const state = {column}
    if (this.state.column === column) state.descending = !this.state.descending
    this.setState(state)
  }

  render () {
    return (
      <div>
        <h3>Tables</h3>
        <Table columns={cols} rows={rows} />
        <br />
        <Table
          column={this.state.column}
          columns={cols}
          descending={this.state.descending}
          onSelect={this.handleSelect}
          onSort={this.handleSort}
          rows={rows}
          selectable
          sortable />
      </div>
    )
  }
}
