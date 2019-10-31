import {observable} from 'mobx'

class ObservableTokenStore {
    @observable token = ""

    updateToken(token) {
        this.token = token
    }

    getToken() {
        return this.token
    }
}

const observableTokenStore = new ObservableTokenStore()
export default observableTokenStore