/*Write a function called “getNthElement”.
Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array.
 If the array has a length of 0, it should return ‘undefined’*/
 function getNthElement (array,n) {
if(array.length!=0){
    console.log(array[n]);
}else
{
console.log(undefined);
}
 }
 getNthElement([1,2,3],2)