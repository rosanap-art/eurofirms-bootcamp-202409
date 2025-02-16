import { User, Item } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError } = errors

function getItemsByType(userId, type) {
    validate.userId(userId)
    validate.type(type)

    return Promise.all([
        User.findById(userId).lean(),
        Item.find({ type }, '-__v').populate('author', 'username _id').sort({ date: -1 }).lean()
    ])
        .then(userAndItems => {

            let user = userAndItems[0]
            let items = userAndItems[1]

            if (!items || items.length === 0) { throw new NotFoundError('no items found matching the type') }
            if (!user) throw new NotFoundError('user not found')


            items.forEach(item => {
                if (item._id) {
                    item.id = item._id.toString()
                    delete item._id
                }
                if (item.author._id) {
                    console.log(item.author._id)
                    item.author.id = item.author._id.toString()
                    delete item.author._id
                }
            })

            return items
        })
        .catch(error => { throw new SystemError(error.message) })
}

export default getItemsByType