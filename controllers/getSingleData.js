const Note = require('../model/data');

const singleData = async (req, res) => {

    const { id } = req.params
    console.log(id);
    const user = await Note.findOne({ _id: id },)
    res.json(user)

}
const updateData = async (req, res) => {
    console.log(req.body)
    const { id } = req.params
    if (await Note.exists({ _id: id })) {

        const user = await Note.findOneAndUpdate({ _id: id }, req.body, { new: true })
        res.json(user)
    }
    else {
        res.send(`no user with this id ${id}`)
    }
}

module.exports = { singleData, updateData };