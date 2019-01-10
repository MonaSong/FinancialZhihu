import { post, get} from "../util/allAxios";

// 用户登陆
export const login = params => post('/user/login',params);

// 用户注册
export const register = params => post('user',params);
