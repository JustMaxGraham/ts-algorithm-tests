

function countCars(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let set = new Set();
  if(!(set.size > 1000000000)){
      for (let i = 0; i < A.length - 1; i++){
          for (let k = i + 1; k < A.length; k++){
              if(!(set.has([A[i], A[k]])) && (0 <= A[i]) && (A[i] < A[k])){
                  set.add([i, k])
              }
          }
      }
      return set.size;
  }
  return -1;
}

export default countCars;