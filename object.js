const subject = {
    name: 'biology',
    chapter: [ 'first', 'second', 'third' ],
    exams: {
        name: 'Final Exam',
        marks: 100
    }
}

// dot notation
console.log(subject);
console.log(subject.chapter[2]);
console.log(subject.exams.name);

// bracket notation
console.log(subject['name']);

//keys 
console.log(Object.keys(subject));

// values
console.log(Object.values(subject));
console.log('');

// loop and object
for (const i in subject) {
    console.log('i = ', i);
}

console.log('');
for (const j in subject.exams) {
    console.log('j = ', j);
}

console.log('');
const keys = Object.keys(subject);
for (const k of keys) {
    console.log(k, ' - ', subject[k])
}