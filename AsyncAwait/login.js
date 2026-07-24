import * as fs from "fs/promises";
async function login(){
    return new Promise(resolve =>
        setTimeout(() =>
            resolve("USER loged in"), 1000)
        );
}
async function getprofile(){
    return new Promise(resolve =>
        setTimeout(() =>
            resolve("Profile Loaded:"), 1000)
    );
    
}
async function getorder(){
    return new Promise(resolve =>
        setTimeout(() =>
        resolve("Order Recieved"), 1000)
    );
}
async function makePayment(){
    return new Promise((resolve) =>
        setTimeout(() =>
        resolve("Payment Succesfull"), 1000)
    );
}
async function email(){
    return new Promise((resolve) =>
        setTimeout(() =>
        resolve("Email Send"), 1000)
    );
}
async function main(){
   try{
    console.log(await login());
    console.log(await getprofile());
    console.log(await getorder());
    console.log(await makePayment());
    console.log(await email());
   }catch(err){
    console.log("Something Wrong");
   }
}
main();