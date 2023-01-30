const { AuthenticationError } = require('apollo-server-express');
const { User, Story } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query:{
        getAllUsers: async () =>{
          return await User.find({})
        },

        user: async (parent, args, context) =>{
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                return userData;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        
        story: async (parent, args) =>{
            return await Story.findById(args.id);
        },

        stories: async (parent, args)=>{
            return await Story.find({});
        }
        },

    Mutation:{
        //Add a user
        addUser: async(parent, args) => {
             try {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        }catch(err){
            console.log(err);
        }
        },

        login: async (parent, { email, password }) =>{
            const user = await User.findOne({email});
            if(!user){
                throw new AuthenticationError('No user found with this email address!');
            }
            const correctPw = await user.isCorrectPassword(password);
            if(!correctPw){
                throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);
            return { token, user };
        },
        
        // Delete a user
        deleteUser: async (parent, args) => {
            try{
            Story.find({ userId: args.id }).then((stories) => {
              stories.forEach((story) => {
                story.remove();
              });
            });
    
            return await User.findByIdAndRemove(args.id);
        }catch(err){
            console.log(err);
        }
        },
       // Add a story
        addStory: async (parent, args) => {
            try{
                const story = new Story({
                    title: args.title,
                    description: args.description,
                    image: args.image,
                    userId: args.userId,
                  });
          
                  return await story.save();
            }catch(err){
                console.log(err);
            }
        },
        
        // Delete a story
        deletStory: async (parent, args) =>{
            return await Story.findByIdAndRemove(args.id);
        },

        // Update a story
        updateStory: async (parent, args) => {
            return await Story.findByIdAndUpdate(
                args.id,
                {
                  $set: {
                    title: args.title,
                    description: args.description,
                    image: args.image,
                  },
                },
                { new: true }
              );
        }
    }
}

module.exports = resolvers;