import cookies from "js-cookie"


export default function setAuthCookie(token, position, image) {
    cookies.set("token", token, {
        expires: 1,
    })
    cookies.set("position", position, {
        expires: 1,
    })
    cookies.set("image", image, {
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

export function getAuthCookieImage() {
    const Image = cookies.get("image")
    return Image
}

export function RemoveAuthCookie() {
    cookies.remove("token")
    cookies.remove("position")
    cookies.remove("image")
}