var Obj;
function apiCall () {
    fetch("https://type.fit/api/quotes")
    .then(function(response){
        return response.json()
    })
    .then(function(data) {
        Obj = data;
        init()
    })
}
apiCall()
function init() {
    console.log(Obj);
    initQuoteBox()
}

function initQuoteBox() {
    let index = Math.floor(Math.random()*Obj.length);
    let red = Math.floor(Math.random()*100);
    let blue = Math.floor(Math.random()*100);
    let green = Math.floor(Math.random()*100);
    let color = `rgb(${red},${blue},${green})`;

    document.body.style.backgroundColor = color;
    document.querySelector("#text").style.color = color;
    document.querySelector("#author").style.color = color;
    document.querySelector("#nextButton").style.color = color;

    document.querySelector("#text").innerText = Obj[index].text
    document.querySelector("#author").innerText = "-"+Obj[index].author
}