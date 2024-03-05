import jwt from 'jsonwebtoken';

//create the token
//send the token in the cookie

export const createJWT = (payload) => {
    //payload which contains the data about user
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
    return token;
};

export const verifyJWT = (token) => {
    //token comes from the cookie
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
};
