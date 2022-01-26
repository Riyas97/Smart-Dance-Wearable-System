const _ = require('lodash');

const UserModel = require('../schemas/user-schema');
const CoachTreeModel = require('../schemas/coach-tree-schema');
const { hashPassword, generateAccessToken } = require('../auth/Auth');
const { createLogInstance } = require('../login/Login');

const searchForConflictUsers = async (body) => {
    let isConflictsPresent = false;
    for (let key of Object.keys(body)) {
        try {
            await UserModel.find({ email: body[key].email, username: body[key].username, role: body[key].role }, (err, docs) => {
                // console.log('docs', JSON.stringify(docs));
                // console.log('docs length', docs.length);
                if (docs.length >= 1) {
                    isConflictsPresent = true;
                }
                if (err) {
                    throw new Error(err);
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    if (isConflictsPresent) {
        return true;
    } else {
        return false;
    }
}

const UserCreate = async (body) => {
    for (let key of Object.keys(body)) {
        const hashedPassword = await hashPassword(body[key].password);
        // console.log(`Before user is saved in DB: ${body[key].name}, ${body[key].email}, ${body[key].username}, ${hashedPassword}, ${body[key].role}`);
        const userInstance = new UserModel({ name: body[key].name, email: body[key].email, username: body[key].username, password: hashedPassword, role: body[key].role });
        await userInstance.save((err) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`user create ${key} saved!`);
            }
        })
    }
}

const createAccessToken = (body) => {
    const token = generateAccessToken({ email: body['coach'].email, role: body['coach'].role });
    console.log(`accessToken generated: ${token}`);
    return token;
}

const CoachTreeCreate = async (body) => {
    const coachTreeInstance = new CoachTreeModel({ 
        coach_username: body['coach'].username, 
        traineeOne_username: body['trainee1'].username,
        traineeTwo_username: body['trainee2'].username,
        traineeThree_username: body['trainee3'].username 
    });

    await coachTreeInstance.save((err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`coach tree entity relationship ${body['coach'].username} , ${body['trainee1'].username}, ${body['trainee2'].username}, ${body['trainee3'].username} saved!`);
        }
    })
}

const loginUser = async (body, token) => {
    await createLogInstance(body['coach'].email, body['coach'].role, token);
}


module.exports = {
    UserCreate,
    CoachTreeCreate,
    searchForConflictUsers,
    createAccessToken,
    loginUser
};