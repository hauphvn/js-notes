const arr = [1,2,300,4,55]
Array.prototype.some2 = function(callback) {
    const result = false
    for(let index in this) {
       if( this.hasOwnProperty(index) && callback(this[index])){
           return true
       }
    }
    return result
}
console.log(arr.some2(item => {
    console.log(item)
    return item > 100
}))
