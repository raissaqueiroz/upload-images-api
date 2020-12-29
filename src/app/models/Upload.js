const { Schema, model } = require('mongoose');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
require('dotenv').config();

const UploadSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    key: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});

UploadSchema.virtual('url').get(function () {
	return `${process.env.UPLOADS_PATH}/files/${this.key}`;
});

UploadSchema.pre('remove', function(){
    return promisify(fs.unlink)(path.resolve(__dirname, "..", "..", "..", "tmp", "uploads", this.key));
});

module.exports = model('Upload', UploadSchema);