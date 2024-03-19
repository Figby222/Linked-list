
import LinkedList from './modules/linked-list.js';

const myList = new LinkedList();
myList.append(42);
myList.append(242);
myList.prepend(24242424);
console.log(myList.getHead());