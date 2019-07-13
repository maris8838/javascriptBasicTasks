/* 
Write a function called "isEven". 
Given a number, "isEven" returns whether it is even.
*/
function isEven (num) {
    if(num%2==0){
        console.log(true);
        return true;
        
    }
    else{
        console.log(false);
        return false;
    }
} 
isEven(21);