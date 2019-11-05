let nomeArquivo;
let jaRequisitado;

function requisitar(requisicaoBody) {		
	$(requisicaoBody).ready(function () {
        $("form").submit(function (event) {
            event.preventDefault();
            
            if (!jaRequisitado) {
                
            let blob = requisicaoBody.getElementById(`file-input`).files[0];
            let file = new File([blob], `${Date.now()}-${blob.name}`, { type: blob.type });
            let formData = new FormData();
            formData.append(`file`, file);
    
            $("#btnSubmit").prop("disabled", true);
            $("#btnDownload").prop("disabled", true);
    
            nomeArquivo = blob.name;

            requisitarNodeS3Upload(formData, requisicaoBody);  
            
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
            requisitarPythonTranscribe(data, requisicaoBody);             
        },
        
        error: function (e) {
            console.log(e);
            $("#btnSubmit").prop("disabled", false);
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
            $("#btnSubmit").prop("disabled", false);
            $("#btnDownload").prop("disabled", false);
            mostrarComponenteLegenda();
            esconderComponenteUpload();
            requisicaoBody.getElementById("titulo").value = nomeArquivo;
            jaRequisitado = true;   
        },
        
        error: function (e) {
            console.log(e);
            $("#btnSubmit").prop("disabled", false);
             $("#btnDownload").prop("disabled", false);
        }
    });
}