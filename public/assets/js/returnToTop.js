window.addEventListener("scroll", () => {
    if(window.scrollY > 4567) {
        document.getElementById("back-to-top").style.opacity = "1";
    }
    else {
        document.getElementById("back-to-top").style.opacity = "0";
    }

})

function returnToTop() {
    scroll(0,0);
}
