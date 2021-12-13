import Post from "./model/Post.js";

class TasksController {
    async getAll(req, res) {
        try {
            const posts = await Post.find()
            return res.json(posts)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async create(req, res) {
        try {
            const post = await Post.create({
                title: req.body.title,
                completed: false,
                order: 30
            })
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async delete(req, res) {
        try {
            if (!req._id) {
                res.status(400).json({message: 'id не указан'})
            }
            await Post.findByIdAndDelete(req.body._id)
            res.status(200).json({message: 'Задача была удалена'})
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async changeTask(req, res) {
        try {
            if (!req.body._id) {
                res.status(400).json({message: 'id не указан'})
            }
            await Post.findByIdAndUpdate(req.body._id, req.body)
            return res.status(200).json({message: 'Задача была изменена'})
        } catch (e) {
            res.status(500).json(e)
        }
    }

}

export default new TasksController

