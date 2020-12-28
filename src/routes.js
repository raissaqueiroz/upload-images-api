const routes = require('express').Router();
const multer = require('multer');

const multerConfig = require('./config/multer');
const Post = require('./models/Post');

routes.get("/posts", async (req, res) => {    
    try {
        const response = await Post.find({ ...req.query});

        return res.json(response);
    } catch (err) {
		return res.status(400).json({ error: err.message });
	}
});

routes.post("/posts", multer(multerConfig).single('file'), async (req, res) => {
    const { originalname: name, size, filename: key} = req.file;
    
    try {
        const response = await Post.create({ name, size,  key});

        return res.json(response);
    } catch (err) {
		return res.status(400).json({ error: err.message });
	}
});

routes.delete("/posts/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const response = await Post.findById(id);

        if(!response) return res.json({ error: 'o ID informado não foi localizado em nossa base de dados.' });

        await response.remove();
                
        return res.send();
    } catch (err) {
		return res.status(400).json({ error: err.message });
	}
});



module.exports = routes;