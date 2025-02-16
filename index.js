function openMenu() {
    var navBar = document.getElementById("navBar");
    if(navBar.style.display === "none" || navBar.style.display === "") {
        navBar.style.display = "block";
    } else {
        navBar.style.display = "none";
    }
}

