const arr = [1,2,3,4,5]
function logs() {
    Array.prototype.forEach.call(arr, item => {
        console.log(item)
    } )

    const newArr = Array.prototype.slice.call(arguments, 2,3)
    console.log(newArr)
}
logs(...arr)
