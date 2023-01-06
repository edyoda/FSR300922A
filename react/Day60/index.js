let obj ={
    name:'Utkarsh',
    age:23,
    city:'Agra',
    college:'LPU',
    country:'Aus'
  }
  
  let name = "Ajay"
  
  const {name:OName="Shyam",age:nAge,country='In',...rest} = obj;
  
  
  console.log(OName,name,nAge,country)

const {address:{city},address} = obj

console.log(city,address)
const arr = [1,2,[7,8],4,5];

const [x,y,[z],...rest] = arr;

console.log(x,y,z)



