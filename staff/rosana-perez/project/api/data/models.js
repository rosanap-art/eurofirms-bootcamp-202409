import { Schema, model, Types } from 'mongoose'

const { ObjectId } = Types

const user = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 1
    },
    location: {
        type: String,
        required: true,
        minLength: 3
    },
    email: {
        type: String,
        required: true,
        minLength: 6,
        unique: true
    },
    username: {
        type: String,
        required: true,
        minLength: 4,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    favs: [
        {
            type: ObjectId,
            ref: "Item",
            required: true
        }
    ]
})

const item = new Schema({
    author: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },
    location: {
        type: String,
        enum: [
            "A Coruña",
            "A Estrada",
            "Ames",
            "Betanzos",
            "Boiro",
            "Camariñas",
            "Carballo",
            "Cee",
            "Ferrol",
            "Lalín",
            "Lugo",
            "Meis",
            "Monforte de Lemos",
            "Muros",
            "Neda",
            "O Barco de Valdeorras",
            "O Grove",
            "Ourense",
            "Padrón",
            "Pontecedo",
            "Pontevedra",
            "Ribeira",
            "Rianxo",
            "Ribadeo",
            "Santiago de Compostela",
            "Sarria",
            "Vigo",
            "Vilanova de Arousa",
            "Viveiro",
        ],
        required: true,
        minLength: 3
    },
    image: {
        type: String,
        required: true,
        maxLength: 1000
    },
    title: {
        type: String,
        required: true,
        minLength: 3
    },
    description: {
        type: String,
        required: true,
        minLength: 3
    },
    type: {
        type: String,
        enum: [
            "clothing",
            "accesories",
            "toys",
            "art",
            "books",
            "entertainment",
            "media",
            "tech",
            "collectables",
            "sports",
            "social",
            "homeAssistance",
            "lessons",
            "homeSupport",
            "furniture",
            "appliances",
            "gardening",
            "farming",
            "finance",
            "business",
            "construction",
        ],
        required: true,
        minLength: 3
    },
    sold: {
        type: Boolean,
        required: true
    }
}, { timestamps: true })

const message = new Schema({
    user: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: String,
        required: true
    },
    chatId: {
        type: ObjectId,
        ref: 'Chat'
    },
    itemId: {
        type: ObjectId,
        ref: 'Item'
    },
}, { timestamps: true })

const chat = new Schema({
    users: [{
        type: ObjectId,
        ref: 'User',
        required: true
    }],
    item: {
        type: ObjectId,
        ref: 'Item',
        required: true
    },
    messages: [message],
}, { timestamps: true })


const User = model('User', user)
const Item = model('Item', item)
const Message = model('Message', message)
const Chat = model('Chat', chat)


export {
    User,
    Item,
    Message,
    Chat
}