import { List } from "immutable";

export function getListObject(array) {
    return List(array)
}

export function addElementToList(list, element) {
    const newLIst = getListObject(list);
    return newLIst.push(element);
}

// Example usage
const array = [1, 2, 3];
const immutableList = getListObject(array);
console.log(immutableList.toJS()); // Output: [1, 2, 3]

const newList = addElementToList(immutableList, 'me');
console.log(newList.toJS());