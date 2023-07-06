const Product = require('./../models/product')
const fs = require('fs')

exports.getAddProduct = (req,res,next) => {
    res.render('add-products',{pageTitle:'Form', path:'/admin/add-products'})
    // res.send("<form action='/products' method='POST'><input type='text' name='title'/><button>Send</button></form>")
    // res.sendFile(path.join(rootDir, 'views', 'add-products.html'))
}

exports.postAddProduct = (req,res,next) => {
    // products.push({title: req.body.title})
    const product = new Product(req.body.title);
    product.save()
    const jsonString = JSON.stringify(req.body);
    fs.writeFileSync("message.txt", jsonString)
    res.redirect("/")
}

exports.getProduct = (req,res,next) => {
    // const products = adminProduct.products;
   Product.fetchAll((product)=>{
        res.render('shop',
        {prods:product, 
        pageTitle:'Shop',
        path:'/',
        hasProducts: product.length > 0})
    });
   
    // This is for Simple HTML file code which you are observing in below code
    // console.log(adminProduct.products)
    // res.sendFile(path.join(rootDir,'views', 'shop.html'))
}

