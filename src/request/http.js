/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from 'axios';
import { 
  ElLoading,
  ElMessage
} from 'element-plus'
// 环境的切换
let loadingInstance = null
const loadingOptions = {
  lock: true,
  text: 'Loading',
  background: 'rgba(0, 0, 0, 0.7)',
}

// 请求次数统计
let requestNumber = 0
const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 60000
});

// 请求拦截器
instance.interceptors.request.use(
	config => {
		// 计算请求的个数
		if(requestNumber===0){
			loadingInstance = ElLoading.service(loadingOptions)
		}
		requestNumber++

		// 返回请求配置
		return config;
	},
	error => {
		return Promise.error(error);
	}
)
// 响应拦截器
instance.interceptors.response.use(
	response => {
		// 计算请求个数
		requestNumber--
		if(requestNumber===0){
			loadingInstance.close()
		}

		// 请求成功
		if(response.status === 200){
			const resData = response.data
			if(resData.code !== 200){
        ElMessage({
          showClose: true,
          type: 'error',
          message: resData.message,
        })
				return null
			}
			return resData
		}
		
		// 请求失败
    ElMessage({
      showClose: true,
      type: 'error',
      message: `interceptors.response error: ${response.config.url},${response.statusText}` 
    })
		return null
	},
	// 服务器状态码不是200的情况    
	error => {
		loadingInstance.close()
		console.log("error",error)
	}
);
/** 
 * get方法，对应get请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function get(url, params) {
	return instance.get(url, { params })
}
/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params) {
	// console.log(params)
	return instance.post(url, params)
}

/** 
 * put方法，对应put请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function put(url, params) {
	// console.log(params)
	return instance.put(url, params)
}

/** 
 * delete方法，对应delete请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function delet(url, params) {
	// console.log(params)
	return instance.delete(url, params)
}