window.addEventListener("scroll", () => {
    console.log("hello");
    if(window.scrollY > 500) {
        document.getElementById("back-to-top").style.opacity = "1";
        console.log("hello");
    }
    else {
        document.getElementById("back-to-top").style.opacity = "0";
    }

})

function returnToTop() {
    scroll(0,0);
}
