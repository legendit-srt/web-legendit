window.onload = function onLoad() {  
    esconderProgressBar();   
    esconderComponenteLegenda();    
    mostrarComponenteUpload();
    //esconderVideo();
    $("#btnSubmit").prop("disabled", true);
};

function esconderComponenteLegenda(){
    $("#submit").css("display", "none"); 
};

function mostrarComponenteLegenda(){
    $("#submit").css("display", "");
};

function mostrarVideo(){
    $("#video").css("display", ""); 
};

function esconderVideo(){
    $("#video").css("display", "none"); 
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