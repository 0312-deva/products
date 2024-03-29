import  express, { json }  from "express"
import cros from "cors"
import data from "./data.json" assert { type : "json"}

const products=Object.entries(data)[0][1]

const app = express();
app.use(express.urlencoded())
app.use(express.json())
app.use(cros())

app.get('/products', (req, res) => {
res.send(products)
} )


app.listen(3000, () => console.log("server started"))




