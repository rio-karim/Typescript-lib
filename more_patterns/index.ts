class BubbleSort {
  constructor(public collection: number[]) {
    this.collection = collection;
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        const leftHand = this.collection[j];
        this.collection[j] = this.collection[j + 1];
        this.collection[j + 1] = leftHand;
      }
    }
  }

  sort(): void {}
}

const bubbleSort = new BubbleSort([10, 3, -5, 0]);
bubbleSort.sort();
console.log(bubbleSort.collection);
