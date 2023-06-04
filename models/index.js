const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Pub = require('./Pub');

User.hasMany(Post, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

User.hasMany(Comment, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'userId',
});

Comment.belongsTo(Post, {
  foreignKey: 'postId'
});

Pub.hasMany(Post, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Pub.hasMany(Comment, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});


module.exports = {
  User,
  Comment,
  Post,
  Pub
};