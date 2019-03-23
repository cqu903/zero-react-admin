import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table } from 'antd'
import { actionCreators } from './store'
import store from '../../store'
import { withRouter } from 'react-router-dom'

class ZeroList extends Component {
  componentDidMount() {
    if (this.props.onRef) {
      this.props.onRef(this)
    }
    this.props.initProps(this.props)

    // if (this.props.forceRefresh) {
    //   this.refreshComponent()
    // }
  }

  componentWillUnmount() {
    if (this.props.onRef) {
      this.props.onRef(undefined)
    }
  }

  /**
   * see: https://www.jianshu.com/p/ff1420118918
   * see: https://github.com/kriasoft/react-starter-kit/issues/909
   */
  refreshComponent() {
    // this.forceUpdate();
    if (this.props.dataUrl) {
      store.dispatch(actionCreators.initDataList(this.props.dataUrl))
    }
  }

  static defaultProps = {
    pagination: false
  }
  render() {
    console.info('refresh...')
    return (
      <div>
        <Table
          rowKey="id"
          dataSource={this.props.dataList}
          columns={this.props.columns}
          pagination={this.props.pagination}
          onRow={record => {
            return {
              onClick: event => {
                this.props.handleRowClick(event, record)
              },
              onDoubleClick: event => {
                this.props.handleRowDoubleClick(event, record)
              },
              onContextMenu: event => { },
              onMouseEnter: event => { },
              onMouseLeave: event => { }
            }
          }}
          rowClassName={record => {
            let isSelectedRow = false
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
  dataList: state.zeroList.dataList
})
const mapDispatch = dispatch => {
  return {
    handleRowClick(event, record) {
      dispatch(actionCreators.addOrRemoveSelectRows(record))
    },
    initProps(props) {
      if (props.multiSelect) {
        dispatch(actionCreators.initMultiSelect(props.multiSelect))
      }
      if (props.dataUrl) {
        dispatch(actionCreators.initDataList(props.dataUrl))
      }
    }
  }
}
export default connect(
  mapState,
  mapDispatch
)(withRouter(ZeroList))
