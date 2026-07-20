function capitalize(){
    const myString = "hello world";
    const capital = myString.toUpperCase();
    console.log(capital);
}
function reverse(){
    let str = "hello";
    let reversed = "";
    for(let char of str){
        reversed = char + reversed;
    }
    console.log(reversed);
}
function countCharracter(){
    let str = "hello";
    console.log(str.length);
}
module.exports = {capitalize, reverse, countCharracter};