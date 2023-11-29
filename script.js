function convertCSVtoJSON() {
    var csvText = document.getElementById('csv').value;
    var lines = csvText.split("\n");
    var result = [];

    var headers = lines[0].split(",");

    for(var i=1; i<lines.length; i++){
        var obj = {};
        var currentline = lines[i].split(",");

        for(var j=0; j<headers.length; j++){
            obj[headers[j]] = currentline[j];
        }

        result.push(obj);
    }

    document.getElementById('json').value = JSON.stringify(result, undefined, 4);
}