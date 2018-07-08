'use strict'
// let wrapper = document.querySelector('.task-body'),
//     arr = new Array(10);

// for(let i = 0; i < arr.length; i++){
//     arr[i] = {
//         value: Math.floor(Math.random() * 10 + 1)
//     }
// }

// let getSort = undefined;

// let getPrimes = arr.filter(function(item){
//     for(let i = item - 1; i > 1; i-- ){
//         if(item[value] % i == 0){
//             return false
//         }
//     }
//     return true
// });

// function stringObj(obj){

// }

class ArrayObj{
    
    constructor(array){
        this.array = array;
    }
    
    getPrimes(arr){
        let resultArr = this.arr.filter(function(item){
            for(let i = item - 1; i > 1; i-- ){
                if(item[value] % i == 0){
                    return false
                }
            }
        })

        return newArr;
        
    };
}
    
let newArr = new ArrayObj([ { value: 10 }, { value: 12 }, { value: 3 }] );