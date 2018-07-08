'use strict'

let resultArr,
    asyncArr = [ asyncOne, asyncTwo, asyncThree ];

function runAsyncAll(arr, async){
    if(async){
        Promise.all( arr.map( item => item() ))
            .then( result => { resultArr = result; });
    } else {        
        async function oneByOne(array){
            let tempArr = [];
            for(let item of array){
                item = await item();
                tempArr.push(item);
            }
            return tempArr;
        }
        oneByOne(arr).then((result) => {
            resultArr = result;
        })
    }
}

function asyncOne(){
    let timeout = 1500;
    return new Promise((resolve) => {
        setTimeout( () => { 
            resolve("1: " + timeout);
        }, timeout);
    })
}

function asyncTwo(){
    let timeout = 1000;
    return new Promise((resolve) => {
        setTimeout( () => { 
            resolve("2: " + timeout);
        }, timeout);
    })
}

function asyncThree(){
    let timeout = 500;
    return new Promise((resolve) => {
        setTimeout( () => { 
            resolve("3: " + timeout);
        }, timeout);
    })    
}

function getTime(){
    let operationTime = new Date(),
        currentTime = 
        operationTime.getHours() + ":" + 
        operationTime.getMinutes() + ":" + 
        operationTime.getSeconds() + ":" + 
        operationTime.getMilliseconds();
    return currentTime;
}
