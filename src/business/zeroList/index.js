import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Button } from 'antd';


class ZeroList extends Component {

    render() {
        return (
            < div >
                {
                    this.props.buttons.map((item) => {
                        return (
                            <Button
                                key={item.title}
                                onClick={item.handleClick}
                                disabled={item.disabled}
                                style={{ margin: '5px 10px 5px 0px' }}>
                                {item.title}
                            </Button>
                        )
                    })
                }
                < Table dataSource={this.props.dataSource} columns={this.props.columns} />

            </div >
        )
    }
}
const mapState = (state) => ({
    selectedRow: state.getIn(["zeroList", "selectedRow"])
})
export default connect(mapState, null)(ZeroList)