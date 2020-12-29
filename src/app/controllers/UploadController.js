const Yup = require('yup');
const Upload = require('../models/Upload');

class UploadController {
	async index(req, res) {
		try {
			const response = await Upload.find({ ...req.query});
	
			return res.json(response);
		} catch (err) {
			return res.status(400).json({ error: err.message });
		}
	}

	async store(req, res) {
		const { originalname: name, size, filename: key} = req.file;

		const schema = Yup.object().shape({
			name: Yup.string().required(),
			key: Yup.string().required(),
			size: Yup.number().required(),
		});

		if (!(await schema.isValid({ name, key, size })))
			return res.status(400).json({
				error:
					'Falha na validação. O corpo da requisição não está correto.',
			});


		try {
			const response = await Upload.create({ name, size,  key});
	
			return res.json(response);
		} catch (err) {
			return res.status(400).json({ error: err.message });
		}

	}

	async destroy(req, res) {
		const { id } = req.params;
		
		try {
			const response = await Upload.findById(id);
			
			if(!response) return res.json({ error: 'o ID informado não foi localizado em nossa base de dados.' });
	
			await response.remove();
					
			return res.send();
		} catch (err) {
			return res.status(400).json({ error: err.message });
		}
	}
}

module.exports = new UploadController();
