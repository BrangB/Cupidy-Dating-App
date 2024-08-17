import jwt from 'jsonwebtoken'

export function verifyJWT(token, secretKey) {
    try {
        const decoded = jwt.verify(token, secretKey);
        console.log(decoded)
        return decoded;
    } catch (err) {
        return null; 
    }
}
