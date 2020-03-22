
function changeImage(imgElement, imagePath) {
    imgElement.src = imagePath;

}

function styleControl(formElement) {
formElement.style.backgroundColor = "#eee";

}

function hidestyle(formElement) {
    formElement.style.backgroundColor = "#fff";
}


$(document).ready(function(){
   $("#menu").click(function() {
       $("#navPanel").fadeIn('slow');
   });

   $("#navPanel").click(function(){
    $(this).fadeOut('slow');  
   })
})
