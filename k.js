function compare(array,result){
  
  for(let i =0; i < array.length -1; i++){
    
    for (let j = i+1; j < array.length; j++){
      if (array[i] + array[j] == result){
        return true;
      }
    }
  }
return false
}
console.log(compare([10, 15, 3, 7], 17));

//node k.js list.txt