function openMenu() {
   let nav = document.getElementsByClassName("green-box")[0];
   if(nav.style.display === "none"|| nav.style.display === "") {
      nav.style.display = "block";
   } else {
      nav.style.display = "none";
   }
}

