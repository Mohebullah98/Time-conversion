'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    let result ="";
    let merediem = s.slice(s.length-2);
    let hour = s.slice(0,2);
    let minutes = s.slice(3,5);
    let seconds = s.slice(6,8);
    if(merediem==="AM"){
        hour =parseInt(hour);
        hour = hour%12;
        if(hour<10) hour="0"+hour;
    }
    if(merediem==="PM"){
        hour=parseInt(hour);
        hour=12+(hour%12);
    }
    result+=hour+":"+minutes+":"+seconds;
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
