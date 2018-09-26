const Person = require('./Person');
const { spy, report } = require('./spy');

const henry = new Person(22);
spy(henry, 'howOld');
console.log('How old are you?' , henry.howOld());
report();
