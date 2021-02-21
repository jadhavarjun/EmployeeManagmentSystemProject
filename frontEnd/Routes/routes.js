const Controller = require('../Controller/employeeController')
let controller1 = new Controller()
module.exports = (app) => {
    app.get("/employee/get", controller1.getData)

    app.post("/employee/getById/:id", controller1.findById)

    app.post("/employee/create", controller1.create)

    app.put("/employee/update/:id", controller1.updateData)

    app.delete("/employee/delete/:id", controller1.deleteData)
} 