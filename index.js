const text=document.querySelector('#Boom').textContent;

let index = 0;

function writeText() {
    document.getElementById("Boom").innerText = text.slice(0, index);
    document.getElementById("Boom").style.color="blue";

    index++;

    if (index > text.length) {
        index = 0;
       
      
}

}


setInterval(writeText,100);
