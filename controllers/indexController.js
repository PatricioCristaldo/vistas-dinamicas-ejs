let menu = require("../data/menu.json")

module.exports = {
    home : (req,res) => {
        return res.render('home', {menu})
    },
    menu : (req,res) => {
        return res.render('detalleMenu')
    },
    detalleMenu: (req,res) => {
        let id = +req.params.id
        let plato = menu.find(plato => plato.id === id)
        return res.render("detalleMenu", {plato})
    }    
}