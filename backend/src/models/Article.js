const { Model, DataTypes } = require('sequelize');

class Article extends Model {
  static init(sequelize) {
    super.init({
      title: DataTypes.TEXT,
      content: DataTypes.TEXT,
      //author_id:DataTypes.INTEGER
    }, {
      sequelize
    })
  }
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'author_id', as: 'author' });
  }
}

module.exports = Article;