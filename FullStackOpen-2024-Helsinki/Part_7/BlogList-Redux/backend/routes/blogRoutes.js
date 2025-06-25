const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

router.get('/', blogController.getBlogs);
router.get('/:id', blogController.getBlogById);
router.post('/', blogController.createBlog);
router.delete('/:id', blogController.deleteBlog);
router.put('/:id/like', blogController.likeBlog);

module.exports = router;
