const express = require('express');
const app = express();
const { createLogInstance, verifyUserCredentials, createAccessToken } = require('./Login');


module.exports = app;

app.post(
    '/attempt',
    async (req, res) => {
        try {
            // creates user documents in users collection 
            console.log('Login Attempt: ', JSON.stringify(req.body));
            const userCredentials = await verifyUserCredentials(req.body);

            if (userCredentials.isUserGrantedAccess) {
                const token = await createAccessToken(userCredentials.email, userCredentials.role);
                // console.log('hereee' , token);
                // await createLogInstance(userCredentials.email, userCredentials.role, token);
                const response = {
                    success: true,
                    name: userCredentials.name,
                    email: userCredentials.email,
                    role: userCredentials.role,
                    accessToken: token
                }
                console.log('LOGIN response', response);
                return res.status(200).json(response);
            } else {
                return res.json({ success: false });
            }
        } catch (error) {
            return res.status(403).json({ error });
        }
})