const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;

module.exports.authenticate = (req, res, next) => {
    const userToken = req.cookies.usertoken; 

    jwt.verify(userToken, secretKey, (err, payload) => {
        if (err) {
            res.status(401).json({ verified: false });
        } else {
            next();
        }
    });
};
