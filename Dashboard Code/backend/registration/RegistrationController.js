const express = require('express');
const { body, validationResult } = require('express-validator');
const { decodeAccessToken } = require('../auth/Auth');
const app = express();

const { UserCreate, CoachTreeCreate, searchForConflictUsers, createAccessToken, loginUser } = require('./Registration');

app.post(
    '/create',
    async (req, res) => {
        try {
            // creates user documents in users collection 
            console.log('register/create invoked ', JSON.stringify(req.body));
            const isConflictsPresent = await searchForConflictUsers(req.body);
            // console.log('boolean ', isConflictsPresent)
            if (isConflictsPresent) {
                return res.json({ success: false })
            } else {
                await UserCreate(req.body);
                const token = await createAccessToken(req.body);
                await CoachTreeCreate(req.body);
                await loginUser(req.body, token);
                const response = {
                    success: true,
                    name: req.body['coach'].name,
                    email: req.body['coach'].email,
                    role: req.body['coach'].role,
                    accessToken: token
                }
                return res.status(200).json(response);
            }            
        } catch (error) {
            console.log(error);
            return res.status(403).json({ error });
        }
})

app.post(
    '/decode',
    async (req, res) => {
        console.log('req ' + JSON.stringify(req.headers));
        console.log(`headers access token ${req.headers.authorization}` )
        const {email, role} = decodeAccessToken(req.headers.authorization);
        return res.json({email, role});
    }
)


module.exports = app;