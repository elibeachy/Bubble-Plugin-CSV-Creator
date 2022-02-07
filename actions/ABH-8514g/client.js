function(properties, context) {

    let delimiter = properties.delimiter === 'tab' ? '\t' : properties.delimiter,	
    	csvFile,
		content = JSON.parse(`[${properties.source_JSON.replace(/(\r\n|\n|\r)/gm,"")}]`),
    	filename = properties.file_name + ".csv",
        mimetype = 'text/csv';

    
    // USE PAPA TO UNPARSE THE JS Array
    
    csvFile = Papa.unparse(content,{delimiter: delimiter});
    

    
    
    // RUN THE SAVE FILE FUNCTION
    
    openSaveFileDialog(csvFile, filename, mimetype);
    
    
    // CREATE THE DOWNLOAD
    
    function openSaveFileDialog (data, filename, mimetype) {

        if (!data) return;

        var blob = data.constructor !== Blob
        ? new Blob([data], {type: mimetype || 'application/octet-stream'})
        : data ;
      
          // DOWNLOAD FILE 
        
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
    

    // Will use this function to post to an endpoint
    
    function uploadCallback(err, url){
        
        if (url) {
            
            alert(url)
     
        } else {
            
            alert(err)
        }
        
    }
    
}