
//  Modal

var dialog = document.querySelector('dialog');
var showDialogButton = document.querySelector('#show-dialog');

if (! dialog.showModal) {
    dialogPolyfill.registerDialog(dialog);
 }

showDialogButton.addEventListener('click', function() {
      dialog.showModal();
 });

dialog.querySelector('.close').addEventListener('click', function() {
      dialog.close();
 });

// Adicionar

$("#adicionar").click(function adicionar(){

    var nome =  $("#nome").val();

    $("tbody").append("<tr><td>" + nome   //$("#nome").val()
    + "</td><td>"+ $("#data").val() + "</td><td>" + $("#telefone").val() +  "</td><td>"+ $("#email").val() +"</td></tr>");

});

