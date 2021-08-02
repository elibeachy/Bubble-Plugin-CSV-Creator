function(properties, context) {

    
    let csvFile;

  //Load any data 
    
    let content = JSON.parse(`[${properties.source_JSON}]`);
    
	csvFile = "\uFEFF" + Papa.unparse(content,{delimiter: delimiter});
    
    console.log(csvFile)
    
    
    // CREATE THE DOWNLOAD
    

    var filename = properties.file_name + ".csv";
	var data = csvFile;
    var mimetype = 'text/csv';
    
        function openSaveFileDialog (data, filename, mimetype) {

          if (!data) return;

          var blob = data.constructor !== Blob
            ? new Blob([data], {type: mimetype || 'application/octet-stream'})
            : data ;

          if (navigator.msSaveBlob) {
            navigator.msSaveBlob(blob, filename);
            return;
          }

          var lnk = document.createElement('a'),
              url = window.URL,
              objectURL;

          if (mimetype) {
            lnk.type = mimetype;
          }

          lnk.download = filename || 'untitled';
          lnk.href = objectURL = url.createObjectURL(blob);
          lnk.dispatchEvent(new MouseEvent('click'));
          setTimeout(url.revokeObjectURL.bind(url, objectURL));

        }

    openSaveFileDialog(data, filename, mimetype);
    

}
