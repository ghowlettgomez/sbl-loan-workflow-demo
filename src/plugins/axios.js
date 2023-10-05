import axios from 'axios'

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = import.meta.env.baseURL || import.meta.env.apiURL || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const config = {
  // baseURL: import.meta.env.baseURL || import.meta.env.apiURL || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
  withCredentials: false,
  'Access-Control-Allow-Origin' : '*',
  'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
}

const axiosInstance = axios.create(config)

axiosInstance.interceptors.request.use(
  conf => conf,
  error => Promise.reject(error) // Do something with request error
)

export default {
  install: (vueInstance) => {
    vueInstance.axios = axiosInstance
    window.axios = axiosInstance
    Object.defineProperties(vueInstance.config.globalProperties, {
      axios: {
        get() {
          return axiosInstance
        },
      },
      $axios: {
        get() {
          return axiosInstance
        },
      },
    })
  },
}