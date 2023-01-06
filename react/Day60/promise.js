function makeApiCall(){
    //api call is inside thi scope
    return  new Promise((resolve,reject)=>{
         $.get('https//apicall',(data)=>{
            if(data){
                resolve(data);
               return;
             }
             throw Error('Not got data')
         }).fail((err)=>{
               if(err.status==400){
                 reject('Wrong Credential')
               }
             else{
               reject(err)
             }
           })
    })
   }

   
   
   



   //in outer scope outcome of api call
   const promise = makeApiCall();

   promise.then((resolvedValue)=>{
     console.log(resolvedValue)
   }).catch((rejectedValue)=>{
     console.log(rejectedValue)
   })
   