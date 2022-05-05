import {PrismaClient} from "@prisma/client"

export const prisma = new PrismaClient({
    // qualquer coisa que faça, apareça no log 
    log:['query'],
})