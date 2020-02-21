const User = require('../models/User');
const Article = require('../models/Article');
module.exports = {
  async index(req, res) {
    const articles = await Article.findAll()

    return res.json(articles);
  },

  async store(req, res) {
    const{author_id}=req.params;
    const { title, content} = req.body;

    const user = await User.findByPk(author_id); 

    if (!user) {
        return res.status(400).json({ error: 'User not found' });
    }

    console.log(title);
    const articles= await Article.create({ title, content, author_id});
   // console.log(articles.title);
   //eturn res.json(articles);
  }
};