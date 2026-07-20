import readline from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

rl.on('history', (history) => {
  console.log(`Received: ${history}`);
  
});
