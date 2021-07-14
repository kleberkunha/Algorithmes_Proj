const fs = require('fs');


const fileName = process.argv[2];


fs.readFile('list.txt', 'utf8', (error, data) => {
  let count = 0
  const list = (data.split(` `)).map(numb=>{
    count++;
    return parseInt(numb);
  });
  if (error) {
      console.error(error.message);
      return ;
  }
  else{
  console.log(mergeSort(list));
  }
});


const mergeSort = array => {
  if (array.length <= 1) return array;

  let middleIndex = Math.floor(array.length / 2);
  let leftArr = array.slice(0, middleIndex);
  let rightArr = array.slice(middleIndex);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
  console.log(left, right);
};



const merge = (leftArr, rightArr) => {
  let sorted = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    const leftEl = leftArr[leftIndex];
    const rightEl = rightArr[rightIndex];
    if (leftEl < rightEl){
      sorted.push(leftEl);
      leftIndex++;
    } 
    else {
      sorted.push(rightEl);
      rightIndex++;
    }
  };

  return [...sorted, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];
};