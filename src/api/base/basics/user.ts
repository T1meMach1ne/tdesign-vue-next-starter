import { request } from '@/utils/request';
import { encrypt } from '@/utils/encrypt';

export function getList(data: any) {
  return request.get({
    url: '/base/basics/user/list',
    method: 'get',
    data,
  });
}

export function getInfo(id: string) {
  return request.get({
    url: `/base/basics/user/info/${id}`,
    method: 'get',
  });
}

export function doEdit(data: any) {
  return request.post({
    url: '/base/basics/user/save',
    method: 'post',
    data,
  });
}

export async function doChangePwd(data: any) {
  const encryptData = await encrypt(data);
  return request.post({
    url: '/base/basics/user/changePwd',
    method: 'post',
    data: encryptData,
  });
}

export function doUnLock(params: any) {
  return request.post({
    url: '/base/basics/user/unLock',
    method: 'post',
    params,
  });
}

export function doDelete(params: any) {
  return request.post({
    url: '/base/basics/user/delete',
    method: 'post',
    params,
  });
}
