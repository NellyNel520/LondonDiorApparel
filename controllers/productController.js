const { ProductCategory } = require('../models')

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

module.exports ={
  createProductCategory
}