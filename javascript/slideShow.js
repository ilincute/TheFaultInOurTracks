var slideIndex = 1;
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

function getMain() {
    document.getElementById('intro-page').classList.add('animated');
    document.getElementById('intro-page').classList.add('slideOutUp');
    document.getElementById('main-page').style.display = 'flex';
    setTimeout( () => {
        document.getElementById('intro-page').style.display = 'none';
    }, 1000);

}