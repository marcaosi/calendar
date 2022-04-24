const fs = require('fs')

const dir = fs.readdirSync(__dirname)

const entities = {}

dir.forEach(file => {
    if(file !== 'index.js'){
        const entity = require(`${__dirname}/${file}`)

        entities[entity.name] = entity.obj
    }
})

module.exports = entities