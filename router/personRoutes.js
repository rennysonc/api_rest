const res = require('express/lib/response')

const Router = require('express').Router()
// Rotas API:

app.post('/person', async (req, res) => {

    const {name,salary,approved} = req.body
    if (!name){
        res.status(422).json({message: 'O nome é obrigatorio!'})
    }
    const person = {
        name,
        salary,
        approved
    }

    try {
        await Person.create(person)
        res.status(201).json({message: 'Pessoa inserida com suceeso!'})

    } catch (error){
        res.status(500).json({message: error})
    }

})
//Porta Express:
const DB_USER = 'rennyson'
const DB_PASSWORD = encodeURIComponent('a/t5nZaSQyjLiNf17v')
//mongodb+srv://rennyson:t5nZaSQyjLiNf17v@cluster-api.w09h2.mongodb.net/bancoapi?retryWrites=true&w=majority

//Estabelecendo Conexão com o Banco API
mongoose.connect(
    `mongodb+srv:${DB_USER}:${DB_PASSWORD}@cluster-api.w09h2.mongodb.net/bancoapi?retryWrites=true&w=majority`
)
.then(() => {
    console.log('Conectado ao MongoDB')
})
.catch((err) => console.error(err))
app.listen(3000)
// Leitura dos dados

router.get('/, async'(req, res) => {
    try {
        const people = await.Person.find()
    }catch(error){
        res.status(500).json({error: error})
    }
})
module.exports = router