function double(arr: number[]): number[] {
  let newArr: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}

console.log(double([1, 2, 3, 4, 5]));
