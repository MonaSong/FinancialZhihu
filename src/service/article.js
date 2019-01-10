import { get, post, put } from '../util/allAxios';

// 获取文章列表
export const getArticleList = params => get('/comments', params);

// 添加文章
export const addArticle = params => post('/comments', params);

// 添加评论
export const addComments = params => put(`/comments/${params._id}/comments`, params);

// 查询单个文章
export const getSingleArticle = params => get(`/comments/${params._id}`, params);

// 评论单个文章
export const commentSingleArticle = params => post('/comments//addcomments', params);
