import jwt from "jsonwebtoken"

interface MyJwtPayload extends jwt.JwtPayload {
    email: string;
}
export default function getWebTokenEmail (token: string) {

    const decoded = jwt.decode(token) as MyJwtPayload
    return decoded?.email
}