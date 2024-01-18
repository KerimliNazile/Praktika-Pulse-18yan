import express from 'express'
const app = express()
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose, { Schema } from 'mongoose'
dotenv.config()
app.use(cors())
app.use(express.json())

const dinnerSchema = new Schema({
    name: { type: String, required: true },
    info: { type: String, required: true },
    price: { type: Number, required: true }
})

const Dinners = mongoose.model("Dinners", dinnerSchema)

app.get('/dinners', async (req, res) => {
    try {
        const dinners = await Dinners.find({})
        res.send(dinners)
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

app.get('/dinners/:id', async (req, res) => {
    try {
        const dinners = await Dinners.findById(req.params.id)
        res.send(dinners)
    } catch (error) {
        res.status(500).json({ message: error })
    }
})


app.post('/dinners', async (req, res) => {
    try {
        const dinner = new Dinners({
            name: req.body.name,
            info: req.body.info,
            price: req.body.price
        })
        await dinner.save()
        res.send({ message: "Created" })
    } catch (error) {
        res.status(500).json({ message: error })
    }

})





app.delete('/dinners/:id', async (req, res) => {
    try {
        const dinners = await Dinners.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "Deleted" })
    } catch (error) {
        res.status(500).json({ message: error })
    }
})


const port = process.env.PORT
const url = process.env.URL.replace("<password>", process.env.PASSWORD)
mongoose.connect(url)
    .then(() => console.log("Db connect"))
    .catch(err => console.log("Db not connect" +err))
app.listen(port, () => {
    console.log(`Example app listening on port `)
})