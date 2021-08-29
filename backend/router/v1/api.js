const express = require('express');
const router = express.Router()
const con = require('../../Controllers')

router.use(function(req,res,next) {
    console.log("Time:", Date.now())
    next()
})

router.get('/', con.homePage)

router.get('/about', con.aboutPage)

module.exports = router