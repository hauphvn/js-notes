const hs = {
    a: 1,
    b: 2,
    c: 3
}

// const {a,c} = hs;
// console.log('a: ', a);
// console.log('c: ', c);

for(let letter in hs) console.log(hs[letter])
