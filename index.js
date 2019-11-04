/** @module 登录接口-post */
/**
 * @typedef {Object} Result
 * @property {number} code - 状态码
 * @property {string} msg - 信息
 * @property {string} type - 返回类型 
 */
/**
 * @typedef {Object} Data
 * @property {string} data - Token
 */
/**
 * 小程序登录接口
 * @param {string} username - 用户名
 * @param {string} password - 密码
 * @returns {Result|Data}
 */
export function POST_USER_LOGIN() {}
//////////////////////////////////////
/** @module 商品查询接口-post */
/**
 * @typedef {Object} Result
 * @property {number} code - 状态码
 * @property {string} msg - 信息
 * @property {string} type - 返回类型
 */
/**
 * @typedef {Object} Data
 * @property {string} data - Token
 */
/**
 * 商品查询接口
 * @param {int} tags_id - XX馆ID
 * @param {int} [brand_id] - 品牌ID
 * @param {int} [cate_id] - 分类ID
 * @param {string} [name] - 商品名称
 * @param {int} [page=1] - 查询页码
 * @param {int} [num=10] - 每页显示记录条数
 * @returns {Result|Data}
 */
export function POST_BRAND_LIBRARY_QUERY() { }