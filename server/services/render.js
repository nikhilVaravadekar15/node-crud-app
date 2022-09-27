const axios = require('axios')

exports.homeRoute = async (req, res) => {
    // make get request to http://localhost:3000/api/users
    try {
        const response = await axios.get("http://localhost:3000/api/users")
        // console.log(response.data)
        res.render("index", { "users": response.data })
    } catch (error) {
        res.send(error)
    }

}

exports.addUserRoute = (req, res) => {
    res.render("add_user.ejs")
}

exports.updateUserRoute = async (req, res) => {
    // make get request to http://localhost:3000/api/users/:id
    try {
        const response = await axios.get(`http://localhost:3000/api/user/${req.query.id}`)
        res.render("update_user", { "userData": response.data })
    } catch (error) {
        res.send(error)
    }
}
