require('dotenv').config()
const app = require('./src/utils/App')
const cors = require('cors')
const PORT = process.env.PORT

const routes = require('./src/routes')

app.use(cors())
app.use(routes)

app.listen(PORT, err => {
    if(err){
        console.err(err)
    }else{
        console.log('Listening on ' + PORT)
    }
})