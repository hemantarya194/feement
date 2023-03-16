const Note = require('../model/data');

const singleData = async (req, res) => {

    const { id } = req.params
    const user = await Note.findOne({ _id: id })
    res.json(user)

}

module.exports = { singleData };