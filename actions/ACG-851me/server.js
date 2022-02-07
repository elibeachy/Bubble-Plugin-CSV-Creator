function(properties, context) {
    
    const Papa = require('papaparse');

    let delimiter = properties.delimiter === 'tab' ? '\t' : properties.delimiter,
		content = JSON.parse(`[${properties.source_JSON.replace(/(\r\n|\n|\r)/gm,"")}]`);
	
    // Clean possible CSV Injections
    
    properties.scan_for_csv_injection ? content = injectionCleaner(content) : '';
    
    // USE PAPA TO UNPARSE THE JS 
    
    let csv = Papa.unparse(content,{delimiter: delimiter}),
        csvFile = Buffer.from(csv, 'utf8');
  
 
    return { 

        base64_text: csvFile.toString('base64')

    };
    
    function injectionCleaner(array) {
        
        let 
            badTokens = ["=", "+", "-", "@", "0x09", "0x0D"],
            regexPattern = /(?<=^|\;|\,)./g;
        
        let newArray = array.map((newValue) => {
              Object.entries(newValue).forEach(([key, value]) => {
                // Check if the first character or any character placed
                // after a comma or semicolon is an injection token
                if (!Array.isArray(value) && value.match(regexPattern) !== null) {
                  value = value.replace(regexPattern, (x) => badTokens.includes(x) ? `\'${x}` : x )           
                } else if (Array.isArray(value) && value.length > 0){
                    value = value.map(y => y.replace(regexPattern, (x) => badTokens.includes(x) ? `\'${x}` : x ))
              }
                return (newValue[key] = value);
              }); 
              return newValue;
            });
        
        return newArray;
        
    }
    

}