//const Dosomething = () =>{
   // setTimeout(() => {
   //     console.log("Do something");
  //  },2000);
//}
//console.log("hello world");
//Dosomething();
//console.log("bybye");
//const PromiseMe = new Promise((resolve,reject)=>{
  //  setTimeout(()=>{
        //resolve("Success");
    //    reject("Failed");
    //},2000);
//});


//console.log("hello world");
//PromiseMe.then( result =>{
 //   console.log(result);
//}).catch( err =>{
//    console.error(err);
//});
//console.log("bybye");

const getData = async () =>{
    const data = await fetch("https://jsonplaceholder.typicode.com/users/1").then(result => result.json());
    console.log(data);
}

console.log("hello world");
getData();
console.log("bybye");