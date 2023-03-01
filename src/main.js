import { createApp} from 'vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// axios.defaults.baseURL = `${process.env.VUE_APP_API_URL}${process.env.VUE_APP_PUBLIC_PATH}`
axios.defaults.baseURL = 'http://localhost:8080'
// axios.defaults.headers.common = {
//     'X-Requested-With': 'XMLHttpRequest',
//     'Access-Control-Allow-Origin': '*'
// }
// axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json';
const reqInterceptor = axios.interceptors.request.use(config => {
    // config.headers.authorization = 'token';
    // config.headers['Access-Control-Allow-Origin'] = '*';  // CORS 설정(모든 리소스 허용)
    // config.headers.Authorization = store.state.loginUserInfo.token;
    if(store.state.loginUserInfo.token != '')
        config.headers["Authorization"] = 'Bearer ' + store.state.loginUserInfo.token;
    console.log('Request Interceptor', config)
    
    // 헤더를 변경하려면 headers 오브젝트를 변경한다
    // config.headers.Authorization = 'something others'
    // 임의의 헤더를 새로 설정할 수 있다
    // config.headers['SOMETHING'] = 'some value'
    return config
})

// Response Interceptor
const resInterceptor = axios.interceptors.response.use(res => {
    console.log('Response Interceptor', res)
    return res
})
const app = createApp(App)
app.use(store).use(router).mount('#app')
app.config.globalProperties.$axios = axios