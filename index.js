function openMenu() {
   let nav = document.getElementsByClassName("green-box")[0];
    if(nav.style.display === "block" || nav.style.display === "") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
   }
   function openToDo(){
   let list = document.getElementsByClassName("box-list")[0];
   if(list.style.display === "block" || list.style.display === "") {
       list.style.display = "none";
   } else {
       list.style.display = "block";

   }


   }
   function OpenAch(){
  let ach = document.getElementsByClassName("box-ach")[0];
  if(ach.style.display === "block" || ach.style.display === "") {
      ach.style.display = "none";       
  } else {
        ach.style.display = "block";
  }
  
   }