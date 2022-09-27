const UserDb = require("../model/model")

// create and save new user
exports.create = (req, res) => {

    // validate the request 
    if (!req.body) {
        res.status(400).send({ "message": "Content can not be empty" })
        return
    }

    const user = new UserDb({
        name: req.body.name,
        email: req.body.email,
        status: req.body.status === "active" ? true : false,
        gender: req.body.gender,
        date: !req.body.date ? new Date() : req.body.date
    })

    user
        .save(user)
        .then(data => {
            // res.send(data)
            res.redirect("/add-user")
        })
        .catch(error => {
            res.status(500).send({
                "message": error.message || "Some error occured while creating a user"
            })
        })

}

// retrive and return all users/ retrive and return single user
exports.find = (req, res) => {
    const id = req.params.id
    if (id) {
        UserDb.findById(id)
            .then(data => {
                if (!data) {
                    req.status(404).send({
                        "message": `Cannot find the user with ${id}, maybe user doesn't exists `
                    })
                } else {
                    res.send(data)
                }
            })
            .catch(error => {
                res.status(500).send({
                    "message": error.message || `Error: Unable to find user information with id ${id}`
                })
            })
    }
    else {
        UserDb.find()
            .then(user => {
                res.send(user)
            })
            .catch(error => {
                res.status(404).send({
                    "message": error.message || "User not found "
                })
            })
    }
}

// update a new identified user by user_id
exports.update = (req, res) => {
    // validate the request 
    if (!req.body) {
        return res.status(400).send({ "message": "Data to update can not be empty" })
    }

    const id = req.params.id
    UserDb.findByIdAndUpdate(id,
        {
            name: req.body.name,
            email: req.body.email,
            status: req.body.status === "active" ? true : false,
            gender: req.body.gender,
            date: !req.body.date ? new Date() : req.body.date
        }, {
        useFindAndModify: false
    })
        .then(data => {
            if (!data) {
                req.status(404).send({
                    "message": `Cannot update the user with ${id}, maybe user doesn't exists `
                })
            } else {
                res.send(data)
            }
        })
        .catch(error => {
            res.status(500).send({
                "message": error.message || "Error: Unable to update user information"
            })
        })
}

// delete a identified user by user_id
exports.delete = (req, res) => {
    const id = req.params.id
    UserDb.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                req.status(404).send({
                    "message": `Cannot delete the user with ${id}, maybe user doesn't exists `
                })
            } else {
                res.send(data)
            }
        })
        .catch(error => {
            res.status(500).send({
                "message": error.message || `Error: Unable to delete user information with id ${id}`
            })
        })
}
