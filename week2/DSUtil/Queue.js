function Queue() {
    this.front = 1;
    this.rear = 1;
    this.arr = [];
    this.size = 0;
}
Queue.prototype.enqueue = function (data) {
    this.arr[this.rear] = data;
    this.rear++;
    this.size++;
}
Queue.prototype.dequeue = function () {

    var deletedData = this.arr[this.front];
    delete this.arr[this.front];
    this.front++;
    this.size--;
    return deletedData;


}

Queue.prototype.show = function () {
    for (var i = 0; i < this.size; i++) {
        console.log(this.arr[this.front + i] + " ");
    }

    console.log();

}
module.exports = {
    Queue
}