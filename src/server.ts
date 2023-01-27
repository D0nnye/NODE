/*npm install express
npm install express*/

import express from 'express'
import { Server } from 'http'

const server = express()

//Rota estatica
server.get('/',(req,res) =>{
    res.send("Mãe do Guilherme é enormeeee!")
})

server.get('/mae',(req,res) =>{
    res.send("Mãe do Guilherme é uma bola!")
})

//Rota dinamica
server.get('/noticia/:slug',(req,res) =>{
    let slug: string =req.params.slug
    res.send(`Noticia: ${slug}`)
})

server.get('/voo/:origem-:destino',(req,res) =>{
    let {origem, destino} = req.params
    res.send(`Procurando voos de ${origem} até ${destino}`)
})

//rota dinamica



server.listen(3000)


