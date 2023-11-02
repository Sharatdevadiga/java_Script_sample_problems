let a = 5;
let b = 4;
let c = 7;

function productSign(x,y,z){
    let product = x*y*z;
    if(product>0){
        return 1;
    }else if(product<0){
        return -1
    }else{
        return 0;
    }
}

let sign = productSign(a,b,c);;
console.log("sign of product is ", sign)