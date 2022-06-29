import Axios from './request'

const request = {
    get(url, params) {
        const config = {
            method: 'GET',
            url: url
        }
        if (params) config.params = params
        return Axios(config)
    },

    post(url, params) {
        const config = {
            method: 'POST',
            url: url
        }
        if (params) config.params = params
        return Axios(config)
    }
}

export default request