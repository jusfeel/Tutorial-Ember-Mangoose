var notes = require('../api/note');

module.exports = function (router) {

    router.route('/api/notes')
        .get(function (req, res) {
            notes.getAllNotes(req, res)
        })
        .post(function (req, res) {
            notes.addNote(req, res)
        });
        
    /* Ruta de borrado (delete) y modificado (patch) */     
    router.route('/api/notes/:note_id')
        .get(function (req, res) {
            notes.getIdNote(req, res)
        })
        .delete(function (req, res) {
            notes.deleteNote(req, res)
        })
        .patch(function (req, res) {
            notes.saveNote(req, res)
        });
};
