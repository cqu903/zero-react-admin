import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import ZeroList from '../../business/zeroList'
import {
    Form, Modal, Button
} from 'antd';
import AdminFeeRepayment from './adminFeeRepayment'
import '../../statics/css/loanList/loanList.css'

class TransactionRecordList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            visible: false,
        }
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 100);
    }

    refreshContent = () => {
        this.setState({ loading: true })
        this.child.refreshComponent()
        this.setState({ loading: false })
    }

    handleCancel = () => {
        this.setState({ visible: false });
    }

    render() {
        const { index } = this.props
        const { visible, loading } = this.state;
        let myButton = null
        if (index === "1") {
            myButton = (
                <div>
                    <Button htmlType="submit" loading={loading} onClick={this.refreshContent}>
                        刷新
                  </Button>
                    <Button type="primary" style={{ marginLeft: 8 }} htmlType="submit" onClick={this.showModal}>
                        還款
                  </Button>
                    <Button style={{ marginLeft: 8 }} htmlType="submit">
                        撤销还款
                  </Button>
                    <Button style={{ marginLeft: 8 }} htmlType="submit">
                        超额还款
                  </Button>
                    <Button style={{ marginLeft: 8 }} htmlType="submit">
                        申请冻结
                  </Button>
                    <Button style={{ marginLeft: 8 }} htmlType="submit">
                        正常还款
                  </Button>
                    <Modal
                        visible={visible}
                        title="新增AdmiFee"
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        footer={[
                            <Button key="back" onClick={this.handleCancel}>取消</Button>,
                            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                                提交
            </Button>,
                        ]}
                    >
                        <AdminFeeRepayment />
                    </Modal>
                </div>
            )
        }
        return (
            <div>
                {myButton}
                <ZeroList
                    onRef={ref => (this.child = ref)}
                    multiSelect
                    // pagination
                    columns={[
                        {
                            title: '處理日期',
                            dataIndex: 'createDate'
                        },
                        {
                            title: '交易日期',
                            dataIndex: 'dealDate'
                        },
                        {
                            title: '入賬日期',
                            dataIndex: 'postingDate'
                        },
                        {
                            title: '交易摘要',
                            dataIndex: 'summary'
                        },
                        {
                            title: '交易金額',
                            dataIndex: 'amount'
                        },
                        {
                            title: '本金應收',
                            dataIndex: 'repayPrincipal'
                        },
                        {
                            title: '本金實收',
                            dataIndex: 'factRepayPrincipal'
                        },
                        {
                            title: '利息結算',
                            dataIndex: 'interestSettlement'
                        },
                        {
                            title: '利息應收',
                            dataIndex: 'interest'
                        },
                        {
                            title: '利息實收',
                            dataIndex: 'factInterest'
                        },
                        {
                            title: '利息豁免',
                            dataIndex: 'exemptInterest'
                        },
                        {
                            title: '逾期利息應收',
                            dataIndex: 'lc'
                        },
                        {
                            title: '逾期利息实收',
                            dataIndex: 'factLc'
                        }
                    ]}
                    dataUrl="/api/transaction/queryTransactionRecordList"
                    handleRowDoubleClick={(event, record) => {
                    }}
                />
            </div>
        )
    }

}

export default Form.create()(withRouter(TransactionRecordList));