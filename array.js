const Memory = require("./memory");
let mem4Array = new Memory();

class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = mem4Array.allocate(this.length);
  }

  test() {
    console.log(this.ptr);
  }

  push(value) {
    this._resize(this.length + 1);
    mem4Array.set(this.ptr + this.length, value);
    this.length++;
  }

  pop() {
    if (this.length == 0) {
      throw new Error("Index error");
    }
    const value = mem4Array.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Index Error");
    }
    return mem4Array.get(this.ptr + index);
  }

  spaceConvert(char) {
    if (char === " ") {
      return "%20";
    }
  }

  insert(value, index) {
    this._resize(this.length + 1);
    mem4Array.set(this.ptr + index, value);
    this.length++;
  }

  delete(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Bad Index");
    }

    mem4Array.copy();
  }
  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = mem4Array.allocate(size);
    if (this.ptr === null) {
      throw new Error("Out of memory");
    }
    mem4Array.copy(this.ptr, oldPtr, this.length);
    mem4Array.free(oldPtr);
    this._capacity = size;
  }
}

Array.SIZE_RATIO = 3;

function main() {
  Array.SIZE_RATIO = 3;
  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  arr.push(3);
  arr.push(77);
  arr.push(345);
  arr.push(56);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  arr.insert(555 , 4)

  console.log(arr);

  arr.pop();
  arr.pop();
  arr.pop();


  console.log(arr);

  console.log(arr.get(4));
}

main();
