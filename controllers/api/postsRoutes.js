const router = require('express').Router();
const { Posts } = require('../../models');
const withAuth = require('../../utils/auth');

// Make post
router.post('/', withAuth, async (req, res) => {
  try {
    const newPosts = await Posts.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete post
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const PostsData = await Posts.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!PostsData) {
      res.status(404).json({ message: 'No Posts found with this id!' });
      return;
    }

    res.status(200).json(PostsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
