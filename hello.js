function findMeaning(){
return 42;
}
console.log(findMeaning())

// const mission = 'learn'

// if (mission === 'learn'){
//     console.log('Time to write some Node code')
// }

// else{
//     console.log(`Is ${mission} really more fun`)
// }

const mission = process.argv[2] //here mission is refered to the argument that is passed in the command line at 2nd index node hello.js explore(explore is the 2nd index argument, Hence mission will be referencing to explore)

if (mission === 'learn'){
    console.log('Time to write some Node code')
}

else{
    console.log(`Is ${mission} really more fun`)
}




