document.addEventListener('DOMContentLoaded',function(create){
    const boxes = document.querySelectorAll("#board div");
    boxes.forEach((square)=>{
        square.classList.add('square');
    })

    boxes.forEach(function(el,ind){
        el.addEventListener('mouseover', function(e) {
            e.target.classList.add('hover');
        })

        el.addEventListener('mouseout', function(e) {
            e.target.classList.remove('hover');
        })
    })
})


