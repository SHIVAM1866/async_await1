// async always return promise
//async function getData(){
//    return "Namaste";
//}
//to handle promise we can use .then()
//if we return Promise it will be always return as well

//const dataPromise=getData()
//dataPromise.then((res)=>console.log(res))

//async and await are use to handle promise
//await always use inside your async function
// const promise= new Promise(function(resolve,reject){
//     setTimeout(function(){      
//         resolve("Hello Namste");
//     },10000);
//  })
// async function hello(){
//     const data=await promise;
//     console.log(data)
// }
// hello();

// const promise= new Promise(function(resolve,reject){
//     setTimeout(function(){      
//         resolve("Hello Namste");
//     },10000);
//  })

// async function hello(){
//  // JS ENGINE WAS WAITING FOR PROMISE TO RESOLVED if we use await keyword
//     const data=await promise;
//     console.log("namaste javascript")
//     console.log(data)
// }
// hello();

// function hello(){
//   // js engine wait for promise to be resolved
//     promise.then((res)=>console.log(res));
//     console.log("Namaste Javascript");
// }

//to get any error
const API_URL="https://invalid" 
async function hello(){
    try{
    const data=await fetch()
    const jsonvalue=await data.json();
    console.log(jsonvalue)
    }
    catch(err){
    console.log(err)
    }
}
hello()