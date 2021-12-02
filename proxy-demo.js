const target = {
    message1: {
        name: 'hauphvn',
        age: 12
    },
    message2: 'everyone'
}

const handler = {
    get: function (target, prop, receiver) {
        if(prop === 'message2'){
            return 'hauphvn';
        }
        // console.log('agur: ', arguments)
        return Reflect.get(...arguments);
    }
};

const proxy = new Proxy(target, handler);

console.log(proxy.message1);
// console.log(proxy.message2);
