const { Book, User } = require('../models');

const resolvers = {
    Qeury: {
       user: async () => {
        const params = _id ? {_id} : {};
        return User.findOne(params);
       },
       users: async () => {
        return User.find();
       }
    },
    Mutation: {
        login: async () => {
            const params = {$or: [{username: body.username}, {email: body.email }]};
            return User.findOne(params);
        },
        createUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
          },
        saveBook: async () => {
            
        }
        
    },
};

module.exports = resolvers;