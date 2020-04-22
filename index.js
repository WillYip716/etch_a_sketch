let init = function(grids){
    let b = document.getElementById('gridholder');
    for (let index = 0; index < grids*grids; index++) {
        let htmlDiv = document.createElement("div");
        htmlDiv.id = "grid" + index;
        htmlDiv.className = "etchgrid";
        b.appendChild(htmlDiv);
    }
    let gridD = 960/grids;
    b.style.gridTemplateColumns = "repeat("+grids+","+gridD+"px)";
    b.style.gridTemplateRows= "repeat("+grids+","+gridD+"px)";
}

let setMouseOver = function(){
    let buttons = document.querySelectorAll(".etchgrid");
    buttons.forEach((i) => {
        i.addEventListener('mouseover', function(){
            i.style.backgroundColor = "black";

        });
    });

}

let reset = function(){
    let b = document.getElementById('gridholder');
    let cNode = b.cloneNode(false);
    b.parentNode.replaceChild(cNode,b);
    let gridVal = prompt("Enter amount of grids");
    init(gridVal);
    setMouseOver();
}

window.addEventListener("load" ,function(){
    init(16);
    setMouseOver();
});
