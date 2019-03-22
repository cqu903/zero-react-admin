import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Tabs } from 'antd'

class MyTab extends Component {
  constructor(props) {
    super(props)
    this.newTabIndex = 0
    this.state = {
      activeKey: this.props.defaultTab
    }
  }

  onChange = activeKey => {
    this.setState({ activeKey })
  }

  onEdit = (targetKey, action) => {
    this[action](targetKey)
  }

  remove = targetKey => {
    let activeKey = this.state.activeKey
    let lastIndex
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1
      }
    })
    const panes = this.state.panes.filter(pane => pane.key !== targetKey)
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key
      } else {
        activeKey = panes[0].key
      }
    }
    this.setState({ panes, activeKey })
  }

  render() {
    return (
      <Tabs
        onChange={this.onChange}
        activeKey={this.state.activeKey}
        type="card"
      // onEdit={this.onEdit}
      >
        {this.props.children}
      </Tabs>
    )
  }
}
const mapState = state => ({})
const mapProps = dispatch => {
  return {}
}
export default connect(
  mapState,
  mapProps
)(withRouter(MyTab))
