function homePage(req,res) {
    res.send("Home Page")
    got()
}

function aboutPage (req,res) {
    res.send("About Page")
}

module.exports = {
    homePage, aboutPage
}