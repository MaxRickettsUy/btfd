const express = require('express');
const cors = require('cors');
const path = require('path')
const mongoose = require('mongoose');

require('dotenv').config(); 

const app = express();
const port = process.env.PORT || 5000;

const mongoInstance = process.env.MONGO_ATLAS || 'mongodb://localhost/stonks' || 'mongo://btfd-mongo/stonks'

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../ui/build')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../ui/build'))
})

mongoose.connect(mongoInstance, {
	useNewUrlParser: true, 
	useCreateIndex: true, 
	useUnifiedTopology: true, 
	useFindAndModify: false
})

const connection = mongoose.connection;
connection.once('open', () => {
	console.log('MongoDB database connection established successfully');
});

const holdingRouter = require('./routes/holdings');

app.use('/holdings', holdingRouter);

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
