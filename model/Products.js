import { mongoose } from "mongoose";

const productsSchema = new mongoose.Schema({
	id: String,
	url: String,
	detailUrl: String,
	title: Object,
	price: Object,
	quantity: Number,
	description: String,
	discount: String,
	tagline: String,
});

const Products = mongoose.model("Product", productsSchema);

export default Products;
