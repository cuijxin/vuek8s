import axios from 'axios'
import {Message} from 'element-ui'
import router from '../router'

axios.interceptors.response.use(success => {
    if (success.status && success.status == 200 && success.data.status == 500) {
        Message.error({message: success.data.msg})
        return
    }
    if (success.data.msg) {
        Message.success({message: success.data.msg})
    }
    return success.data;
})