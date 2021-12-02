let sum = 0;
Array.prototype.forEach2 = function(callback) {
    let index, item;
    for(index in this){
       item = callback(this[index]);
    }
    // return item;
}
const arr = [1,2,3,5];
arr.forEach2( item => sum += item);
console.log(sum)
