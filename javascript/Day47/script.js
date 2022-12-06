$(() => {
  const input = $("#todo-input");
  const btn = $("#add-btn");
  const clearAllBtn = $('#clear-all-btn');

  let todos = JSON.parse(localStorage.getItem('todos'))||[];
  changeFooter(todos)
  initList(todos)


  input.on({
    change: (event) => {
      const { value } = event.target;
      const isValid = isValidatedInput(value);
      
      if (!isValid) {
        input.addClass("invalid");
        btn[0].disabled =true
      } else {
        input.removeClass("invalid");
        btn[0].disabled =false
      }
    },
    keydown:(event)=>{
        //if pressed Enter
        if(event.keyCode===13){
            onAddTask(todos)
        }
    }
  });
  
  clearAllBtn.click((event)=>{
    event.preventDefault();
    onClearAll(todos)
})

  btn.click((event)=>{
     event.preventDefault();
     onAddTask(todos)
  })
  
});

//checks if entered value is correct or not
const isValidatedInput = (value) => {
  return /^[A-Za-z0-9/ /]*$/.test(value); //true//false
};

const createListItem =(taskObj)=>{
    const {id,task}  = taskObj;
    const li =  `<li class="list-group-item" data-id=${id}>${task}</li>`
    return $(li);
}

const onAddTask =(todos)=>{

    const list = $('#todo-list');
    
    const input = $("#todo-input");
    const text = input[0].value;
    if(!text) return
    const taskObj = {
        id:new Date().getTime().toString(),
        task:text 
    }
    todos.push(taskObj)

    changeFooter(todos)
   const li = createListItem(taskObj);
   list.prepend(li)
   input[0].value=''

   localStorage.setItem('todos',JSON.stringify(todos))
   
}

const changeFooter = (todos)=>{
    const clearAllBtn = $('#clear-all-btn');
    const todosFooter = $('#todo-footer')
    const todosNumber = $('#todos-number');

    todosNumber.html(todos.length);
    if(todos.length===0){
        clearAllBtn.hide()
        todosFooter.addClass('justify-content-center')
        todosFooter.removeClass('justify-content-between')
   }else{
       clearAllBtn.show()
       todosFooter.removeClass('justify-content-center')
       todosFooter.addClass('justify-content-between') 
   }
}

const initList=(todos)=>{
    const list = $('#todo-list');
    todos.forEach((item)=>{
    const li = createListItem(item);
    list.prepend(li)
    })
   
}

const onClearAll=(todos)=>{
    while(todos.length > 0) {
        todos.pop();
    }
    // todos = []
    const list = $('#todo-list');
    list.html('')
    changeFooter(todos)
    
}