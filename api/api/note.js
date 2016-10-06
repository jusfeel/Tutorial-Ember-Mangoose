var Note = require('../models/note');

module.exports.getAllNotes = function (req, res) {
    Note.find({}, function (err, docs) {
        if (err) res.send(err)
        console.log(docs);
        res.send({
            note: docs
        });
    });
};

module.exports.getIdNote = function (req, res) {
    Note.findById(req.params.note_id, function (err, docs) {
        if (err) res.send(err);
        console.log(docs);
        res.send({
            note: docs
        });
    });
};

module.exports.deleteNote = function (req, res) {
    Note.findById(req.params.note_id, function (err, elem) {
        if (err) res.send(err);
        elem.remove(function (err, docs) {
            if (err) res.send(err);
            console.log(docs);
            res.send({
                note: docs
            });
        });
    });
};

module.exports.addNote = function (req, res) {
    var note = new Note(req.body.note);
    note.save(function (err, elem) {
        if (err) res.send(err);
        console.log(elem);
        res.send({
            note: elem
        });
    });
};

module.exports.saveNote = function (req, res) {
    Note.findByIdAndUpdate(req.params.note_id, {
        $set: req.body.note
    }, function (err, elem) {
        if (err) res.send(err);
        console.log(elem);
        res.send({
            note: elem
        });
    });
};
