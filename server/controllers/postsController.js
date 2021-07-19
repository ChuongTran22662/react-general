import { PostModel } from '../models/postModel.js';

export const getPost = async (req, res) => {
    try {
        const posts = await PostModel.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

export const createPost = async (req, res) => {
    try {
        const newPost = req.body;

        const post = new PostModel(post);
        await post.save();
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

export const updatePost = async (req, res) => {
    try {
        const updatePost = req.body;

        const post = new PostModel.findOneAndUpdate(
            { _id: updatePost._id },
            updatePost,
            { new: true }
        );
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

export const deletePost = async (req, res) => {
    try {
        const deletePost = req.body;

        const post = new PostModel.deleteOne(
            { _id: deletePost._id }
        );
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

