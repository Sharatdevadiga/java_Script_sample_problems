/*If all three numbers are positive, return "+++" 
If two numbers are positive and one is negative, return "++-" 
If one number is positive and two are negative, return "+--" 
If all three numbers are negative, return "---"*/

let a = 5;
let b = -4;
let c = 3;




function singOf3(no1,no2,no3){
    const str = sign(a)+sign(b)+sign(c);

    switch(str){
        case '+++' :
            return '+++';
            break;
        
        case '++-' :
        case '+-+' :
        case '-++' :
            return '++-';
            break;
        
        case '+--' :
        case '--+' :
        case '-+-' :
            return '+--';
            break;
    
        default :
            return '---'
            break;
    }
    
    function sign(no){
        if(no>=0){
            return "+"
        }else{
            return "-"
        }
        
    }
}


console.log(singOf3(a,b,c));

