/*printing whether temperature is cold or hot based on range of temperature 
using if else if  */

let currentTemp = 15;

if(currentTemp <= 0){
console.log("It chilling out there")
}else if( currentTemp>0 && currentTemp<=20){
    console.log("Its cool out there")
}else if(currentTemp > 20 && currentTemp<=30){
    console.log("its warm out there")
}else {
    console.log("Its extremely hot out there")
}