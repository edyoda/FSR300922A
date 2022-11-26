try{
    consol.log('Hello');
    console.log('Second')
  }catch(error){
    console.log('Oh there is an error',error.message)
  }
  try{
    consol.log('Hello');
    console.log('Second')
  }catch(error){
    console.log('Oh there is an error',error.message)
  }finally{
    console.log('Final Block');
  }

try {
    console.log('First')
    let a=10;
    if(a<=10){
      throw {
        message:'I am an error'
      };
    }
    console.log("Hello");
  } catch (err) {
    console.log(err);
  }

  let x = 24;

try {
  if (x === "") throw "empty";
  if (isNaN(x)) throw "not a number";
  x = Number(x);
  if (x < 5) throw "too low";
  if (x > 10) throw "too high";
} catch (err) {
  console.log("Input is " + err);
}



try {
    consol.log('Kdd')
  } catch (e) {
    console.log(e.name,e.message,e.stack);
  }

  let z = 5;
try {
  z = y + 1;
} catch (err) {
  switch (err.name) {
    case "ReferenceError":
      console.log("Ref error " + err.message);
      break;
    case "RangeError":
      console.log("Range error " + err.message);
      break;
    case "TypeError":
      console.log("Type error " + err.message);
      break;
  }
}


try {
    throw new Error("Oops", "An Error ocured, come back later!");
  } catch (e) {
    console.log(e.name, e.message);
  }
  function doIt() {
    try {
      return 1;
    } finally {
      return 2;
    }
  }
  
  console.log(doIt());

  try {
    try {
      throw new Error("oops");
    } finally {
      console.log("finally");
    }
  } catch (ex) {
    console.error(ex.message);
  }