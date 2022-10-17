const db = require("../models/login")
const ROLES = db.ROLES
const User = db.user;

const checkDuplicateUsername = (req, res, next) => {
    User.findOne({
        username: req.body.username
    }).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        if (user) {
            res.status(400).send({ message: "Failed! Username already in use!" })
            return;
        }
        next();
    }
    )
}

const verifySignUp = {
    checkDuplicateUsername
}

module.exports = verifySignUp;
