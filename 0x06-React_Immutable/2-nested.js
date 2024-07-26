import { fromJS } from "immutable";

export default function accessImmutableObject(object, array) {
    const newObject = fromJS(object);
    const value = newObject.getIn(array);
    console.log(value)
}
accessImmutableObject({
    name: {
         first: "Guillaume",
         last: "Salva"
    }
}, ['name', 'first'])