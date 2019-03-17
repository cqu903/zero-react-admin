import React, { Component } from 'react'
import { connect } from 'react-redux'
import ZeroList from '../../business/zeroList'
import { actionCreators } from './store';

class LoanList extends Component {
    componentDidMount() {
        this.props.init()
    }
    render() {
        const columns = [{
            title: 'id',
            dataIndex: 'id',
        }, {
            title: '贷款编号',
            dataIndex: 'loanNo',
        }, {
            title: '姓名',
            dataIndex: 'name',
        }, {
            title: '金额',
            dataIndex: 'amount',
        }, {
            title: '申请日期',
            dataIndex: 'applyDate',
        }, {
            title: '工序',
            dataIndex: 'status',
        }]
        const buttons = [{
            title: '删除',
            handleClick: (rows) => {
                console.info(rows)

            },
            disable: false
        }, {
            title: 'button2',
            handleClick: (rows) => {
                console.info(rows)
            },
            disabled: false
        }]
        return (
            // <ZeroList pagination multiSelect buttons={buttons} columns={columns} dataSource={this.props.loanList} />
            <ZeroList multiSelect buttons={buttons} columns={columns} dataSource={this.props.loanList} />
        )
    }
}
const mapState = (state) => ({
    loanList: state.loanList.loanList
})
const mapDispatch = (dispatch) => {
    return {
        init() {
            dispatch(actionCreators.init())
        }
    }
}
export default connect(mapState, mapDispatch)(LoanList)