// menu
function myFunction() {
    document.getElementsByClassName("hd-menu")[0].classList.toggle("responsive");
}
// end menu
// accordion
var acc = document.getElementsByClassName("faq-accordion");
console.log('acc', acc);
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}
        // end accordion