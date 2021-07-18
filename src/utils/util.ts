import Cookies from 'js-cookie'

class Utils {
    static getCookie(key: string): string | undefined {
        return Cookies.get(key)
    }

    static setCookie(key: string, value: string): string | undefined {
        return Cookies.set(key, value)
    }

    static removeCookie(key: string):void{
        return Cookies.remove(key)
    }
}
export default Utils
