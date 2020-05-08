function(properties, context) {

	console.log('Creating a CSV with the awesome CSV Creator!')
    
//SET VARIABLES 

	let csvFileName = properties.file_name + ".csv";
    let csvFile;
    let length = properties.col1.length();
    let columns = [], headers = [], lineArray = [], csvArray = [];
   
// CREATE FUNCTIONS
    
    const processList = function(list, length) {
        
        return list != null && list.hasOwnProperty('get') ? list.get(0,length) : [list];

    }
    
    columns.push(processList(properties.col1, length));
   	headers.push(properties.h_01);
    
    // Add data to array
    
    	properties.h_02 != null ? columns.push(processList(properties.col2, length)) && headers.push(properties.h_02) : columns;
    	properties.h_03 != null ? columns.push(processList(properties.col3, length)) && headers.push(properties.h_03) : columns;
    	properties.h_04 != null ? columns.push(processList(properties.col4, length)) && headers.push(properties.h_04) : columns;
    	properties.h_05 != null ? columns.push(processList(properties.col5, length)) && headers.push(properties.h_05) : columns;
    	properties.h_06 != null ? columns.push(processList(properties.col6, length)) && headers.push(properties.h_06) : columns;
    	properties.h_07 != null ? columns.push(processList(properties.col7, length)) && headers.push(properties.h_07) : columns;
    	properties.h_08 != null ? columns.push(processList(properties.col8, length)) && headers.push(properties.h_08) : columns;
    	properties.h_09 != null ? columns.push(processList(properties.col9, length)) && headers.push(properties.h_09) : columns;
    	properties.h_10 != null ? columns.push(processList(properties.col10, length)) && headers.push(properties.h_10) : columns;
        properties.h_11 != null ? columns.push(processList(properties.col11, length)) && headers.push(properties.h_11) : columns;
    	properties.h_12 != null ? columns.push(processList(properties.col12, length)) && headers.push(properties.h_12) : columns;
    	properties.h_13 != null ? columns.push(processList(properties.col13, length)) && headers.push(properties.h_13) : columns;
    	properties.h_14 != null ? columns.push(processList(properties.col14, length)) && headers.push(properties.h_14) : columns;
    	properties.h_15 != null ? columns.push(processList(properties.col15, length)) && headers.push(properties.h_15) : columns;
    	properties.h_16 != null ? columns.push(processList(properties.col16, length)) && headers.push(properties.h_16) : columns;
    	properties.h_17 != null ? columns.push(processList(properties.col17, length)) && headers.push(properties.h_17) : columns;
    	properties.h_18 != null ? columns.push(processList(properties.col18, length)) && headers.push(properties.h_18) : columns;
    	properties.h_19 != null ? columns.push(processList(properties.col19, length)) && headers.push(properties.h_19) : columns;
    	properties.h_20 != null ? columns.push(processList(properties.col20, length)) && headers.push(properties.h_20) : columns;
		properties.h_21 != null ? columns.push(processList(properties.col21, length)) && headers.push(properties.h_21) : columns;
    	properties.h_22 != null ? columns.push(processList(properties.col22, length)) && headers.push(properties.h_22) : columns;
    	properties.h_23 != null ? columns.push(processList(properties.col23, length)) && headers.push(properties.h_23) : columns;
    	properties.h_24 != null ? columns.push(processList(properties.col24, length)) && headers.push(properties.h_24) : columns;
    	properties.h_25 != null ? columns.push(processList(properties.col25, length)) && headers.push(properties.h_25) : columns;
    

        // Clean up special characters from the data
    	// Start by looping through the array of columns
    
    	for (var i = 0; i < columns.length; i ++) {
    			
            var that = columns[i];

            // with each column we go through each item that is not null or a number and strip away all the weird characters
            
            for (var z = 0; z < length; z++){

                that[z] != null && that[z].hasOwnProperty('replace') ? that[z] = that[z].replace(/,/g, '') : that[z];
    
       }
   }
    

    // Now we have data that is cleaned and ready to be manipulated
    // We need to reverse the data structure from our arrays representing columns of the same type of data
    // to each array representing a row of different fields belonging to the same record
        
    
    
	// Convert data to arrays of rows
    
    	for (var i = 0; i < length; i++) {
    
    
            for (var z = 0; z < columns.length; z++) {

                lineArray.push(columns[z][i]);
                    
            }

                
    	csvArray.push(lineArray);
        lineArray = [];
		
        }


            
// PARSE DATA TO CSV
    
    csvFile = Papa.unparse({
	
        "fields": headers,	
        "data": csvArray
		});
    
    // CREATE THE DOWNLOAD
    
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

    openSaveFileDialog(csvFile, csvFileName, 'text/csv');

    

}

