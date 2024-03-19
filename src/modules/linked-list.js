const LinkedList = function() {
    this._linkedList = {};
    
    this.append = function(node) {
        if (!Object.values(_linkedList)) {
            _linkedList = node;
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