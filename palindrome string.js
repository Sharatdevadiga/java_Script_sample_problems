// checking whether a string is a palindrome or not

let inputStr1 = 'abcxcba';
let inputStr2 = 'hello';
let inputstr3 = 'xyzzyx'

const palindrome = function(inputStr){
    var val = true;
    let ch = [...inputStr]
    console.log("characters in given string are = ",ch,"\n")

    let n = ch.length;
    console.log("number of character in the given string is",n,"\n")

    for(let i = 0; i<n/2; i++){
        console.log(ch[i], " compared to ", ch[n-1-i])
        if(ch[i]!==ch[n-1-i])
        val = false
    }


    if(val == true){
        console.log("it is apalindrome \n\n")
    }else{
        console.log("It's not a palindrome \n\n")
    }
    console.log("................................................")
    
}


    palindrome(inputStr1)
    palindrome(inputStr2)
    palindrome(inputstr3)




