$("document").ready(function(){

checkInput();
  
function checkInput(){
  var inputText = $('#input-text').val();
  if (isNaN(inputText)){
    alert("That is not a number.");
    return false;
  }
}
});

//function checkInput(){
//  var inputText = $('#input-text').val();
//  if (isNaN(inputText.value) == true){
//    alert("That is not a number.");
//  }
//}