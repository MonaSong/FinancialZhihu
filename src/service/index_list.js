import { get } from '../util/allAxios';

export const getIndexList = pramas => get('/index_list', pramas);

export const getHotList = pramas => get('/hot/list', pramas);
