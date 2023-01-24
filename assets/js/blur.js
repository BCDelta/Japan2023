//If user clicks on article, hide the quotes button
document.getElementById("city-selection").addEventListener("focusin", () => {
    document.getElementById("quote").style.display = "none"
})

document.addEventListener("click", () => {
    //If user clicks outside of article, bring back quotes button
    if(document.activeElement === document.body) {
        document.getElementById("quote").style.display = "block"
    }
    //If user clicks on close button, bring back quotes button
    var closeButtons = document.getElementsByClassName("close")
    var i;
    for(i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener("click", () => {
            document.getElementById("quote").style.display = "block"
        })
    }
})
