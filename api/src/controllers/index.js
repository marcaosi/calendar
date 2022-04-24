const fs = require('fs')

const dir = fs.readdirSync(__dirname)

const controllers = {}

dir.forEach(file => {
    if(file !== 'index.js'){
        const controller = require(`${__dirname}/${file}`)

        controllers[controller.name] = controller.obj
    }
})

module.exports = controllers