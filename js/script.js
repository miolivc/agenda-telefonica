
//  Modal

var dialog = document.querySelector('dialog');
var showDialogButton = document.querySelector('#show-dialog');
var remover = false;

if (! dialog.showModal) {
    dialogPolyfill.registerDialog(dialog);
 }

showDialogButton.addEventListener('click', function() {
      dialog.showModal();
 });

dialog.querySelector('.close').addEventListener('click', function() {
      dialog.close();
 });

/* Métodos CRUD */

// Adicionar Contato

$("#adicionar").click(function adicionar(){
    var nome = $("#nome").val();
    var data = $("#data").val();
    var telefone = $("#telefone").val();
    var email = $("#email").val();

    $("tbody").append("<tr onclick ='clicou(this)' ><td>" + nome + "</td><td>"+ data + "</td><td>" + telefone +  "</td><td>"+ email +"</td></tr>");
    
    dialog.close();
});

$('#remover').click(function remove(){
    remover = true;
});

function clicou(tr){ 
    if (remover)
        tr.remove();
    remover = false;
};




