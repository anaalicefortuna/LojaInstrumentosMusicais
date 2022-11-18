function handleClick () {
    titulo = document.querySelector('.titulo')
    titulo.innerHTML = 'PROMOÇÕES COM ATÉ 50% DE DESCONTO!!!'
    titulo.style.color = "red";

}

window.addEventListener("load", function() {
    this.setInterval(function(){
        changeBgColer();
    }, 1000);
})

    function changeBgColer() {
        function radom(number){
            return Math.floor(Math.random()*(number +1));
        }
        const rndCol = `rbg (${random(255)},${random(255)}, ${random(255)})`;
        document.body.style.backgroundColor = rndCol;
    }

