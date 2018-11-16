import axios from 'axios'
import router from '../router'
import {
  Notification
} from 'element-ui'
const baseUrl = 'https://wx.douyoucai.com/api'
// if (sessionStorage.getItem('ak') !== null) {
//   axios.defaults.headers.common['Authorization'] = 'Bearer' + sessionStorage.getItem('ak')
// }

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  // let message = ''
  // switch (error.response.status) {
  //   case 401:
  //     message: '授权错误'
  //     router.push({
  //       path: '/login'
  //     })
  //     break;
  // }
  // Notification({
  //   title: '出错了',
  //   type: 'error',
  //   message: message
  // })
  // return Promise.reject(error);
});

export const loginUserUrl = params => {
  return axios.post(`${baseUrl}/Oauth/token`, params)
}

export const getUsersUrl = params => {
  return axios.get(`${baseUrl}/admin/users`, params)
}

export const getBikesUrl = params => {
  return axios.get(`${baseUrl}/admin/bikes`, params)
}

export const getBikesDetailUrl = params => {
  return axios.get(`${baseUrl}/admin/bikes/${params.id}`)
}

export const deleteBikesDetailUrl = params => {
  return axios.delete(`${baseUrl}/admin/bikes/${params.id}`)
}

export const getUserDataUrl = params => {
  return axios.get(`${baseUrl}/admin/status/user`, params)
}
export const getBikeDataUrl = params => {
  return axios.get(`${baseUrl}/admin/stats/bike`, params)
}
