const router = require('express').Router();

// 
const userRoutes = require('./userRoutes');
const postsRoutes = require('./postsRoutes');
const commentsRoutes = require('./commentsRoutes');

router.use('/users', userRoutes);
router.use('/posts', postsRoutes);
router.use('/comments', commentsRoutes);

module.exports = router;
