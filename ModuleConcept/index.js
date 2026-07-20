const { add, multiply, devide, substract, } = require ("./math");
const { capitalize, reverse, countCharracter } = require("./string");
const { userDetails } = require("./user");
function main(){
    add();
    multiply();
    devide();
    substract();
}
function main1(){
    capitalize();
    reverse();
    countCharracter();
}
function main3(){
    const rs = new userDetails();
    

}
main();
main1();
main3();

