function createSRT(legendaJson) {
    var resultado = "";
    var start_time = "";
    var end_time = "";
    var sentence = "";
    var n = 1;
    var t = 1;
    var wtb = 10;

    var j = JSON.parse(legendaJson); 
    var c = j.results.items.length;
    for (i = 0; i < c; i++) {
        if (j.results.items[i].type == "pronunciation") {
            if (start_time == "") start_time = j.results.items[i].start_time;
            end_time = j.results.items[i].end_time;
            sentence += j.results.items[i].alternatives[0].content + " ";
            t++;
        }
        else if (j.results.items[i].type == "punctuation" && j.results.items[i].alternatives[0].content == ".") {
            resultado += n + "\n";
            resultado += formatTime(start_time) + " --> " + formatTime(end_time) + "\n" + sentence + "\n\n";
            sentence = "";
            start_time = "";
            n++;
            t = 1;
        }
        if(t > wtb){
            resultado += n + "\n";
            resultado += formatTime(start_time) + " --> " + formatTime(end_time) + "\n" + sentence + "\n\n";
            sentence = "";
            start_time = "";
            n++;
            t = 1;
        }
    }

    return resultado;
}

function formatTime(t) {
    a = t.split(".");
    var date = new Date(null);
    date.setSeconds(a[0]); 
    var result = date.toISOString().substr(11, 8);
    return result + "," + a[1];
}