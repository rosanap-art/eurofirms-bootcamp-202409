import mongoose from 'mongoose'
import getItemsByType from './getItemsByType.js'

mongoose.connect('mongodb://127.0.0.1:27017/dona2-test')
    .then(() => {
        try {
            return getItemsByType('67a26d197918745e1fca1da8', 'toys')
                .then(items => console.dir(items, { depth: 5 }))
                .catch(error => console.error(error))
        } catch (error) { console.error(error) }
    })
    .then(() => console.log('end of test'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())