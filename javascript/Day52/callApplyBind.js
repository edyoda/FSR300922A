let person = {
    name:'Ramesh',
    getName:function(age,color){
      console.log(this.name,age,color)
    }
  }
  let person2 = {
    name:'Gaurav',
  }
  
person.getName.call(person2,23,'red')
  
  
person.getName.apply(person2,[23,'red'])
  
const getNameNew = person.getName.bind(person2,32,'Red')

getNameNew()