const { Book, User } = require('../models');

const resolvers = {
    Qeury: {
       user: async () => {
        const params = _id ? {_id} : {};
        return User.find(params);
       }
    },
    Mutation: {

    },
};

module.exports = resolvers;