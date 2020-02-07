"use strict";
var BubbleSort = /** @class */ (function () {
    function BubbleSort(collection) {
        this.collection = collection;
        this.collection = collection;
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                var leftHand = this.collection[j];
                this.collection[j] = this.collection[j + 1];
                this.collection[j + 1] = leftHand;
            }
        }
    }
    BubbleSort.prototype.sort = function () { };
    return BubbleSort;
}());
var bubbleSort = new BubbleSort([10, 3, -5, 0]);
bubbleSort.sort();
console.log(bubbleSort.collection);
