import Node from './node.js';
const LinkedList = function() {
    this._linkedList = {};
    
    
};

LinkedList.prototype.append = function(value) {
    const node = new Node(value);
    if (!Object.values(this._linkedList).length) {
        this._linkedList = node;
        return;
    }

    const formerTail = this.getTail();
    formerTail.nextNode = node;


}

LinkedList.prototype.prepend = function(value) {
    const node = new Node(value);
    node.nextNode = this._linkedList;
    this._linkedList = node;
}

LinkedList.prototype.getTail = function(node = this._linkedList) {
    if (node.nextNode === null) {
        return node;
    }

    return this.getTail(node.nextNode);
}

LinkedList.prototype.getHead = function() { return this._linkedList };

LinkedList.prototype.size = function() {
    let currentIndex = 0;
    let currentNode = this._linkedList;
    while(currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
        currentIndex++;
    }

    return currentIndex + 1;
}

LinkedList.prototype.at = function(index) {
    let currentIndex = 0;
    let currentNode = this._linkedList;
    while(currentIndex !== index) {
        currentNode = currentNode.nextNode;
        currentIndex++;
    }

    return currentNode;
}

LinkedList.prototype.pop = function() {
    let currentNode = this._linkedList;
    while (currentNode) {
        if (currentNode.nextNode.nextNode == null) {
            currentNode.nextNode = null;
        }
        
        currentNode = currentNode.nextNode;
    }
}

export default LinkedList;