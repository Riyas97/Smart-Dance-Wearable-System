const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../schemas/user-schema');

const saltRounds = 10;
const secret = process.env.JWT_SECRET;

const hashPassword = async (password) => {
    const hashed = await bcrypt.hash(password, saltRounds);
    return hashed;
}

const comparePassword = async (givenPassword, dbPassword) => {
    const match = await bcrypt.compare(givenPassword, dbPassword);
    return match;
}

const generateAccessToken = (payload) => {
    // { expiresIn: 60 * 60 * 24 }
    return jwt.sign(payload, secret);
}

const decodeAccessToken = (token) => {
    return jwt.verify(token, secret);
}

const validateUserWithDB = async (email, role ) => {
    let isUserGrantedAccess = false;
    let verifiedEmail = '';
    let verifiedRole = '';
    try {
        await UserModel.find({ email, role }, (err, docs) => {
            if (err) {
                throw new Error(err);
            }
            // console.log('login docs ', docs);

            if (docs.length = 1) {
                isUserGrantedAccess = true;
                verifiedEmail = docs[0].email;
                verifiedRole = docs[0].role;
            } 
        })
    } catch (error) {
        throw new Error(error);
    }

    if (isUserGrantedAccess) {
        return { success: isUserGrantedAccess, email: verifiedEmail, role: verifiedRole };
    } else {
        return { success: isUserGrantedAccess }
    }
}

const authChecker = (req, res, next) => {
    try {
        const accessToken = req.headers.authorization;
        const { email, role } = decodeAccessToken(accessToken);
        const responseFromDB = validateUserWithDB(email , role);

        req.user = {
            email: responseFromDB.email,
            role: responseFromDB.role,
            success: responseFromDB.success
        };
        next();
    } catch(e) {
        res.status(401);
        return res.json({ error: 'Unauthorized'});
    }
}

module.exports = {
    hashPassword,
    comparePassword,
    generateAccessToken,
    decodeAccessToken,
    authChecker
}