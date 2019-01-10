import { get, post, put } from '../util/allAxios';

// 获取用户提问列表
export const getAnswerList = params => get('/answer', params);

// 添加用户提问
export const addAnswer = params => post('/answer', params);

// 获取用户详情
export const getAnswerDetail = params => get(`/answer/${params.id}`, params);

// 添加用户评论
export const addQuestionAnswer = params => put(`/answer/${params._id}/comments`, params);


// 搜索答疑数据
export const searchAnswer = params => get(`/answer/search/${params.title}`, params);
