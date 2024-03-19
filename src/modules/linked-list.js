import Node from './node.js';
const LinkedList = function() {
    this._linkedList = {};
    
    
};

LinkedList.prototype.append = function(value) {
    const node = new Node(value);

    if (!Object.values(this._linkedList)) {
        this._linkedList = node;
        return;
    }

    const formerTail = this.getTail();
    formerTail.nextNode = node;


}
LinkedList.prototype.getTail = function(node = this._linkedList) {
    if (node.nextNode === null) {
    if (node.getNextNode() === null) {
        return node;
    }

    return this.tail(node.getNextNode());
}

LinkedList.prototype.getList = function() { return this._linkedList };

export default LinkedList;