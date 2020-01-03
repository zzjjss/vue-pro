import request from '@/utils/request'

// 获取首页轮播图数据
export function getBannerList(query) {
  return request({
    url: '/banner',
    method: 'get',
    params: query
  })
}

// 获取热门歌单
export function getHotrList(query) {
  return request({
    url: '/top/playlist/highquality',
    method: 'get',
    params: query
  })
}

// 获取推荐歌单
export function getRecommendList(query) {
  return request({
    url: '/personalized',
    method: 'get',
    params: query
  })
}

// 获取歌单详情
export function getListDetail(query) {
  return request({
    url: '/playlist/detail',
    method: 'get',
    params: query
  })
}

// 获取歌曲信息
export function getSong(query) {
  return request({
    url: '/song/url',
    method: 'get',
    params: query
  })
}
