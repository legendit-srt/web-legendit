window.onload = function esconderComponenteLegenda() {  
    esconderProgressBar();    
    $("#submit").css("display", "none"); 
    $("#btnSubmit").prop("disabled", true);
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

function esconderProgressBar(){
    $("#progressbar").css("display", "none");
}

function mostrarProgressBar(){
    $("#progressbar").css("display", "");
}