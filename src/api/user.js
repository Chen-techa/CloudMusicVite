import request from '../service/http'

class User {
    loginPhone(phone, password) {
        return request.post('login/cellphone?phone=' + phone + '&password=' + password)
    }

    loginEmail(email, password) {
        return request.post('login?email=' + email + '&password=' + password)
    }

    getUserDetails(uid) {
        return request.get('/user/detail?uid=' + uid)
    }
}

const Mine = new User()

export default Mine
