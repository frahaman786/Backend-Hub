function login(){
    return new Promise((resolve, reject) => {
        const sucees = true;
        if(sucees){
            resolve("Login ed");
        }else{
            reject("Not Allowed");
        }
    });
}
login().then((result) => {
    console.log(result);
});
login().catch((error) => {
    console.error(error);
});