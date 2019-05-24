function Stack() {
    this.top = 0;
    this._storage = [];
}

Stack.prototype.push = function (data) {
    var size = ++this.top;
    this._storage[size] = data;
};

Stack.prototype.pop = function () {
    var size = this.top,
        deletedData;

    if (size) {
        deletedData = this._storage[size];

        delete this._storage[size];
        this.top--;

        return deletedData;
    }
};
Stack.prototype.isEmpty = function () {
    return this.top==0;
}

module.exports = { Stack }
