import { get, post } from '@/request/http.js';

// 登录页面api
export const login = (params) => post('/api/login', params);
export const getVerifyCode = () => get('/api/searchVerifyCode');
export const getNoticeList = (params) => get('/api/noticeinfo/list', params);
export const getEventDetail = (params) => get(`/api/eventinfo/info/${params.etId}`);
