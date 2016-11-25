module.exports = {
    auth: {
        Account: require('./src/auth/account'),
        Profile: require('./src/auth/profile'),
        Role: require('./src/auth/role')
    },
    master: {
        Project: require('./src/master/project')
    },
    map: require('./src/map'),
    validator: require('./src/validator')
}
