var accordion = document.getElementsByClassName("faq");
for (var i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var dropdown = this.nextElementSibling;
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "block";
    }
  });
}
// const accordion = document.getElementsByClassName("faq");
// for (i=0; i<accordion.length; i++) {
//   accordion[i].addEventListener('click', function () {
//     this.classList.toggle('active')
//   })
// }
var extend = document.getElementByIdName('faq');
for (var k = 0; k < extend.length; k++){
extend[k].addEventListener(click, function(){
  if(dropdown.style.display === "block"){
    document.getElementsByName('faq').style.height = "1000px";
  }else{
    document.getElementsByName('faq').style.height = "800px";
  }
})
}