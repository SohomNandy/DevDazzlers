const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

function initialize(passport, getUserByEmail, getUserById) {
    // Function to authenticate users
    const authenticateUsers = async (email, password, done) => {
        // Get user by email from MongoDB
        const user = await getUserByEmail(email);
        if (!user) {
            return done(null, false, { message: "No user found with that email" });
        }
        try {
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user);
            } else {
                return done(null, false, { message: "Password Incorrect" });
            }
        } catch (error) {
            console.error(error);
            return done(error);
        }
    };

    passport.use(new localStrategy({ usernameField: 'email' }, authenticateUsers));

    passport.serializeUser((user, done) => done(null, user.id));

    passport.deserializeUser(async (id, done) => {
        // Get user by ID from MongoDB
        const user = await getUserById(id);
        if (!user) {
            return done(null, false, { message: "User not found" });
        }
        return done(null, user);
    });
}

module.exports = initialize;
