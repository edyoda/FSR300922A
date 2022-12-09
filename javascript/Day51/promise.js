let myPromise = new Promise((resolve,reject)=>{
  
    setTimeout(()=>{
        let data = "Fail";
      resolve(data);
      console.log('After Resolved')
    },1000)
  })
  
  myPromise.then((res)=>{
    console.log('Then',res);
  }).catch((err)=>{
    console.log('Catch',err)
  }).finally(()=>{
    console.log('Finally')
  })
  
  