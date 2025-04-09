const arr = [1, 2, 3, 4];

const [a1, a2, a3, a4] = arr;
console.log('a1:', a1, 'a2:', a2, 'a3:', a3, 'a4:', a4);

const [b1, , b3] = arr;
console.log('b1:', b1, 'b3:', b3);

const [, , , c4, c5, c6 = 10] = arr;
console.log('c4:', c4, 'c5:', c5, 'c6:', c6);