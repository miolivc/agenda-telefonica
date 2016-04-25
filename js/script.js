//  Modal

var dialog = document.querySelector('dialog');
var showDialogButton = document.querySelector('#show-dialog');
var remover = false;
var edit = false;

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

    var row = "<tr onclick ='clicou(this)' ><td>" + nome + "</td><td>"+ data + "</td><td>" + telefone +  "</td><td>"+ email +"</td></tr>"; 
    
    $("tbody").append(row);
    dialog.close();
    
    
/*
    $("tbody").append("<tr onclick ='clicou(this)' ><td>" + nome + "</td><td>"+ data + 
            "</td><td>" + telefone +  "</td><td>"+ email +"</td></tr>");
    dialog.close();*/
});

// Remover Contato

$('#remover').click(function remove(){
    remover = true;
    edit = false;
});

// Atualizar Contato
$('#editar').click(function editar(){
    edit = true;
    remover = false;
});

// Função de Click - É aqui que a magica acontece!

function clicou(tr){ 
    if (remover){
        tr.remove();
        remover = false;
    } 
    if (edit){
        var row = tr;
        var element = row.getElementsByTagName("td");
        $('#nome').val(element[0].innerText);
        $('#data').val(element[1].innerText);
        $('#telefone').val(element[2].innerText);
        $('#email').val(element[3].innerText);    
        
        dialog.showModal();
        edit = false;        

        var nome = $("#nome").val();
        var data = $("#data").val();
        var telefone = $("#telefone").val();
        var email = $("#email").val();

        var newRow = "<tr onclick ='clicou(this)' ><td>" + nome + "</td><td>"+ data + "</td><td>" + telefone + "</td><td>"+ email +"</td></tr>";

        if(newRow == row){
            dialog.close();
            alert("Esse cadastro já existe na tabela!");
        } else {
            $("tbody").append(newRow);
            row.remove();
        }
    }
};

