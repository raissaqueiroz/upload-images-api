const { Schema, model } = require('mongoose');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const PostSchema = new Schema({
    name: String,
    size: Number,
    key: String,
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});

PostSchema.virtual('url').get(function () {
	return `http://localhost:3333/files/${this.key}`;
});

PostSchema.pre('remove', function(){
    return promisify(fs.unlink)(path.resolve(__dirname, "..", "..", "tmp", "uploads", this.key));
});

module.exports = model('Post', PostSchema);