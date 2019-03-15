import * as actionTypes from './actionTypes'
import axios from 'axios'

const initMenuData = (data) => ({
    type: actionTypes.INIT_MENU_DATA,
    data
})


export const loadMenuData = () => {
    return (dispatch) => {
        axios.get('http://yapi.aeasycredit.net/mock/33/api/getMenu').then((res) => {
            dispatch(initMenuData(res.data))
        }).catch((err) => {
            console.info(err)
        })
    }
}

export const addTab = (title, key, routeUrl) => ({
    type: actionTypes.ADD_TAB,
    data: {
        title,
        key,
        routeUrl
    }
})

export const selectTab = (tabKey) => ({
    type: actionTypes.SELECT_TAB,
    tabKey
})