//Fancy Way
const request = require('./request')
const response =  require('./response')

// module.exports = {
//     send : request.send,
//     REQUEST_TIMEOUT: request.REQUEST_TIMEOUT,
//     read : response.read
// }

//using spread opearator
//Spread operator takes all the properties in the file and unpacks them, so that the same properties with same  names exist on our new object without us having to do it for every single property like we did before

module.exports = {
   ...require('./request'),
   ...require('./response')
}


//simple way
// module.exports = {
// request : require('./request'),
// response: require('./response')
// }