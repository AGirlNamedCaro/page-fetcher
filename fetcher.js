/**
 * Fetcher.js should take a url as a CLI argument as well as a local file path and 
 * download the resource to the specified path
 * 
 * INPUT:
 * URL, local file path
 * 
 * OUTPUT:
 * Downloaded and saved x bytes to path
 * 
 * EDGE CASES:
 * 1.What happens if the local file path already exists?
 * - Overwrite it - no prompting
 * 2.What happens if the file path is invalid?
 * -Make sure its valid & let the user know the issue
 * 3.What happens if the URL results in an error or non-200 result?
 * -terminate the app explaining to the user what went wrong, and do NOT write the response to
 * the file
 */

 //Get CLI arguments & take care of them
  // const var = process.argv.slice(2);
 //Make a request with HTTPS
  //See request example for how to make HTTPS request
  //Check for all 3 edge cases with Switch statements
  //Write to file path with fs
const request = require('request');
const fs = require('fs');
 
const fetcher = (URL,filePath, ) => {
  let commandLineArguments = process.argv.slice(2);
  const url = commandLineArguments[0] + '';
  const filePathToWrite = commandLineArguments[1] + '';
  
  request(url , (error,response,body) => {
  // console.log('error', error);
  // console.log('statusCode: ', response && response.statusCode);
  //console.log('body: ', body);

    if(error) {
      console.log("There was an error with the URL provided. Please try again")
      process.exit();
    } 
    else {

      fs.writeFile(filePathToWrite, body, function(err) {
        if(err) {
          return console.log(err);
        }
        fs.stat(filePathToWrite[1], (err, stat) => {
          if(err) {
            console.log("Invalid local path file. Please try again");
            process.exit();
          }
          console.log( `Downloaded and saved ${stat['size']} bytes to ${filePathToWrite}`);
      })
      })

    }
  
        
})


 

}

 fetcher();
 




