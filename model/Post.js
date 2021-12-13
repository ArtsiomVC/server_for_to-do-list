import mongoose from "mongoose"

const Post = new mongoose.Schema({
    title: {type: String, required: true},
    completed: {type: Boolean, required: true},
    order: {type: Number, required: true}
})

export default mongoose.model("Post", Post)