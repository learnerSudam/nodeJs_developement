module.exports.const.REQUEST_TIMEOUT = 500;  //in this case we won't be needing the module.exports block at the end of this esction as we are directly assigning them to the functions
function encrypt(data){
    return 'encrypted data'
}

module.exports.send = function send(url, data){
    const encryptedData = encrypt(data);
    console.log(`sending ${encryptedData} to ${url}`)
}

module.exports = { //Here we can export multiple functions
    REQUEST_TIMEOUT,
    send, 
}

module.exports = function send2 (url, data){  //in this case case send2 function is the only function that we will be exporting 
    const encrptdata = encrypt(data)
}

//so when we import this  into another module , the const becomes the function. 
 const send2 = require('./request.mjs')
 return read() //this should still work
