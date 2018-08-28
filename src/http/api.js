import {ajaxGet} from '@/core/mxApi/index'
var domain = '/api/v2/jsb/portal/view'
export function getList (start) {
  return ajaxGet(`${domain}/list?start=${start}&count=15`)
}

export function getDetail (id) {
  return ajaxGet(`${domain}/detail?proposeId=${id}`)
}

