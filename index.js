// function increaseCounter(n){
//     return function(){
//         console.log("inside function",n)
//       return  ++n;
//     }

// }
// const fun=increaseCounter(5)
// console.log(fun())
// console.log(fun())
// console.log(fun())
// console.log(fun())
// console.log(fun())

// var expect = function(val) {
//     const toBe=(n)=>{
//         if(val===n)return ({'value':true})
//         else{return ({'error':'Not Equal'})}
//     }
//       const notToBe=(n)=>{
//         if(val!==n)return ({'value':true})
//         else{return ({'error':'Equal'})}
//     }
//     return ({toBe,notToBe})
// };
// console.log(expect(5).notToBe(5))

// var createCounter = function(init) {
//     return function(){
//         return{
//             increment:function(){return init++},
//             decrement:function(){return init--},
//             reset:function(){return init}
//         }
//     }
    
// };
// const count=createCounter(5)
// console.log(count().increment())
// console.log(count().increment())
// console.log(count().decrement())
// console.log(count().reset())
// console.log(createCounter(3))

// let arr=[1,2,3,4,5]
// function fn(n){
// return n+11;
//  }
// var map = function(arr, fn) {
//     let newArr=[]
//     for(let i=0;i<arr.length;i++){
//       newArr.push(fn(arr[i]))
//     }
//     return newArr


    
// };
// console.log(map(arr,fn))
// console.log(arr)
// function sumArr(arr){
//     // for(let i=0; i< arr.length ;i++){
//     //     arr[i]+=1;
//     // }
//     // arr.forEach((ele)=>ele+=1)
//     arr[3]=22222
//     return arr;
// }
// console.log(sumArr(arr))
// console.log(arr)
// const newarr=
// console.log(arr.length)

// 

// function f1(x){
//    return x*x;

// }
// function f2(x){
//    return x+1;

// }
// const arr=[f1,f2]
// let compose=function(arr){
//    return function(a){
//       // loop 
//       for(let i=arr.length-1;i>=0;i--){
//        a=arr[i](a)
//       }
//       return a
//    }

// }
// // const fun=compose(arr)
// // console.log(fun(4))
// function fun(...args){
//    console.log( typeof args)
//    console.log(args.length)
// }
// fun(10)
// let obj={}
// obj.name="rohit"
// obj.name2="rohit2"
// console.log(obj)
// console.log( obj.hasOwnProperty("name1"))
// function sum(a,b,c){
//    // console.log(args)
//    // const sum=args.reduce((prev,item)=>prev+item,0)
//    return a+b+c
// }
// function sub(...args){
//     console.log(args)
//     const str=args.toString()
//     console.log(str)
//     console.log(typeof str)
//    // const sum=args.reduce((prev,item)=>prev+item,0)
   
// }
// console.log(sub(10,20,30))
// const memofunction=(fn)=>{
//    let count=0;
//    let cache={}

//    return function(...args){
//       let parameter=args.toString()
//       if(parameter in cache){
//          return cache[parameter]
//       }
//       cache[parameter]=fn(...args)
//       count++;
//       return cache[parameter]

//    }

// }
// const memo=memofunction()
let pro=new Promise((resolve,reject)=>{
   // reject("promise has been rejected")
   resolve('promise has resolved')
   
})
// console.log(pro)
const data1=pro.then((data)=>{
   // console.log(data)
   return data
}).catch((err)=>{
   console.log(err)
})
console.log(data1)
// async function name() {
//    const data= await pro
//    console.log(data)
// }
// name()