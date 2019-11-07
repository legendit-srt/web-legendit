function carregarRegras(documentBody){
    let blob = documentBody.getElementById(`file-input`).files[0];

    if (blob != null) {
        let extensao = blob.name.substring(blob.name.indexOf(".") + 1);

        if ((extensao == "mp3") || (extensao == "mp4") || (extensao == "flac") || (extensao == "wav")){
            documentBody.getElementById("titulouploadarea").innerHTML = blob.name;
            $("#btnSubmit").prop("disabled", false);
        } else {
            alert("Tipo de arquivo inválido");
            window.location.reload(true);
        }
                
    }
}
