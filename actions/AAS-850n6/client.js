function(properties, context) {


//SET VARIABLES 
    

	var content = properties.headers + "\n";
    var csvFile = "data:text/csv;charset=utf-8,";
    
    
// PARSE THE SUBMITTED DATA    
    

    var parseCol1 = Papa.parse(properties.col1.replace(/,/g, ''), {        
        header: false,
        delimiter: ","
   			 }
       );


    
    if (properties.usecol2){
    var parseCol2 = Papa.parse(properties.col2.replace(/,/g, ''), {        
        header: false,
        delimiter: ","
    		}
       );
 
    }
    
    if (properties.usecol3){
    var parseCol3 = Papa.parse(properties.col3.replace(/,/g, ''), {        
        header: false,
        delimiter: ","
   			 }
       );
    }
        
    if (properties.usecol4){
    var parseCol4 = Papa.parse(properties.col4.replace(/,/g, ''), {        
        header: false,
        delimiter: ","
   			 }
       );
 
    }
        
    if (properties.usecol5){
    var parseCol5 = Papa.parse(properties.col5.replace(/,/g, ''), {        
        header: false,
        delimiter: ","
   			 }
       );
 
    }
        
    if (properties.usecol6){
    var parseCol6 = Papa.parse(properties.col6.replace(/,/g, ''), {        
        header: false,
        delimiter: ","
   			 }
       );
 
    }
        
    if (properties.usecol7){
    var parseCol7 = Papa.parse(properties.col7.replace(/,/g, ''), {        
        header: false,
        delimiter: ","
   			 }
       );
 
    }
        
    if (properties.usecol8){
    var parseCol8 = Papa.parse(properties.col8.replace(/,/g, ''), {        
        header: false,
        delimiter: ","
   			 }
       );

    }
        
    if (properties.usecol9){
    var parseCol9 = Papa.parse(properties.col9.replace(/,/g, ''), {        
        header: false,
        delimiter: ","
   			 }
       );
 
    }
        
    if (properties.usecol10){
    var parseCol10 = Papa.parse(properties.col10.replace(/,/g, ''), {        
        header: false,
        delimiter: ","
   			 }
       );

    };

    if (properties.usecol11){
    var parseCol11 = Papa.parse(properties.col11.replace(/,/g, ''), {        
        header: false,
        delimiter: ","
   			 }
       );

    }
        
    if (properties.usecol12){
    var parseCol12 = Papa.parse(properties.col12.replace(/,/g, ''), {        
        header: false,
        delimiter: ","
   			 }
       );

    }
        
    if (properties.usecol13){
    var parseCol13 = Papa.parse(properties.col13.replace(/,/g, ''), {        
        header: false,
        delimiter: ","
   			 }
       );

    }
        
    if (properties.usecol14){
    var parseCol14 = Papa.parse(properties.col14.replace(/,/g, ''), {        
        header: false,
        delimiter: ","
   			 }
       );
 
    }
        
    if (properties.usecol15){
    var parseCol15 = Papa.parse(properties.col15.replace(/,/g, ''), {        
        header: false,
        delimiter: ","
   			 }
       );

    };    
    


// COMPILE THE CSV TEXT
    
    
    for (i = 0; i < parseCol1.data.length; i++){
        
        content += parseCol1.data[i];
        
        if (properties.usecol2){
            content += ", " + parseCol2.data[i];
        };

        if (properties.usecol3){
            content += ", " + parseCol3.data[i];
        };

        if (properties.usecol4){
            content += ", " + parseCol4.data[i];
        };
        
         if (properties.usecol5){
            content += ", " + parseCol5.data[i];
        };
        
         if (properties.usecol6){
            content += ", " + parseCol6.data[i];
        };
        
         if (properties.usecol7){
            content += ", " + parseCol7.data[i];
        };
        
         if (properties.usecol8){
            content += ", " + parseCol8.data[i];
        };
        
         if (properties.usecol9){
            content += ", " + parseCol9.data[i];
        };
        
         if (properties.usecol10){
            content += ", " + parseCol10.data[i];
        };               
        
         if (properties.usecol11){
            content += ", " + parseCol11.data[i];
        };
        
         if (properties.usecol12){
            content += ", " + parseCol12.data[i];
        };
        
         if (properties.usecol13){
            content += ", " + parseCol13.data[i];
        };
        
         if (properties.usecol14){
            content += ", " + parseCol14.data[i];
        };
        
         if (properties.usecol15){
            content += ", " + parseCol15.data[i];
        };        
        content += "\n";
                        
      };
         
 
// CREATE THE DOWNLOAD
    

    var filename = properties.file_name + ".csv";
	var data = content;
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


