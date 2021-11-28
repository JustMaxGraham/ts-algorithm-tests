/*
Write a function:

function solution(A, K);

that, given an array A consisting of N integers and an integer K, returns the array A rotated K times.

For example, given

    A = [3, 8, 9, 7, 6]
    K = 3
the function should return [9, 7, 6, 3, 8]
*/

function rotate(A: number[], K: number) {

  if (A.length === 0){
    return 0;
  }
  for (let i = 1; i <= K; i ++){
      let num: number = A.pop()!;
      A.unshift(num);
  }
  return A;
}

export default rotate;