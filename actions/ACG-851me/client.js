function(properties, context) {
    
    const Papa = require('papaparse');

    let delimiter = properties.delimiter === 'tab' ? '\t' : properties.delimiter,
		content = JSON.parse(`[${properties.source_JSON.replace(/(\r\n|\n|\r)/gm,"")}]`),
    	filename = properties.file_name + ".csv";
	
    
    // USE PAPA TO UNPARSE THE JSON
    
    let csv = Papa.unparse(content,{delimiter: delimiter}),
        csvFile = Buffer.from(csv, 'utf8');
  
 
    return { 

        base_64: csvFile.toString('base64')

    };
    
    
}