const createLocalStore = function (namespace) {
    const store = localStorage.getItem(namespace) ?? []
    const save = function (content) {
        localStorage.setItem(namespace, JSON.stringify(content))
    }
    return action = {
        get: function () {
            return store
        },
        set: function (content) {
            save(content)
        }
    }
}

const dataUser = createLocalStore('dataUser');
const color = createLocalStore('color');
// dataUser.set({
//     email: 'hauphvn@gmail.com',
//     name: 'hauphvn'
// })

console.log(color.get())
// console.log(color.set('#ccc'))
