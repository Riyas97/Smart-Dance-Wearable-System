const express = require('express');
const app = express();
const { verifyUserAccess } = require('./Access');
const { authChecker } = require('../auth/Auth');


module.exports = app;

app.get(
    '/access', authChecker,
    async (req, res) => {
        try {
            console.log('User Access: ', JSON.stringify(req.user));
            // const isUserGrantedAccess = await verifyUserAccess(req.body);
            const {success, email, role} = req.user
            return res.json({ success, email, role });

        } catch (error) {
            return res.status(403).json({ error });
        }
})