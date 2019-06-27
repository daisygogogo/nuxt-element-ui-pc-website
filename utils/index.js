/**
 * 校验手机号
 * @param {*} tel 手机号
 * @return 校验结果 Boolean 类型
 */
export function checkMobile(tel){
	let result = /^1(3|4|5|6|7|8|9)\d{9}$/.test(tel);
	return result;
}