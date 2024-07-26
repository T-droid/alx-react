import { Seq, fromJS } from "immutable";

export function printBestStudents(object) {
    const studentsMap = fromJS(object);

    const bestStudents = Seq(studentsMap)
    .filter(student => student.get('score') >= 70);

    return bestStudents.toJS();
}

const students = {
    'student-1': { name: 'Alice', score: 85 },
    'student-2': { name: 'Bob', score: 65 },
    'student-3': { name: 'Charlie', score: 75 }
};

console.log(printBestStudents(students));