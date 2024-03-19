import Node from './node.js';
const LinkedList = function() {
    this._linkedList = {};
    
    this.append = function(value) {
        const node = new Node(value);

        if (!Object.values(this._linkedList)) {
            this._linkedList = node;
            return;
        }

        const formerTail = this.getTail();
        formerTail.nextNode = node;


    }

    this.getTail = function(node) {
        if (node.nextNode === null) {
            return node;
        }

        return this.tail(node.nextNode);
    }
};

export default LinkedList;