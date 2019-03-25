import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table } from 'antd'
import { actionCreators } from './store'
import store from '../../store'
import { withRouter } from 'react-router-dom'
import uuidv4 from 'uuid/v4'

class ZeroList extends Component {
  constructor(props) {
    super(props)
    this.uuid = uuidv4()
  }
  componentDidMount() {
    this.props.initProps(this.props, this.uuid)
  }

  static defaultProps = {
    pagination: false
  }
  render() {
    // console.info('index...' + this.props.index)
    // console.info('dataList...' + this.props.dataList[this.props.index])
    return (
      <div>
        <Table
          scroll={this.props.scroll}
          rowKey="id"
          dataSource={this.props.dataList[this.uuid]}
          columns={this.props.columns}
          pagination={this.props.pagination}
          onRow={record => {
            return {
              onClick: event => {
                this.props.handleRowClick &&
                  this.props.handleRowClick(event, record)
              },
              onDoubleClick: event => {
                this.props.handleRowDoubleClick &&
                  this.props.handleRowDoubleClick(event, record)
              },
              onContextMenu: event => {},
              onMouseEnter: event => {},
              onMouseLeave: event => {}
            }
          }}
          rowClassName={record => {
            let isSelectedRow = false
            this.props.selectedRows &&
              this.props.selectedRows.forEach((row, index) => {
                if (row.id === record.id) {
                  isSelectedRow = true
                  return false
                }
              })
            return isSelectedRow ? 'selectedRow' : null
          }}
        />
        <style>
          {`
                        .selectedRow {
                            background-color: #E9F7FE;
                        }
                    `}
        </style>
      </div>
    )
  }
}
const mapState = state => ({
  selectedRows: state.zeroList.selectedRows,
  // index: state.zeroList.index,
  dataList: state.zeroList.dataList
})
const mapDispatch = dispatch => {
  return {
    handleRowClick(event, record) {
      dispatch(actionCreators.addOrRemoveSelectRows(record))
    },
    initProps(props, uuid) {
      if (props.multiSelect) {
        dispatch(actionCreators.initMultiSelect(props.multiSelect))
      }
      if (props.dataUrl) {
        dispatch(actionCreators.initDataList(props.dataUrl, uuid))
      }
    }
  }
}
export default connect(
  mapState,
  mapDispatch
)(withRouter(ZeroList))
