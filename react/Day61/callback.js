

 function abc(callback){
    setTimeout(()=>{
          let result = typeof callback=='function' && callback();
            console.log('After Callback')
    },1000)

}

abc(()=>{
    console.log('I am a asynchronous callback')
    return 2;
});
console.log('Outside callback')

