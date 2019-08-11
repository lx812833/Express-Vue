const JwtStrategy = require('../node_modules/passport-jwt/lib').Strategy;
const ExtractJwt = require('../node_modules/passport-jwt/lib').ExtractJwt;
const mongoose = require("mongoose");
// const User = mongoose.model.users;
const User = require("../database/schema/User")

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';

module.exports = passport => {
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        User.findById(jwt_payload.id)
            .then(user => {
                if (user) {
                    return done(null, user)
                }
                return done(null, false)
            })
            .catch(err => console.log("验证token失败", err))
    }));
} 