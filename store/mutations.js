import * as types from './mutation-types'
const matutaions = {

    // 用户信息
    [types.SET_USERINFO](state, val) {
        state.userInfo = val
    }

}
export default matutaions