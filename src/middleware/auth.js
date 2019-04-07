const jwt = require('jsonwebtoken');
const User = require('../models/user');


const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', ''); // Looks for header user is supposed to provide
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Validates the provided header
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token }); // Searches for user + token

        if (!user) {
            throw new Error()
        }

        req.user = user; // Pulls up user info if query is valid
        next() // Middleware told to move forward
    } catch(e) {
        res.status(401).send({ error: 'Please authenticate.' })
    }
};

module.exports = auth;