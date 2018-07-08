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
    return new Promise((resolve) => {
        setTimeout( () => { 
            resolve("1: " + getTime());
        }, 1500);
    })
}

function asyncTwo(){
    return new Promise((resolve) => {
        setTimeout( () => { 
            resolve("2: " + getTime());
        }, 1000);
    })
}

function asyncThree(){
    return new Promise((resolve) => {
        setTimeout( () => { 
            resolve("3: " + getTime());
        }, 500);
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