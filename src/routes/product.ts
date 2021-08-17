import { Schema, model } from 'mongoose'

const videoSchema = new Schema({
	name: String,
	desc: { 
		parraph1: {
			type: String,
			require: true,
		},
		parraph2: String,
		parraph3: String,
		parraph4: String
	},
	price: Number,
	category: String,
	available: Boolean,
	fichaTecnica: String,
	pedidoMinimo: Number,
	sku: String,
	rating: Number,
	img: {
		img1: String,
		img2: String,
		img3: String,
		img4: String
	},

	//title: {
		//type: String,
		//require: true,
		//trim: true
	//},
	//description: {
		//type: String,
		//trim: true
	//},
	//url: {
		//type: String,
		//require: true,
		//trim: true
	//},
}, {
	versionKey: false,
	timestamps: true
})

export default model ('Product', videoSchema)
