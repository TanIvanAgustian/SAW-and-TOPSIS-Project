import cookies from "js-cookie"


export default function setAuthCookie(token, position) {
    cookies.set("token", token, {
        expires: 1,
    })
    cookies.set("position", position, {
        expires: 1,
    })
}

export function getAuthCookieToken() {
    const token = cookies.get("token")
    return token
}

export function getAuthCookiePosition() {
    const position = cookies.get("position")
    return position
}

export function RemoveAuthCookie() {
    cookies.remove("token")
    cookies.remove("position")
}