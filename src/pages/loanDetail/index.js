import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Tabs } from 'antd';

import { LoanDetailWrapper } from './style'

class LoanDetail extends Component {

    render() {

        return (
            <LoanDetailWrapper>
                <Tabs>
                    <Tabs.TabPane tab='建议' key='建议'>建议</Tabs.TabPane>
                    <Tabs.TabPane tab='主贷人' key='主贷人'>主贷人</Tabs.TabPane>
                    <Tabs.TabPane tab='公司专用' key='公司专用'>公司专用</Tabs.TabPane>
                    <Tabs.TabPane tab='客户信息匹配' key='客户信息匹配'>客户信息匹配</Tabs.TabPane>
                    <Tabs.TabPane tab='贷款记事本' key='贷款记事本'>贷款记事本</Tabs.TabPane>
                    <Tabs.TabPane tab='视频审批' key='视频审批'>视频审批</Tabs.TabPane>
                </Tabs>
            </LoanDetailWrapper>
        )
    }
}
const mapState = (state) => ({

})
const mapProps = (dispatch) => {
    return {

    }
}
export default connect(mapState, mapProps)(withRouter(LoanDetail))