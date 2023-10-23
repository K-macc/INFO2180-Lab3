document.addEventListener('DOMContentLoaded', function (create) {
    const boxes = document.querySelectorAll("#board div");
    var status = document.getElementById("status");
    const game = document.querySelectorAll(".btn");
    var check = ["n", "n", "n", "n", "n", "n", "n", "n", "n"];
    var n = 0;

    game.forEach(games => {
        games.addEventListener('click', function (e) {
            status.textContent = "Move your mouse over a square and click to play an X or an O.";
            status.classList.remove("you-won");

            check = ["n", "n", "n", "n", "n", "n", "n", "n", "n"];

            boxes.forEach((square, index) => {
                square.textContent = "";
                square.classList.remove("X");
                square.classList.remove("O");
            })
        })
    })

    let choice = function () {
        if (n % 2 == 0) {
            n += 1;
            return "X";
        } else {
            n += 1;
            return "O";
        }
    }

    let checkSubset = (py, sy) => {
        return sy.every((el) => {
            return py.includes(el)
        })
    }

    let win = function (x) {
        xlist = [];
        olist = [];

        row1 = [0, 1, 2];
        row2 = [3, 4, 5];
        row3 = [6, 7, 8];

        col1 = [0, 3, 6];
        col2 = [1, 4, 7];
        col3 = [2, 5, 8];

        dia1 = [0, 4, 8];
        dia2 = [2, 4, 6];

        for (var i = 0; i < x.length; i++) {
            if (x[i] == "X") {
                xlist.push(i);
            } else if (x[i] == "O") {
                olist.push(i);
            }
            else {
                continue;
            }
        }


        if (checkSubset(xlist, row1) == true || checkSubset(xlist, row2) == true || checkSubset(xlist, row3) == true || checkSubset(xlist, col1) == true || checkSubset(xlist, col2) == true || checkSubset(xlist, col3) == true || checkSubset(xlist, dia1) == true || checkSubset(xlist, dia1) == true) {
            n = 0;
            return 1;
        } else if (checkSubset(olist, row1) == true || checkSubset(olist, row2) == true || checkSubset(olist, row3) == true || checkSubset(olist, col1) == true || checkSubset(olist, col2) == true || checkSubset(olist, col3) == true || checkSubset(olist, dia1) == true || checkSubset(olist, dia1) == true) {
            n = 1;
            return 2;
        } else if (x.includes("n")) {
            return 0;
        } else {
            return -1;
        }
    }

    boxes.forEach((square, index) => {
        var n = index;

        square.classList.add('square');

        square.addEventListener('click', function (e) {
            if (!e.target.classList.contains("X") && !e.target.classList.contains("O")) {
                if (choice() == "X") {
                    e.target.textContent = "X";
                    e.target.classList.add('X');
                    check[index] = "X";
                } else {
                    e.target.textContent = "O";
                    e.target.classList.add('O');
                    check[index] = "O";
                }

                switch (win(check)) {
                    case 1:
                        status.textContent = "Congratulations! X is the Winner!";
                        status.classList.add("you-won");
                        break;
                    case 2:
                        status.textContent = "Congratulations! O is the Winner!";
                        status.classList.add("you-won");
                        break;
                    case 0:
                        break;
                    case -1:
                        status.textContent = "Good Game!"
                        break;
                }
            }

        })


        square.addEventListener('mouseover', function (e) {
            e.target.classList.add('hover');
        })

        square.addEventListener('mouseout', function (e) {
            e.target.classList.remove('hover');
        })

    })

})
