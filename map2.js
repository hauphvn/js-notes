Array.prototype.map2 = function(callback) {
let i = 0, result = []
for(; i < this.length; i++){
    result.push(callback(this[i]))
}
return result
}
const arr = [1,2,3,4].map2(item => { return item *2});
console.log(arr)
