const Node = function(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
}

Node.prototype.getValue = function() { return this.value };
Node.prototype.getNextNode = function () { return this.nextNode };



export default Node;