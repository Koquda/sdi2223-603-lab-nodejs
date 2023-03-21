module.exports = function(app) {
    app.get("/authors", function(req, res) {
        let authors = [{
            "name": "Juan",
            "band": "Los juanes",
            "role": "singer"
        },
        {
            "name": "Pedro",
            "band": "Los juanes",
            "role": "drummer"
        },
        {
            "name": "Feliciano",
            "band": "Supercolegas",
            "role": "singer"
        }]

        let response = {
            authors: authors
        }

        res.render("authors/authors.twig", response)
    });

    app.get('/authors/add', function (req, res) {
        res.render("authors/add.twig");
    });

    app.post('/authors/add', function (req, res) {
        let response
        if (req.body.name === undefined || req.body.name === "") {
            response = "Nombre no enviado en la petición"
        }
        else if (req.body.band === undefined || req.body.band === "") {
            response = "Grupo no enviado en la petición"
        }
        else if (req.body.role === undefined || req.body.role === "") {
            response = "Rol no enviado en la petición"
        }
        else {
            response = "Autor agregado: " + req.body.name + "<br>"
                + " grupo: " + req.body.band + "<br>"
                + " rol: " + req.body.role
        }

        res.send(response)
    })

    app.get('/authors/*', function (req, res) {
        res.redirect('/authors');
    });
}