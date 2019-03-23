import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import ZeroList from '../../business/zeroList'
import {
    Form, Modal, DatePicker, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,
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
                            title: '貸款生效日期' + index,
                            dataIndex: 'startDate'
                        },
                        {
                            title: '貸款賬戶編號' + index,
                            dataIndex: 'serialNumber'
                        },
                        {
                            title: '證件號碼' + index,
                            dataIndex: 'idcard'
                        },
                        {
                            title: '客戶姓名' + index,
                            dataIndex: 'name'
                        },
                        {
                            title: '賬戶額度' + index,
                            dataIndex: 'limitedAmount'
                        },
                        {
                            title: '剩餘額度' + index,
                            dataIndex: 'usableLimitAmount'
                        },
                        {
                            title: '上次還款日期' + index,
                            dataIndex: 'lastPaymentDate'
                        },
                        {
                            title: '賬戶狀態' + index,
                            dataIndex: 'accountStatus'
                        }
                    ]}
                    dataUrl="/api/loanAccount/getAdminFree"
                    handleRowDoubleClick={(event, record) => {
                    }}
                />
            </div>
        )
    }

}

export default Form.create()(withRouter(TransactionRecordList));