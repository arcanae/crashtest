let nb1 = 0;
let nb2 = 1;

console.log(nb1);
console.log(nb2);

for (let x = 1; x < 20; x++) {
    let nb3 = nb1 + nb2;
    console.log(nb3);
    nb1 = nb2;
    nb2 = nb3;
}