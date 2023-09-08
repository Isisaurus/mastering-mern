import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    } catch (err) {
        res.status(404).json({ message: error.message });
    }
};
export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(200).json(newPost);
    } catch (err) {
        res.status(401).json({ message: err.message });
    }
}

// https://cloud.mongodb.com/v2/64e8b772ad10f548e4274ed4#/overview