const db = require('../db')
const ProductCategory = require('../models/productCategory')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const productCategories = [
        {
          name: "short sleeve t-shirts",
          code: "SST",
          description:"short sleeve t-shirts unisex",
          products: [],
        },
        {
          "name": "long sleeve t-shirts",
          "code": "LST",
          "description":"long sleeve t-shirts unisex",
          "products": [],
        },
        {
          "name": "hoodies",
          "code": "HOD",
          "description":"unisex hoodies",
          "products": [],
        },
        {
          "name": "Kids t-shirts",
          "code": "KID",
          "description":"unisex youth t-shirt",
          "products": [],
        },
        {
          "name": "Baby & Toddler",
          "code": "BT",
          "description":"unisex onesies and t-shirts",
          "products": [],
        },
        
    ]

    await ProductCategory.insertMany(productCategories)
    console.log("Created some categories!")
}
const run = async () => {
    await main()
    db.close()
}

run()