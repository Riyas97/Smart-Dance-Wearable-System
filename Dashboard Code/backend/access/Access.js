const _ = require('lodash');

const { hashPassword, generateAccessToken } = require('../auth/Auth');
const AccessLogModel = require('../schemas/access-log-schema');

// TODO instead of storing it , decrypt it and check for user. 
const verifyUserAccess = async (body) => {
    let isUserGrantedAccess = false;
    try {
        await AccessLogModel.find({ email: body.email , role: body.role, accessToken: body.accessToken }, (err, docs) => {
            if (err) {
                throw new Error(err);
            }
            // console.log('login docs ', docs);

            if (docs.length = 1) {
                isUserGrantedAccess = true;
            }
        })
    } catch (error) {
        throw new Error(error);
    }

    return isUserGrantedAccess;
}

module.exports = {
    verifyUserAccess,
}


