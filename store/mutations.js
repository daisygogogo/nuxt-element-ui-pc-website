import * as types from './mutation-types'
const matutaions = {

    // 用户信息
    [types.SET_USERINFO](state, val) {
        state.userInfo = val
    },

    // 弹框二维码数据
    [types.SET_DIALOGEWMDATA](state, val) {
        state.dialogEwmData = val
    },

    // 遮罩
    [types.SET_MASK](state, val) {
        state.mask = val
    }

}
export default matutaions