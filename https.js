// //here we have created our own module
//const internals = require ('./Internals')

//using destructuring 
const {send, read} = require ('./Internals')
// const {send}  = require  './Internals/request.js' //here the module will be passed as string, ./ for looking in the currect directory and ../ for looking in the parent folder
// const  {read} = require './Internals/response.js'
// import { REQUEST_TIMEOUT } from './Internals/response.js';
 //her require method by default looks for js files, then json and Node, here the read constant is setting to the read property returned with response module

 //simple way
// function makerequest (url, data){
// internals.request.send(url, data);  //here to use the functions from the public interface, we have to use const name under which it has been imported and . function name  in this case request.send()
// return internals.response.read();
// }

//destructuring way
function makerequest(url, data){
    send(url, data);
    return read();
}
//fancy way
// function makerequest(url, data){
//     internals.send(url, data);
//     return internals.read();
// }
//console.log(require.cache)
const responseData = makerequest('https://wwww.google.com', 'hello')
console.log(responseData)

