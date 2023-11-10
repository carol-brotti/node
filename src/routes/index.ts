import { Router, Request, Response } from 'express'

const router = Router()

//criando a primeira rota
router.get("/", (req, res) => {

    let idade: number = 18
    let mostraIdade: boolean = false

    if (idade > 18) {
        mostraIdade = true
    }

    //let user: string = 'Carolina'
    res.render('home', {
        nome: 'José',
        age: 28,
        lastname: 'Silva',
        produtos:[
            {titulo: 'Protudo X', preco: 200},
            {titulo: 'Protudo Y', preco: 200},
            {titulo: 'Protudo Z', preco: 200}
          ]        
    })

})


router.get('/contato', (req: Request, res: Response) => {
    res.render("Está é a página de contato")
})


router.get('/sobre', (req: Request, res: Response) => {
    res.render("Sobre nós")
})

//ROTA ESTÁTICA
router.get('/noticia/titulo-da-noticia', (req: Request, res: Response) => {
    res.send("Noticia Aparecendo na tela")
})

//ROTA DINÂMICA
router.get('/noticia/:slug', (req: Request, res: Response) => {
    let slug: string = req.params.slug
    res.send(`Notícia: ${slug}`)
})

router.get('/voo/:origem-:destino', (req: Request, res: Response) => {
    let { origem, destino } = req.params
    res.send(`Procurandos voos de ${origem} até ${destino}`)
})



export default router