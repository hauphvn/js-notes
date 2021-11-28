Array.prototype.reduce2 = function (callback, init) {
    let result, index = 0;
    if(arguments.length > 1) {
        result =init;
    }else{
       result = this[0];
        index = 1;
    }
    // console.log('result init: ', result)
    for (; index < this.length; index++) {
        // console.log('before callback: result: ', result )
        result =  callback(result, this[index]);
        // console.log('ben trong callback result: ', result)
    }
    return result;
    // result = callback(result, this[this.length - 1])
}
let arr = [];
const result = [{name: 'hau1', age: 1}, {name: 'hau2', age: 2}, {name: 'hau3', age: 3},{name: 'hau4', age: 4}].reduce2((result, item) => {
    return arr.push({...item, address: 'sg'})
},{})
console.log(arr)
