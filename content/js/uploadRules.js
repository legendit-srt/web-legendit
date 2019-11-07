function carregarRegras(documentBody){
    let blob = documentBody.getElementById(`file-input`).files[0];

    if (blob != null) {
        let extensao = blob.name.substring(blob.name.indexOf(".") + 1);

        documentBody.getElementById("titulouploadarea").innerHTML = blob.name;

        if ((extensao == "mp3") || (extensao == "mp4") || (extensao == "flac")){            
            $("#btnSubmit").prop("disabled", false);
        } else {
            ohSnap('Tipo de arquivo inválido! Tipos suportados: MP3, MP4 e FLAC.', {color: 'red'});
            $("#btnSubmit").prop("disabled", true);
        }
                
    }
}
