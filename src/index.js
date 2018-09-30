module.exports = function getZerosCount(number) {
  let count = 0;
  for(let i = 1;i<number;i++){
    if(Math.pow(5,i)>number)
break;
count+=Math.floor(number/(Math.pow(5,i)));
  }
  return count;// your implementation
}