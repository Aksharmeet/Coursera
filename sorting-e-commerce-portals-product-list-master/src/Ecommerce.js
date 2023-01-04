
//import all the require modules

//write try catch to hanlde the exceptions

//More userdefined methods can be written if required to write the logical stuff

//return the callback with appropriate data where ever require in all the methods

//This method will read the file it takes two parameters first the fileName 
//and second the callback
const readFileContents = (fileName, cb) => {
 
}

//This method will sortDataonprice it will take two parameters one is fileContent
//second the callback
const sortDataOnPrice = (fileContents, cb) => {
  //use lodash.sortBy()


  cb(null, sortedData);
}

//This method will sortDataonRating 
const sortDataOnRating = (fileContents, cb) => {
//use map where ever required 
  
//use lodash sortBy() and compact() if required


  //use lodash.reverse() if required
  cb(null, lodash.reverse(sortedData));
}

//This method will write the sortedData in the output file
const writeSortedDataToFile = (outputFileName, sortedData, cb) => {
 
}





module.exports = {
    readFileContents,
    sortDataOnPrice,
    sortDataOnRating,
  
}