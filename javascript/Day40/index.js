for(var i=0;i<3;i++){
    setTimeout(()=>{
       console.log(i)
    },1000)
    console.log('hello '+i)
   
  }
  for(let i=0;i<3;i++){
    setTimeout(()=>{
       console.log(i)
    },1000)
    console.log('hello '+i)
   
  }



(function(x,y){
    console.log(x*y)
  })(2,3)


  ((name)=>{
    console.log('Hello '+name)
  })('Utkarsh')



  const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"), 0);
const baz = () => console.log("Third");



bar()
foo();

baz();

function Person(){
    this.name = 'Utkarsh'
  }
  
  const obj = new Person();
  
  console.log(obj)

  
  const x ="Utkarsh"
const y = 'Gupta'


console.log(`Hello ${x} ${y}`)



const person = {
    name: 'Sara',
    age: 25,
    gender: 'female',
    address:{
        city:'Agra'
    }
}

const name = "Utkarsh";

const {name:Name} = person;
console.log(Name)



const {name:nme,address,address:{city}} = person;
console.log(nme,city,address)

const {city:City="Agra"} = person;
console.log(City)


const arr = [1,2,[4,5]]


const [p,q,[z,e]] = arr;

console.log(z,e)

const user = {
    n:"Utkarsh",
    c:'Agra',
    age:24
  }
  
  const {n,c,...rest} = user;
  console.log(rest)
    
function abc({name},...rest){
        console.log(name,rest)
        
      }


      const User = {
        name:'Ahemad'
      }
      
      abc(User,2,3,4,5,6)
  

      const array = ["Utkarsh","Ahemad","Athira","Rahul"]


const cpArray = [...array]

console.log(cpArray)

const aman = {
    name:"Aman",
    age:24,
    city:"Kanpur"
  }
  
  
  const cpAman = {...aman}
  
  console.log(cpAman)

  const ahemad = {
    job:"SDE",
    position:"Manager"
  }
  const cpUser = {...aman,...ahemad}
  
  console.log(cpUser)