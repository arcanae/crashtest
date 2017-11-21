let element = document.querySelector('#element');
let password = prompt("Please enter a password, max 8 characters", "");

let characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];

let pass = "";
let x = 0;
let y = 0;
while (pass != password) {
    pass = characters[x];

    if (y === 0) {

    } else if (y === 1) {

    } else if (y === 2) {

    } else if (y === 3) {

    } else if (y === 4) {

    } else if (y === 5) {

    } else if (y === 6) {

    } else if (y === 7) {

    }

}

function char(x) {

    if (x + 1 === characters.length) {
        element.textContent = pass;
        pass = "";
        x = 0;
        y++;
    } else {
        element.textContent = pass;
        pass = "";
        x++;
    }
}