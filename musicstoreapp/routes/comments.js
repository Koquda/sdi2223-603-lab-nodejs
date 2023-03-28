const {ObjectId} = require("mongodb");
module.exports = function(app, commentsRepository) {
    app.post('/comments/:song_id', function (req, res) {
        let comment = {
            author: req.session.user,
            text: req.body.text,
            song_id: ObjectId(req.body.song_id),
        }
        commentsRepository.insertComment(comment, function (commentId) {
            if (commentId == null) {
                res.send("Error al insertar comentario")
            } else {
                res.send("Agregada la canción ID: " + commentId);
            }
        })
    });
};