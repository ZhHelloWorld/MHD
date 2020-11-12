import request from '../utils/request'
import { format } from '../utils/apiHelp'
// https://mhd.zhuishushenqi.com/comic_v2/getproad?apptype=8&appversion=1.0&channel=web-app&adgroupid=123
export const getBanner = () => {
  return request({
    url: '/api/comic_v2/getproad',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'web-app',
      adgroupid: 123
    }

  })
}
// https://mhd.zhuishushenqi.com/comic_v2/customerview?apptype=8&appversion=1.0&channel=web-app&viewtype=1
export const getIndexRecommend = () => {
  return request({
    url: '/api/comic_v2/customerview',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'web-app',
      viewtype: 1
    }
  })
}

// https://mhd.zhuishushenqi.com/comic_v2/getproad?apptype=8&appversion=1.0&channel=web-app&adgroupid=125
export const getTypes = () => {
  return request({
    url: '/api/comic_v2/getproad',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'web-app',
      adgroupid: 125
    }
  })
}

// https://mhd.zhuishushenqi.com/comic_v2/comicsfilterlist_v2?apptype=8&appversion=1.0&channel=web-app
export const getTypeList = (subject, pageno = 1, pagesize = 20) => {
  return request({
    url: '/api/comic_v2/comicsfilterlist_v2',
    method: 'POST',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'web-app'
    },
    data: format({
      subject,
      pageno,
      pagesize
    })
  })
}

// https://mhd.zhuishushenqi.com/comic_v2/comicsrank?apptype=8&appversion=1.0&channel=web-app
export const getRankType = (ranktype, pageno = 1, pagesize = 20) => {
  return request({
    url: '/api/comic_v2/comicsrank',
    method: 'POST',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'web-app'
    },
    data: format({
      ranktype,
      pageno,
      pagesize
    })
  })
}
