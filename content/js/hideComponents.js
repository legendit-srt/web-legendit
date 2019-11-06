window.onload = function esconderComponenteLegenda() {    
    $("#submit").css("display", "none"); 
};

function mostrarComponenteLegenda(){
    $("#submit").css("display", "");
};

function esconderComponenteUpload(){
    $("#formUpload").css("display", "none");
};

function mostrarComponenteUpload(){
    $("#formUpload").css("display", "");
};

function atualizarPagina(){
    window.location.reload(true);
};
