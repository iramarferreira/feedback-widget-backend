import express from 'express'
import cors from 'cors'
import {routes} from './routes'


const app = express()

// Aceitando JSON
app.use(express.json())

app.use(routes)

app.use(cors())




app.listen(3333, () => {
    console.log("HTTP server running")
})

// Banco de dados em desenvolvimento SQLite
// Prisma é um ORM para node