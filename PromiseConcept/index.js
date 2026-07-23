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

//Another Typ of Promise
function fetchUser(){
    return new Promise((resolve, reject) =>{
        resolve({
            id : 1,
            name : "Rahim",
            email : "frahaman520@gmail.com"

        });
    });
}
fetchUser().then((user) => { //we use user we can choose any name to pass a argumnet
    console.log(user);
    return user.name;
})

.then((name) => {
    console.log(name);
    return name.toUpperCase();
})
.then((upperCaseName) => {
    console.log(upperCaseName);
})
.catch((error) => {
    console.error(error);
})
.finally(() => {
    console.log("Promise completed");
}) 

//Tricky Question -1  Guss Output
Promise.resolve(10)
    .then((x) => {
        console.log(x);
        return x;
    })
    .finally(() => {
        return 999;
    })
    .then((x) => {
        console.log(x);
    });

//Tricky Qiestion - 2
Promise.resolve(1)
    .then((x) => {
        console.log("A", x);
        return x + 1;
    })
    .then((x) => {
        console.log("B", x);
        return Promise.resolve(x + 1);
    })
    .then((x) => {
        console.log("C", x);
        return Promise.reject("Failed");
    })
    .catch((err) => {
        console.log("D", err);
        return 100;
    })
    .then((x) => {
        console.log("E", x);
        throw "Another Error";
    })
    .catch((err) => {
        console.log("F", err);
    })
    .finally(() => {
        console.log("G");
    });

//question - 3
Promise.resolve(5)

.then((x) => {

    console.log("A", x);

    return x + 5;

})

.then((x) => {

    console.log("B", x);

    throw new Error("Oops");

})

.then((x) => {

    console.log("C", x);

    return 100;

})

.catch((err) => {

    console.log("D", err.message);

    return 50;

})

.then((x) => {

    console.log("E", x);

})

.finally(() => {

    console.log("F");

});