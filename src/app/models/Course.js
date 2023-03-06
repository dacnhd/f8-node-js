const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const slug = require('mongoose-slug-generator')
mongoose.plugin(slug)

const Course = new Schema({
    name: { type: String, required: true },
    description: { type: String, maxLength: 600 },
    image: String,
    videoId: String,
    slug: { type: String, slug: 'name', unique: true }
}, {
    // bằng với việc tạo createdAt và updatedAt
    timestamps: true
});

module.exports = mongoose.model('Course', Course)
