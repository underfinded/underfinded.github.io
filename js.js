let col = document.querySelectorAll('.col');
let users = document.querySelectorAll('.stats__user');
let result = document.querySelector('.resultat');


let name1 = 'Крестик';
let name2 = 'Нолик';
let player = '';
let activePlayer = '';
let numberOfRound = 0;
let CloseToInput = 0;


addnames();
function addnames() {
    users[0].textContent = name1;
    users[1].textContent = name2;
}


function activeUser() {
    if (numberOfRound <= 8) {
        users[0].classList.toggle('active');
        users[1].classList.toggle('active');
    }

    else if (numberOfRound > 8) {
        users[0].classList.remove('active');
        users[1].classList.remove('active');
        users[0].classList.add('gg');
        users[1].classList.add('gg');
    }
};

let check = 'X';
start(col)

function start(colH) {
    for (let i of colH) {
        i.addEventListener('click', () => {
            if (CloseToInput == 0) {
                if (i.textContent == '') {
                    i.textContent = check;

                    if (check == 'X') {
                        check = 'O';
                        player = name1;
                        activePlayer = name2;
                    } else if (check == 'O') {
                        check = 'X';
                        player = name2;
                        activePlayer = name1;
                    }

                    numberOfRound++;
                    if (win(colH) == false) {
                        activeUser();
                        result.textContent = `Ходит ${activePlayer}`;
                    }


                    if (win(colH) == true) {
                            setTimeout(()=>{
                                location.reload();
                            },2000);

                        result.textContent = `Победил ${player}`;
                        CloseToInput++;
                        document.querySelector('.result').classList.add('win-color');
                        result.style.color = "#000";
                        DeleteCursor();
                            
                    }
                    else if (numberOfRound > 8) {
                        if (win(colH) == false) {
                                setTimeout(()=>{
                                    location.reload();
                                },2000);
                            users[0].classList.remove('active');
                            users[1].classList.remove('active');
                            users[0].classList.add('gg');
                            users[1].classList.add('gg');
                            result.textContent = `Ничья`;
                                
                        }
                    }
                }
            }
        });
    }
}


function win(col) {
    let combs = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let comb of combs) {
        if (
            col[comb[0]].textContent == col[comb[1]].textContent &&
            col[comb[1]].textContent == col[comb[2]].textContent &&
            col[comb[0]].textContent != ''
        ) {
            return true;
        }
    }
    return false;
}

function DeleteCursor() {
    for (let del of col) {
        del.classList.add('aga');
    }
}