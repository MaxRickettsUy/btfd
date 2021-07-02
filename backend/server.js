const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path')
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const mongoInstance = process.env.NODE_ENV === 'production' ? process.env.MONGO_ATLAS : 'mongodb://localhost/stonks'
// for docker  || 'mongo://btfd-mongo/stonks'

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());

if(process.env.NODE_ENV === "production"){
	app.use(express.static(path.join(__dirname, '../ui/build')))

	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, '../ui/build'))
	})
}

mongoose.connect(mongoInstance, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false
})

app.use(
  cors({
    origin: [
		// `${process.env.FRONT_URL}`,
		'http://localhost:3000'
    ],
    credentials: true
  })
);

const connection = mongoose.connection;
connection.once('open', () => {
	console.log('MongoDB database connection established successfully');
	console.log(`Connected to: ${mongoInstance}`)
});

const holdingRouter = require('./routes/holdings');
const authRouter = require('./routes/auth');

// app.use('/', loginRouter);
app.use('/holdings', holdingRouter);
app.use('/auth', authRouter);

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});