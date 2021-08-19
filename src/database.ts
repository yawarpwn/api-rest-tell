import mongoose, { MongooseOptions } from 'mongoose'
import config from './config'

(async () => {
	try{
		const mongooseOptions: MongooseOptions = {
			useUnifiedTopology: true,
			useNewUrlParser: true,

			//user: config.MONGO_USER, 
		}
		const db = await mongoose.connect(`mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}@${config.MONGO_HOST}/${config.MONGO_DATABASE}?retryWrites=true&w=majority`, mongooseOptions)
		console.log('database is connect to:', db.connection.name)
	}	catch(err) {
		console.error(err)
	}
})()
