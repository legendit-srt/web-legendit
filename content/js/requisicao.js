let nomeArquivo;
let jaRequisitado;
let extensao;
let caminhoVideo;

function requisitar(requisicaoBody) {		
	$(requisicaoBody).ready(function () {
        $("form").submit(function (event) {
            event.preventDefault();
            
            if (!jaRequisitado) {
                
                let blob = requisicaoBody.getElementById(`file-input`).files[0];

                if (blob != null) {
                    let file = new File([blob], `${Date.now()}-${blob.name}`, { type: blob.type });
                    let formData = new FormData();
                    formData.append(`file`, file);
                    
                    esconderComponenteUpload();
                    mostrarProgressBar();
        
                    nomeArquivo = blob.name.substring(0, (blob.name.indexOf(".")));
                    extensao = blob.name.substring(blob.name.indexOf(".") + 1);
           
                    requisitarNodeS3Upload(formData, requisicaoBody);  
                } else {                    
                    window.location.reload(true);
                    ohSnap('Nenhum arquivo foi adicionado!', {color: 'red'});
                }            
            }

        });
    });		
}	

function requisitarNodeS3Upload(formData, requisicaoBody) {
    $.ajax({
        async: true,
        type: "POST",
        enctype: 'multipart/form-data',
        url: "https://legendit-api.herokuapp.com/posts",
        data: formData,
        processData: false,
        contentType: false,
        cache: false,

        success: function (data) {
            caminhoVideo = data.location; 
            requisicaoBody.getElementById("progressbar").innerHTML = "Legendando, aguarde... Que tal um café? =]";
            requisitarPythonTranscribe(data, requisicaoBody);             
        },
        
        error: function (e) {
            console.log(e);
            alert("Erro ao fazer o upload. Entre com contato com nosso suporte.");
            window.location.reload(true);
        }
    });  
}

function requisitarPythonTranscribe(data, requisicaoBody) {
    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',                        
        url: "http://127.0.0.1:8000/api/legendar",
        //url: "http://django-env.xvbuikye2d.us-west-2.elasticbeanstalk.com/api/legendar",                   
        data: "{\"nome\":".concat(`"${data.key}"}`),
        processData: false,
        contentType: 'application/json',
        cache: false,
        crossDomain: true,

        success: function (data) {
            console.log(createSRT(JSON.stringify(data)));
            requisicaoBody.getElementById("legendagerada").value = createSRT(JSON.stringify(data));
            mostrarComponenteLegenda();
            esconderProgressBar();
            requisicaoBody.getElementById("titulo").value = nomeArquivo;  
            requisicaoBody.getElementById("video").src = caminhoVideo;
            mostrarVideo();
            jaRequisitado = true;   
            ohSnap('Legenda gerada com sucesso!', {color: 'green'});
        },
        
        error: function (e) {
            console.log(e);
            alert("Erro! arquivo não foi legendado. Isso pode ter ocorrido devido a algum caractere especial no nome do arquivo. Favor alterar o nome do arquivo e realizar o processo novamente. Caso o erro persista, entre em contato com nosso suporte.");
            window.location.reload(true);
        }
    });
}