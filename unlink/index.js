
const fs = require('fs');

function deleteFile(){
    try{
        fs.unlinkSync('copy.txt')
    }
    catch(error){
        console.log(error)
    }
}
deleteFile();

