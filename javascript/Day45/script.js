
// $(()=>{

// })

const users = [
    {
        id:1,
        name:"Utkarsh"
    },
    {
        id:2,
        name:"Ahemad"
    },
    {
        id:3,
        name:"Ramesh"
    },
    {
        id:4,
        name:"Sakshi"
    },
    {
        id:5,
        name:"Sunidhi"
    },
    {
        id:6,
        name:"Arjun"
    },
    {
        id:7,
        name:"Athira"
    },
]

$(document).ready(()=>{

    const p = $('<p>Hello I a new p tag</p>') // coverts a html string into dom element
    const span = $('<p>Hello I a new span tag</p>')
    const container = $('#container');

    //  container.append(p,span)

    users.forEach((item)=>{
        const card = $(`<div class="card">
                            <span> ${item.name}</span><span>${item.id}</span>
                        </div>`)
        // container.prepend(card)
        
        container.append(card)

        // card.appendTo(container)
    })

    const rameshEl = $('#container .card').eq(2);
    rameshEl.remove()
    
    //element.style.backgroundColor = 'red';
    //element.style.color = 'blue';

    $('#container .card').even().css('color','salmon')
    $('#container .card').odd().css('font-size',18)
    $('#container .card').first().css({backgroundColor:'blue',fontWeight:'bold'})

    const fntSize = $('#container .card').last().css('font-size');
    console.log(fntSize)

    //element.classList

    addRowsIntoTable()

    const rows = $('.students-table tr')
    rows.addClass('row')
    //row.removeClass('students-table')

    toggleContainer()
    handleTextArea()
})



function toggleContainer(){
    
    const btn = $('#toggle-btn')
    const showBtn = $('#show-btn')
    const hideBtn = $('#hide-btn')
    
    /* btn.addEventListener('click',(event)=>{

     }) */

     const box = $('.box');

     btn.click((event)=>{
         box.toggleClass('hide')
     })
    //  btn.hover((event)=>{
    //     box.toggleClass('hide')
    // })

     showBtn.click((event)=>{
        //  console.log(event)
        box.show()
     })

     hideBtn.click((event)=>{
       box.hide()
     })

  


}



function addRowsIntoTable(){

    const table = $("table");
    users.forEach((item)=>{
        const newRow = `
        <tr>
          <td>${item.id}</td>
          <td>${item.name}</td>
        </tr>
    `; //html format string

    const tr = $(newRow); // convert string into DOM element

    table.append(tr);
    })


}

function handleTextArea(){
    const textArea = $('textarea');

    textArea.on({
        input:function(event){
            console.log('I am typing')
            console.log(event.target.value)
        },
        blur:function(event){
            console.log('I am out')
        },
        focus:function(event){
            console.log('I am about type')
        }
    })
}