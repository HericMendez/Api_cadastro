
const knex = require("./knex");

const createCar = (car) => knex("cars").insert(car);
const getAllCars = () => knex("cars").select("*");
const deleteCar = (id) => knex("id", id).del();
const updateCar = (id, car) => knex("cars").where("id", id).update(car);

module.exports = {
    createCar,
    getAllCars,
    deleteCar,
    updateCar
}


