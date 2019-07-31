import * as types from './mutation-types'
const matutaions = {

    // 用户信息
    [types.SET_USERINFO](state, val) {
        state.userInfo = val
    },

     // 用户信息
     [types.SET_TOKEN](state, val) {
         console.log('state.',val)
        state.token = val
    }

}
export default matutaions