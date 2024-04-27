function decrypt (data){
    return 'decrypted data'
}

function read(){
    return decrypt('data')
}
const REQUEST_TIMEOUT = 500;

module.exports =  {
    read, REQUEST_TIMEOUT
}

console.log('caching node modues')