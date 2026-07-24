import { copyFile } from "fs";
import * as fs from "fs/promises";
async function letter(){
    return "Hello Bro";
}
//letter().then(console.log);

function waitTwoSecond(){
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve("Resolved after 2second ");
        }, 2000);
    });
}
async function demo(){
    const result = await waitTwoSecond();
    console.log(result);
}


async function readfile(){
    const data = await fs.readFile("notes.txt", "utf-8");
    console.log(data);
    console.log("under ReadFile");
}

async function writefileex(){
   await fs.writeFile("jeet.txt", "This file was updated");
    console.log("File Written Sucessfully");
}

async function CopyFile(){
    try {await fs.copyFile("jee.txt", "copy.txt");
    console.log("Files Copyed");
    }catch(err){
        console.log("Files Not Found");
    }
}


function fakeAPI(name, delay){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${name} completed`);
        }, delay);
    })
}

async function sequential(){
    console.time("Sequential");
    console.log(await fakeAPI("API 1", 1000));
    console.log(await fakeAPI("API 2", 1000));
    console.log(await fakeAPI("API 3", 1000));

    console.timeEnd("Sequential");
}
// Main Difference between sequential and promiseall in seqential more time taking and if we use promise all then it less time
async function parallel(){
    console.time("Paarallel");
    const result = await Promise.all([
        fakeAPI("API 1", 1000),
        fakeAPI("API 2", 1000),
        fakeAPI("API 3", 1000)

    ]);
    console.log(result);
    console.timeEnd("Paarallel");
}

async function main(){
    await CopyFile();
    
}
main();