import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Button } from 'antd';
import { actionCreators } from './store'
import { withRouter } from 'react-router-dom'

class ZeroList extends Component {

    componentDidMount() {
        this.props.initProps(this.props)
    }

    static defaultProps = {
        pagination: false
    }
    render() {
        return (
            < div >
                {
                    this.props.buttons.map((item) => {
                        return (
                            <Button
                                key={item.title}
                                onClick={() => item.handleClick(this.props.selectedRows)}
                                disabled={item.disabled}
                                style={{ margin: '5px 10px 5px 0px' }}>
                                {item.title}
                            </Button>
                        )
                    })
                }
                < Table
                    rowKey='id'
                    dataSource={this.props.dataList}
                    columns={this.props.columns}
                    pagination={this.props.pagination}
                    onRow={(record) => {
                        return {
                            onClick: (event) => {
                                this.props.handleRowClick(event, record)
                            },
                            onDoubleClick: (event) => { this.props.handleRowDoubleClick(event, record) },
                            onContextMenu: (event) => { },
                            onMouseEnter: (event) => { },
                            onMouseLeave: (event) => { }
                        }
                    }}
                    rowClassName={(record) => {
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
            </div >
        )
    }
}
const mapState = (state) => ({
    selectedRows: state.zeroList.selectedRows,
    dataList: state.zeroList.dataList
})
const mapDispatch = (dispatch) => {
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
export default connect(mapState, mapDispatch)(withRouter(ZeroList))