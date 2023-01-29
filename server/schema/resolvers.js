const { User } = require("../models");

const resolvers = {
    Query:{
        getAllUsers: async () =>{
          return await User.find({})
        }
    },
    Mutation:{
        addUser: async(parent, args) => {
            const result = await User.create({
                firstName: args.firstName,
                lastName: args.lastName,
                email: args.email,
                password: args.password,
                description: args.description
            })
            return result;
        }
    }
}

module.exports = resolvers;