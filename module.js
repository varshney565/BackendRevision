const fs = require('fs');
fs.readdir("/home/user/Desktop/Backend",(err,files)=>{
    // for (let file of files) {
    //     console.log(file);
    // }
    files.forEach((file)=>{
        console.log(file);
    });
});