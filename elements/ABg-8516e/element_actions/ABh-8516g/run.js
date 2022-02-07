function(instance, properties, context) {



    let delimiter = properties.delimiter === 'tab' ? '\t' : properties.delimiter,	
    	csvData,
		content = JSON.parse(`[${properties.source_JSON.replace(/(\r\n|\n|\r)/gm,"")}]`),
    	filename = properties.file_name + ".csv",
        mimetype = 'text/csv';

    
    // USE PAPA TO UNPARSE THE JSON
    
    csvData = Papa.unparse(content,{delimiter: delimiter});

    
    // CREATE THE BLOB
    
    var blob = new Blob([csvData], {type: mimetype});
    
    
    // RETURN FILE TO ELEMENT
    
    createFile()
    
    
    // RUN THE SAVE FILE FUNCTION
    
    properties.save_file ? openSaveFileDialog(csvData, filename, mimetype) : '';
    
    
    // CREATE THE DOWNLOAD
    
    function openSaveFileDialog (data, filename, mimetype) {

        if (!data) return;

        /* var blob = data.constructor !== Blob
        ? new Blob([data], {type: mimetype || 'application/octet-stream'})
        : data ;*/
              
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
    
    // CREATE AN UPLOADABLE URL FOR THE FILE
    
    function createFile(){

        var reader = new FileReader();
        
        reader.readAsDataURL(blob)

        reader.onloadend = function () {

            var base64String = reader.result;

            // Remove the additional data at the front of the string

            var base64Substring = base64String.substr(base64String.indexOf(',') + 1)

            // Upload to the CSV Creator element
            context.uploadContent( filename, base64Substring, uploadFile);

        }

    }
        
    // PUBLISH URL TO ELEMENT
    
    function uploadFile(err, url){

        instance.publishState('created_file', url);
        instance.triggerEvent('has_created_your_file')

        if (err){

            console.log('error '+ err);

        }

    }

}