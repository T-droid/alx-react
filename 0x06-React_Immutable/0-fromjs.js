import { fromJS } from "immutable"


export default function getImmutableObject(object) {
    const newObject = fromJS(object);
    console.log(newObject);
}

const obj = {
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132
}

getImmutableObject(obj);