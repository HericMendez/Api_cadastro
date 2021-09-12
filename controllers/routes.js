const db = require("../models/cars")



module.exports = (app) =>{

    app.post("/cars", async (req, res) => {
        const results = await db.createCar(req.body);
        res.status(201).json({id:results[0]});
    })

    app.get("/cars", async (req, res)=>{
        const cars = await db.getAllCars();
        console.log(cars)
        res.status(200).json(cars);
    })

    app.patch("/cars/:id", async (req, res) => {
        const id = await db.updateCar(req.params.id, req.body);
        res.status(200).json({id})
    })

    app.delete("/cars/:id", async (req, res) => {
        await db.deleteCar(req.params.id);
        res.status(200).json({success: true});
    })

}
