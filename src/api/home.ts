import request from "@/utils/request";
/**
 * @interface loginParams -登录参数
 * @property {string} user_name -用户名
 * @property {string} password -用户密码
 */
interface LoginParams {
  user_name: string
  password: string
}

//封装User类型的接口方法
export class UserService {
  /**
   * @description 查询User的信息
   * @param {number} teamId - 所要查询的团队ID
   * @return {HttpResponse} result
   */
  static login(params: LoginParams): Promise<any> {
    return request({
      url: '/manage/user/login',
      method: 'post',
      data: params
    })
  }
}