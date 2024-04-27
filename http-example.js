const http = require('https') //here the require function has set the http constant to the set of functions and data returned from http mudule

//request function is one of these functions . It takes a string(a url) as first argument and a call back function as second argument. This 
//convention we will see through out node, where the callback is the the last argument that we pass into an asynchronous function

//here we need to do something with the response results of this function call. So to access it by first saving it to a constant, that will call the request
//here our library needs to know which protocol we're using and it's very sensitive (http/https)
//Https keeps the data encypted when it's being sent between our machine and google's servers
//to use https encryption, we have to import https module from node
const req = http.request('https://www.google.com', (res) =>{   //here response will be result received from the request made to google.com
      //the way we get data back from our response is by calling the on function, which takes name of an event as string and then a listener as a callback
      res.on('data', (chunk) =>{   //the event yhat we're going to be responding to is called data. And the data eveent has a paramenter for a chunk of data returned by that event
        console.log(`data chunk: ${chunk}`) //A chunk is just a piece of data, That's not necessarily the whole of the response, we 
      })
      //If the size of of the response from our server is very largse and the fact that we can get more than one of these events makes it a perfect use case for the event emitter.
      //Our response here is, among other things , an event emitter. One of the other events it can emit is the end event.Which is sent when there's no more data coming from the request
      res.on('end', () =>{
    console.log('No more data');
      });

})

//we always need to do call end because the end function will cause the request to be sent. Otherwise no request will be made

req.end();

//here we noticed that we're always using the request function from the http module.In case like this when we know exactly what we are using
//Using modern ecma script is a good idea
const {request} = require('https')
//now the request function doesn't need to be pre fixed by the http.
const req1 = request ('https://www.google.com', (res) =>{
    res.on('data', (chunk) =>{
        console.log(`data chunk: ${chunk}`)
    })
    res.on('end' , () =>{
        console.log('No More data to')
    })
})

req1.end();


//This is very helpful in knowing exactly what functionality we're relying on from each of our modules.
//It makes it easy to swith if we wanted to replace our function with a different one
//The http and https modules include  convenience function that's called Gst. Which does thesame thing.It is only use ful when we're getting dat from server, Not sending data in it's direction

const { get } = require('https')
//now the request function doesn't need to be pre fixed by the http.
 get ('https://www.google.com', (res) =>{
    res.on('data', (chunk) =>{
        console.log(`data chunk: ${chunk}`)
    })
    res.on('end' , () =>{
        console.log('No More data to log')
    })
})

//here we don't need to call the end function. it's directly called by get
//req1.end(); 
