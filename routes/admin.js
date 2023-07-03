app.use('/add-products',(req,res,next) => {
    // console.log("First Middleware")
    res.send("<form action='/products' method='POST'><input type='text' name='title'/><button>Send</button></form>")
})

app.use('/products',(req,res,next) => {
    console.log(req.body)
    const jsonString = JSON.stringify(req.body);
    fs.writeFileSync("message.txt", jsonString)
    res.redirect("/")
})
