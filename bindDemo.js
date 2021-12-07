this.name = 'hauphvn'
this.age = 12

const user = {
    name: 'haulocal',
    age: 11,
    getInfo() {
        return `${this.name}: ${this.age}`
    }
}

// console.log("------: ", user.getInfo())
const newUser = user.getInfo.bind(user)
// console.log("-------: ", newUser())

// --------------
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const input = $('#input')
const submit = $('#submit')
const wrapCars = $('#wrap-cars')
const deleteButtons = $$('.delete')
const app = (function () {
    const cars = ['BMW', 'TOYOTA', 'HONDA']
    return {
        add(car) {
            cars.push(car)
        },
        delete() {

        },
        render() {
            const html = cars.map((car, index) => `
              <div class="car-item">
               <li>${car}</li> <button class="delete" data-index=${index}>&times;</button>
              </div>
    `).join('')
            wrapCars.innerHTML = html
        },
        handlerDelete(e) {
            const btnDelete = e.target.closest('.delete')
            if(!!btnDelete) {
                const index = btnDelete.dataset.index
                cars.splice(index, 1)
                this.render()
            }
        },
        init() {
            submit.onclick = () => {
                const car = input.value
                this.add(car)
                this.render()
                input.value = ''
                input.focus()
            }
            wrapCars.onclick = this.handlerDelete.bind(this)
            this.render()
        }
    }
})()
app.init()
