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
// https://mhd.zhuishushenqi.com/comic_v2/comicsfilterlist_v2?apptype=8&appversion=1.0&channel=web-app
export const getVip = (pageno = 1, pagesize = 15, special = 892) => {
  return request({
    url: '/api/comic_v2/comicsfilterlist_v2',
    method: 'POST',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'web-app'
    },
    data: format({
      special,
      pageno,
      pagesize
    })
  })
}
// https://mhd.zhuishushenqi.com/comic/hotsearch?apptype=8&appversion=1.0&channel=web-app&appType=8
export const getHotSearch = () => {
  return request({
    url: '/api/comic/hotsearch',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'web-app',
      appType: 8
    }
  })
}

// https://mhd.zhuishushenqi.com/comic_v2/searchindex?apptype=8&appversion=1.0&channel=web-app&name=1&type=2
export const getSearchList = (name) => {
  return request({
    url: '/api/comic_v2/searchindex',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'web-app',
      name,
      type: 2
    }
  })
}

// https://mhd.zhuishushenqi.com/comic_v2/searchbookauthor?apptype=8&appversion=1.0&channel=web-app&name=%E6%83%B9%E4%B8%8A%E5%86%B7%E6%83%85boss
// &type=2&pageno=1&pagesize=100
export const getSearchRes = (name) => {
  return request({
    url: '/api/comic_v2/searchbookauthor',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'web-app',
      name,
      type: 2,
      pageno: 1,
      pagesize: 100
    }
  })
}
