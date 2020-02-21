const { Model, DataTypes } = require('sequelize');

class Article extends Model {
  static init(sequelize) {
    super.init({
      title: DataTypes.STRING,
      content: DataTypes.STRING,
    }, {
      sequelize
    })
  }
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'author_id', through: 'user_articles', as: 'author_id' });
  }
}

module.exports = Article;