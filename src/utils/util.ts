import Cookies from 'js-cookie'

class Utils {
    constructor() {
    }

    getCookie(key: string): string | undefined {
        return Cookies.get(key)
    }

    setCookie(key: string, value: string): string | undefined {
        return Cookies.set(key, value)
    }

    removeCookie(key: string){
        return Cookies.remove(key)
    }
}

const utils = new Utils()
export default utils
