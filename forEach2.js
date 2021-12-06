let sum = 0;
Array.prototype.forEach2 = function(callback, index, array) {
    for(index in this){
        if(this.hasOwnProperty(index)) {
            callback(this[index], index, this);
        }
    }
}
const arr = [1,2,3,5];
arr.length = 10;
arr.push(34);
arr.forEach2( item => sum += item);
console.log(sum)
