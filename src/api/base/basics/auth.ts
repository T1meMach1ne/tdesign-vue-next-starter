import { request } from '@/utils/request';
import { encrypt } from '@/utils/encrypt';

export function getPublicKey() {
  return request.get({
    url: '/base/basics/auth/getPublicKey',
    method: 'get',
  });
}

export async function login(data: any) {
  const encryptData = await encrypt(data);
  debugger;
  return request.post({
    url: '/base/basics/auth/login',
    method: 'post',
    data: encryptData,
  });
}

export async function socialLogin(data: any) {
  return request.post({
    url: '/base/basics/auth/socialLogin',
    method: 'post',
    data,
  });
}

export function getUserInfo() {
  return request.get({
    url: '/base/basics/auth/userInfo',
    method: 'get',
  });
}

export function logout() {
  return request.get({
    url: '/base/basics/auth/logout',
    method: 'get',
  });
}

export function register(data: any) {
  return request.post({
    url: '/base/basics/auth/register',
    method: 'post',
    data,
  });
}
