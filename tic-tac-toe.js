document.addEventListener('DOMContentLoaded', function (create) {
    const boxes = document.querySelectorAll("#board div");
    const status = document.querySelectorAll("#status div");
    //console.log(status);
    var check = [];
    var n = 0;
    let choice = function () {
        if (n % 2 == 0) {
            n += 1;
            return "X";
        } else {
            n += 1;
            return "O";
        }
    }

    let colour = function(c){
        if(c == "X"){

        }
    }
    boxes.forEach((square, index) => {
        //var n = 0;
        square.classList.add('square');

        square.addEventListener('mouseover', function (e) {
            e.target.classList.add('hover');
        })

        square.addEventListener('mouseout', function (e) {
            e.target.classList.remove('hover');
        })

        square.addEventListener('click', function (e) {
           if(choice() == "X"){
                e.target.textContent = "X";
                e.target.classList.add('X');
                check.push("X");
                console.log(check);
           }else{
                e.target.textContent = "O";
                e.target.classList.add('O');
                check.push("O");
                console.log(check);
           }

        })
    })
})


