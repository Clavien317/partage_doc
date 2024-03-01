const express = require("express")
const app = express()
const port = 9000
const cors = require("cors")
const route = require("./routes/route")


app.use(cors())
app.use(express.json())
app.use(route)
app.get("/",(req,res)=>
{
    res.send("Partage fichier et document au sein d'ecole")
})


app.listen(port, console.log(`serveur demarre sur http://localhost:${port}`))