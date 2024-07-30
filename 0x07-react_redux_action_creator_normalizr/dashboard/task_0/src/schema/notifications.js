import * as data from '../../notifications.json';
import { normalize, schema } from 'normalizr'

function getAllNotificationsByUser(userId) {
    const normalizedData = normalize(data.default, [notification])
    return data.filter(notification => notification.author.id === userId)
}

const user = new schema.Entity("users");

const message = new schema.Entity("messages", {
    idAttribute: "guid"
})

const notification = new schema.Entity("notifications", {
    auther: user,
    context: message
})