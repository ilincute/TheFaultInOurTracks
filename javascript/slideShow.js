var slideIndex = 1;
var contor = true;
showSlide(slideIndex);

function nextPhoto(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    var i;
    var x = document.getElementsByClassName("myslides");
    if (n > x.length) {
        slideIndex = 1
    } 
    if (n < 1) {
        slideIndex = x.length
    };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "flex"; 
}

function startSlide() {
    if(contor == true){
        setTimeout(function(){ 
            nextPhoto(+1);
            startSlide();
         }, 3000);
    }

}
function setContor(value) {
    let ok = 0;
    contor = value;
    console.log(contor);
}