window.onload = function onLoad() {  
    esconderProgressBar();   
    esconderComponenteLegenda();    
    mostrarComponenteUpload();
    esconderVideo();
    esconderAudio();
    desativarBotaoLegendar();
};

function ativarExtratorAudio() {
    $("#extratorAudio").css("pointer-events", "")
}

function desativarExtratorAudio() {
    $("#extratorAudio").css("pointer-events", "none")
}

function desativarBotaoLegendar() {
    $("#btnSubmit").prop("disabled", true);
}

function ativarBotaoLegendar() {
    $("#btnSubmit").prop("disabled", false);
}

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

function mostrarAudio(){
    $("#audio").css("display", ""); 
};

function esconderAudio(){
    $("#audio").css("display", "none"); 
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