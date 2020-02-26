const User = require('../models/User');
const Article = require('../models/Article');
module.exports = {
  async index(req, res) {
    const articles = await Article.findAll()

    return res.json(articles);
  },

  async byuser(req, res) {
    const{author_id}=req.params;
    const users= await User.findByPk(author_id,{
      include:{association:'articles'}
    });

    return res.json(users);
  },

  async update(req, res) {
    try {
      const { postId } = req.params;
      const [ updated ] = await Article.update(req.body, {
        where: { id: postId }
      });
      if (updated) {
        const updatedPost = await Article.findOne({ where: { id: postId } });
        return res.status(200).json({ post: updatedPost });
      }
      throw new Error('Post not found');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  async delete(req, res) {
    try {
      const { postId } = req.params;
      const deleted = await Article.destroy({
        where: { id: postId }
      });
      if (deleted) {
        return res.status(204).send("Post deleted");
      }
      throw new Error("Post not found");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  async store(req, res) {
    const{author_id}=req.params;
    const { title, content} = req.body;

    const user = await User.findByPk(author_id); 

    if (!user) {
        return res.status(400).json({ error: 'User not found' });
    }

    console.log(author_id);
    const article= await Article.create({ title, content,author_id });
   // console.log(articles.title);
   return res.json(article);
  }
};