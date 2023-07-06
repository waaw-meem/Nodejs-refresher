exports.errorMessage = (req,res,next) => {
    res.status(404).render('404page',({pageTitle:'404 Page'}))
    // res.status(404).sendFile(path.join(rootDir,'views','404page.html'))
}

