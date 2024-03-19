
import LinkedList from './modules/linked-list.js';

const myList = new LinkedList();
myList.append(42);
myList.append(242);
myList.prepend(242424);
myList.prepend(24);
console.log(myList.getHead());
console.log(myList.size());
console.log(myList.at(1))
console.log(myList.getHead());
// myList.pop();
console.log(myList.getHead());

console.log(myList.contains(24));
console.log(myList.find(24));
console.log(myList.toString());
myList.insertAt("hello", 2);
console.log(myList.at(2));