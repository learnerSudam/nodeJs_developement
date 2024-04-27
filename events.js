//Event emitter
const EventEmitter = require('events')
const celebrity = new EventEmitter();

//Subscriber to celebrity for observer 1
celebrity.on('race', (result) =>{  
    if(result === 'win'){
        console.log('Congratulations! You are the best')
    }   

})

//Subscriber to celebrity for observer 2
celebrity.on('race', (result) =>{
    if(result === 'lost'){
        console.log('Boo! i could have done better..')
    }
    
})

//this will be executed when there are no more code is to be executed. the argument code refers to 0 for normral executions
// and non zero numbers for executons where error was caught
process.on('exit', (code) => {
    console.log('Process exit event with code: ', code);
});
//What node does is  it omits an event when it's ready to exit  the process and then exits immediately after

//ceating events
celebrity.emit('race', 'win')
celebrity.emit('race', 'lost')
