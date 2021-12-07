const arr =[
    {
        name: 'name12',
        age: 12
    }, {
        name: 'name15',
        age: 15
    }, {
        name: 'name14',
        age: 14
    }, {
        name: 'name12',
        age: 13
    }
]
Array.prototype.filter2 = function(callback) {
    const result = []
    for(let index in this) {
        if(this.hasOwnProperty(index) && callback(this[index])){
            result.push(this[index])
        }
    }
    return result
}
console.log(arr.filter2(item => item.age > 13))
