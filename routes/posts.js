const express = require('express');
const Post = require('../models/Post');
const auth = require('../middleware/auth');
const router = express.Router();

// POST /posts
router.post('/', auth, async (req, res) => {
    const { title, content } = req.body;
    const post = new Post({ title, content, owner: req.user._id });
    await post.save();
    res.status(201).json(post);
});

// GET /posts
router.get('/', async (req, res) => {
    const posts = await Post.find().populate('owner', 'name');
    res.json(posts);
});

// GET /posts/:id
router.get('/:id', async (req, res) => {
    const post = await Post.findById(req.params.id).populate('owner', 'name');
    if (!post) return res.status(404).send('Post not found');
    res.json(post);
});

// PUT /posts/:id
router.put('/:id', auth, async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (!post || post.owner.toString() !== req.user._id.toString()) {
        return res.status(403).send('Not authorized');
    }
    post.title = req.body.title || post.title;
    post.content = req.body.content || post.content;
    await post.save();
    res.json(post);
});

// DELETE /posts/:id
router.delete('/:id', auth, async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (!post || post.owner.toString() !== req.user._id.toString()) {
        return res.status(403).send('Not authorized');
    }
    await post.remove();
    res.send('Post deleted');
});

// POST /posts/:id/like
router.post('/:id/like', auth, async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).send('Post not found');
    const index = post.likes.indexOf(req.user._id);
    if (index === -1) {
        post.likes.push(req.user._id); // Like the post
    } else {
        post.likes.splice(index, 1); // Unlike the post
    }
    await post.save();
    res.json(post);
});

module.exports = router;