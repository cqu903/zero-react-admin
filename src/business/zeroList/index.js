import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Button } from 'antd';
import { actionCreators } from './store'

import './style.css'

class ZeroList extends Component {
    constructor(props) {
        super(props)
        this.props.initProps(props)
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
                    dataSource={this.props.dataSource}
                    columns={this.props.columns}
                    pagination={this.props.pagination}
                    onRow={(record) => {
                        return {
                            onClick: (event) => {
                                this.props.handleRowClick(event, record)
                            },
                            onDoubleClick: (event) => { },
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
            </div >
        )
    }
}
const mapState = (state) => ({
    selectedRows: state.zeroList.selectedRows
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
        }
    }
}
export default connect(mapState, mapDispatch)(ZeroList)