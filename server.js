const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');
dotenv.config({ path: './config.env' });

const PORT = process.env.PORT || 8000;
const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD);

mongoose
	.connect(DB, {
		useFindAndModify: true,
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => {
		console.log('MongoDB Connected');
	})
	.catch((err) => console.log(err));

app.listen(PORT, () => {
	console.log(`Server has started on port ${PORT}`);
});
