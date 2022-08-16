import { request } from '@/utils/request';

export function getList(data: any) {
  return request.get({
    url: '/base/basics/org/list',
    method: 'get',
    data,
  });
}

export function getTree() {
  return request.get({
    url: '/base/basics/org/tree',
    method: 'get',
  });
}

export function doEdit(data: any) {
  return request.post({
    url: '/base/basics/org/save',
    method: 'post',
    data,
  });
}

export function doDelete(data: any) {
  return request.post({
    url: '/base/basics/org/delete',
    method: 'post',
    data,
  });
}
