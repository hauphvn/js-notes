// (() => {
//     console.log('fsdfsd')
// })
//
//
// const log2 = function () {
//     log1()
// }
// log2()
// const log1 = function () {
//     console.log('log')
// }
// {
//     let a = 1
//     {
//         console.log(1)
//         a = 2;
//     }
// }


const car = {
    name: 'toyota'
}
const honda = car;
car.name = 'bmw'
// console.log(car)
// console.log(honda)

function Student (name, age) {
    this.name = name
    this.age = age
}

Student.prototype.learn = function () {
    hocbai2 = () => {
        console.log(this.name + ' dang hoc bai 2')
    }
    const hocbai = function () {
        console.log(this.name + ' dang hoc bai')
    }
    hocbai2()
}
const loan = new Student('Loan', 10)
loan.learn()
