import React, { Component } from 'react'
import ZeroList from '../../business/zeroList'
import { withRouter } from 'react-router-dom'

class LoanList extends Component {
    render() {
        return (
            <ZeroList
                multiSelect
                // pagination
                buttons={[{
                    title: '新增',
                    handleClick: (rows) => {
                        alert('新增')
                        console.info(rows)

                    },
                    disable: false
                }, {
                    title: '删除',
                    handleClick: (rows) => {

                    },
                    disabled: false
                }]}
                columns={[{
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
                }]}
                dataUrl='/api/loanList.json'
                handleRowDoubleClick={(event, record) => {
                    this.props.history.push("/loanDetail/" + record.id)
                }} />
        )
    }
}

export default withRouter(LoanList)