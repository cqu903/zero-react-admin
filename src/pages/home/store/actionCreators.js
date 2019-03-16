import * as actionTypes from './actionTypes'
import axios from 'axios'

const initMenuData = (data) => ({
    type: actionTypes.INIT_MENU_DATA,
    data
})


export const loadMenuData = () => {
    return (dispatch) => {
        axios.get('/api/menu.json').then((res) => {
            dispatch(initMenuData(res.data))
        }).catch((err) => {
            console.info(err)
        })
    }
}
