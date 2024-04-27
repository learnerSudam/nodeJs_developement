function encrypt(data){
    return 'encrypted data'
}

function send(url, data){
    const encryptedData = encrypt(data);
    console.log(`sending ${encryptedData} to ${url}`)
}
const REQUEST_TIMEOUT = 500;

module.exports =  {
    send,
    REQUEST_TIMEOUT //here we are just sharing send function . though encrpt function is used inside send data we don't need to share it with other module
}

//here we have set the example,  there is a function that we only want to export and one that is only really relevant withini that module
//how the data is encrypted or decrypted is not something the https module wory about
//here we only care about the public interface for the  modules that we're using