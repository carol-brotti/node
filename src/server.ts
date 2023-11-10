//importando a biblioteca express
import  express,{Request, Response}from 'express'
import {Server} from 'http'
import path from 'path'
// importanto mustache
import mustache from 'mustache-express'
//importando nosso arquivo index.ts
import mainRoutes from './routes/index'

//usando EXPRESS
const server = express()

// confgurando mustache
server.set('view engine', 'mustache')
//configurando aminho da psta views
server.set('views', path.join(__dirname, 'views'))
server.engine('mustache', mustache())



// configurando caminho da pasta public
server.use(express.static(path.join(__dirname,'../public')))

server.use(mainRoutes)

// criando a pagina nao encontrada
server.use((req:Request, res:Response) =>{
     res.status (404).send("Página náo encontrada")
})


//gerando o servidor na porta 3000
server.listen(3000)
