// 提供首页相关API函数
import request from '@/utils/request'

/**
 * 获取品牌:Obtain a brand
 * @param {Integer} limit - 品牌个数:Number of brands
 * @returns Promise
 */
export const findBrand = (limit = 6) => {
  return request('/home/brand', 'get', { limit })
}
/**
 * 获取广告区轮播图
 * @returns Promise
 */
export const findBanner = () => {
  return request('/home/banner', 'get')
}
