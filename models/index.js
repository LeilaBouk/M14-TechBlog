const User = require('./User');
const Posts = require('./Posts');
const Comments = require('./Comments');

// A user can have many posts
User.hasMany(Posts, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// A post belongs to a user
Posts.belongsTo(User, {
    foreignKey: 'user_id'
});

// A user can have many comments 
User.hasMany(Comments, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// A comment belongs to a user
Comments.belongsTo(User, {
    foreignKey: 'user_id'
});

// A post can have many comments
Posts.hasMany(Comments, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

module.exports = { User, Posts, Comments };