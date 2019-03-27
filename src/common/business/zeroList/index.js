import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { Table } from 'antd'
// import { actionCreators } from './store'
// import store from '../../store'
import { withRouter } from 'react-router-dom'
import http from 'utils/http'

class ZeroList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataList: null,
      selectedRows: []
    }
  }

  componentWillMount = () => {
    this.fetchDataList()
  }

  fetchDataList = () => {
    if (this.props.dataUrl) {
      http
        .get(this.props.dataUrl)
        .then(data => {
          // console.info("data.rows--->" + data.rows ? data.rows : data)
          this.setState({
            dataList: data.rows ? data.rows : data
          })
        })
        .catch(err => {
          console.info(err)
        })
    }
  }

  addOrRemoveSelectRows = record => {
    let findIndex = -1
    this.state.selectedRows.forEach((item, index) => {
      if (item.id === record.id) {
        findIndex = index
        this.state.selectedRows.splice(findIndex, 1)
        this.setState({
          selectedRows: this.state.selectedRows
        })
        return false
      }
    })
    if (findIndex < 0) {
      if (this.props.multiSelect) {
        let arr = this.state.selectedRows
        arr.push(record)
        this.setState({
          selectedRows: arr
        })
      } else {
        this.setState({
          selectedRows: [record]
        })
      }
    }
  }

  static defaultProps = {
    pagination: false
  }
  render() {
    return (
      <div>
        <Table
          scroll={this.props.scroll}
          rowKey="id"
          dataSource={this.state.dataList}
          columns={this.props.columns}
          pagination={this.props.pagination}
          onRow={record => {
            return {
              onClick: event => {
                this.addOrRemoveSelectRows(record)
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
            this.state.selectedRows.forEach((row, index) => {
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
/* const mapState = state => ({
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
} */
export default withRouter(ZeroList)
