const fs = require('fs')
const dir = fs.readdirSync(__dirname)

const router = require('express').Router()

dir.forEach(file => {
    if(file !== 'index.js'){
        const route = require(`${__dirname}/${file}`)

        router.use(route)
    }
})

module.exports = router