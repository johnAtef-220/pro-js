var productBtn = document.querySelector("#product_btn")
var productContainer = document.getElementById("product_container")


var data = [
    {id: 1,name:"product 1",desc:"bla bla bla"},
    {id: 2,name:"product 2",desc:"bla bla bla"},
    {id: 3,name:"product 3",desc:"bla bla bla"},
    {id: 4,name:"product 4",desc:"bla bla bla"},
];

// draw ui
function drawui(items){

    productContainer.innerHTML = ""; //عشان الداتا الجديدة لما تظهر متبقاش عالقديمة
    items.forEach(function(ele){
        productContainer.innerHTML += `<div onclick = 'deleteItem(${ele.id})'>${ele.name}<div/>`
        

   
    })
    
}

// load draw ui
window.onload= function(){
    drawui(data);
};





// add item 
productBtn.addEventListener("click", addeditem);

function addeditem(){    
// simple validation
var productInput = document.getElementById("product_input");
var lastId = data.length? data[data.length-1].id : 0;


// If المختصرة
if (productInput.value == "")alert("you should enter Product")
    // add to array
    data.push({id:++lastId,name:productInput.value, desc:"bla bla"}) 

    console.log(data);
    
    var addeditem = data[data.length-1];
    productContainer.innerHTML +=      `
    <div onclick = 'deleteItem(${addeditem.id})'>
    ${addeditem.name}
    <div/>
    `

    productInput.value = "";
}






// delete item
function deleteItem(id){
// رجعلي اي دي الاراي
    var index = data.map(function(i){
        return i.id
    }).indexOf(id);   // دور علي الاي دي اللي هتبعته جوة الاراي كله
    
    // لو موجود
    if(index !== -1){
        data.splice(index , 1);
        drawui(data)  //ابعت الداتا الجديدة 
    }
}