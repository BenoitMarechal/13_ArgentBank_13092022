const mongoose = require('mongoose');
const databaseUrl =
	process.env.DATABASE_URL || 'mongodb://localhost/argentBankDB';
console.log(databaseUrl);

module.exports = async () => {
	try {
		await mongoose.connect("mongodb+srv://Benoit_Marechal:Koenigsbier2!@cluster0.dqbkxwh.mongodb.net/ArgentBank?retryWrites=true&w=majority", { useNewUrlParser: true });
		console.log('Database successfully connected');
	} catch (error) {
		console.error(`Database Connectivity Error: ${error}`);
		throw new Error(error);
	}
};
