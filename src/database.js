const mongoose = require('mongoose');

require('dotenv').config();

class Database {
	createConnection() {
		mongoose.connect(process.env.MONGO_URL, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useCreateIndex: true,
		});

		this.logger();
	}

	logger() {
		this.dbConnection = mongoose.connection;
		this.dbConnection.on('connected', () =>
			console.log('Mongoose está conectado. ')
		);
		this.dbConnection.on('error', (error) =>
			console.error.bind(console, `Erro na conexão: ${error}`)
		);
	}
}

module.exports = new Database();
