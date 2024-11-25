let container = document.querySelector(".container");

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; 

slider.oninput = function() {
  output.innerHTML = this.value;
    setNumDivs(this.value);
}

let setNumDivs = (num) => {
    console.log("--->", num)
    let max = num*num;
    let oldMax = container.childElementCount;

    for (let i = 0; i < oldMax; i++) {
        if (i < max) {
            container.children[i].style.height = 'calc(calc(500px/'+num+') - 2px)'
            container.children[i].style.width = 'calc(calc(500px/'+num+') - 2px)'
            container.children[i].style.backgroundColor = '';
            continue
        } 

        container.removeChild(container.lastChild);
    }

    if (oldMax > max) {
        return
    }

    let newMax = max-oldMax

    for (let i = 0; i < newMax; i++) {
        let div = document.createElement("div");
        container.appendChild(div);


        div.style.height = 'calc(calc(500px/'+num+') - 2px)'
        div.style.width = 'calc(calc(500px/'+num+') - 2px)'

        console.log(div.style.width)
    
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = '#B9E5E8';
        });
    }
}

setNumDivs(slider.value);