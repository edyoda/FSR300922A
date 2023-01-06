let arr = [1,2,3,4]


arr.forEach((item,index,currArray)=>{
    console.log(item,index)
})
let newArray = arr.map((item,index,currArray)=>{
   return item+2
})
 console.log(newArray)

let filterdArray = arr.filter((item)=>{
    
    return item%2!=0
})
console.log(filterdArray)



const finalValue = arr.reduce((accumlated,curr)=>{
    console.log(accumlated,curr)
     return curr+accumlated;
})

console.log(finalValue)


const properties = [
    {
        name:"hdsj",
        isVerified:true
    },{
        name:"hdsj",
        isVerified:true
    },
    {
        name:"hdsj",
        isVerified:false
    }
    ,{
        name:"hdsj",
        isVerified:false
    },
    {
        name:"hdsj",
        isVerified:true
    }
    ]
    
const total_verified_properties = properties.reduce((acc,curr)=>{
    console.log()
   return  curr.isVerified?acc+=1:acc;
},0)

console.log(total_verified_properties)