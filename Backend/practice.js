import { compareSync } from "bcrypt";

const arr=[10,2,'c',0,2,'b',5,2,3,'a']
let char=[];
let num=[]
console.log(typeof(2))
// for(let i=0;i<arr.length;i++){
//     if(typeof (arr[i])=== 'number'){
//         num.push(arr[i])
//     }
//      if(typeof (arr[i])== 'string'){
//         char.push(arr[i])
//     }
// }
// char=arr.filter((ele)=>typeof(ele)==='number')
// num=arr.filter((ele)=> typeof(ele)!='number')
// console.log(num,char)
const sumArr=[66,3,4,5,6]
const sumOfAllElements=sumArr.reduce((ele,prev)=>{
    console.log("ele"+ ele)
    console.log("prev"+ prev)
    return ele+prev
},10)
   
console.log(sumOfAllElements)