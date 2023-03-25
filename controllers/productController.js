const { ProductCategory, Product } = require('../models')

// Create Products & Product Categories
const createProductCategory = async (req, res) => {
	try {
		const category = await new ProductCategory(req.body);
		await category.save();
		return res.status(201).json({
			category,
		});
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

const createProduct = async (req, res) => {
	try {
		console.log(req.body)
		const product = await new Product(req.body);
		await product.save();
		if (req.body.categoryId) {
			const categoryId = await ProductCategory.findById(req.body.categoryId)
			categoryId.products.push(product._id);
			await categoryId.save();
		}

		return res.status(201).json({
			product,
		});
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

// Get ALL Products & Product Categories

const getAllCategories = async (req, res) => {
	try {
		const categories = await ProductCategory.find();
		return res.status(200).json({ categories });
	} catch (error) {
		return res.status(500).send(error.message);
	}
};

const getAllProducts = async (req, res) => {
	try {
		const products = await Product.find();
		return res.status(200).json({ products });
	} catch (error) {
		return res.status(500).send(error.message);
	}
};

// Get Products & Product Categories By ID

const getCategoryById = async (req, res) => {
	try {
		const { id } = req.params;
		const category = await ProductCategory.findById(id);
		if (category) {
			return res.status(200).json({ category });
		}
		return res.status(404).send('Category with the specified ID does not exists');
	} catch (error) {
		return res.status(500).send(error.message);
	}
};

const getProductById = async (req, res) => {
	try {
		const { id } = req.params;
		const product = await Product.findById(id);
		if (product) {
			return res.status(200).json({ product });
		}
		return res
			.status(404)
			.send('Product with the specified ID does not exists');
	} catch (error) {
		return res.status(500).send(error.message);
	}
};





module.exports ={
  createProductCategory,
	createProduct,
	getAllCategories,
	getAllProducts,
	getCategoryById,
	getProductById

}