import React, { Component } from 'react'
import { connect } from 'react-redux'
import ZeroList from '../../business/zeroList'

class LoanList extends Component {
    render() {
        const dataSource = [{
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号'
        }, {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号'
        }];

        const columns = [{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
        }]
        const buttons = [{
            title: 'button1',
            handleClick: (row, rows) => {
                console.info(row)
                console.info(rows)
            },
            disable: false
        }, {
            title: 'button2',
            handleClick: (row, rows) => {
                console.info(row)
                console.info(rows)
            },
            disabled: false
        }]
        return (
            <ZeroList buttons={buttons} columns={columns} dataSource={dataSource} />
        )
    }
}
const mapState = (state) => ({

})
const mapProps = (dispatch) => {
    return {

    }
}
export default connect(mapState, mapProps)(LoanList)