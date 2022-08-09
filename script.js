console.log("todolist");

//Elemente in DOM 
const form = document.querySelector("#itemForm");
const message = document.querySelector("#message");
const input = document.querySelector("#itemInput");
const itemList = document.querySelector("#itemsList");
const filter = document.querySelector(".nav-item");

//create an empty Item List
let todoItems = [];
console.log(itemList);
console.log(form);
console.log(input)
//for each https://www.w3schools.com/jsref/jsref_forEach.asp
//Für jeden Parameter wird eine Function genutzt
const getList = function (todoItems){
    itemList.innerHTML = ``;
    if(todoItems.length >0){
        todoItems.forEach((item)=> {
            let liTag = `
            <li class=" list-group-item d-flex justify-content-between align-items-center size25">
            <span> ${item.name} </span> 
             <span>

              <a> <i class="bi bi-check-circle green"></i> </a>
              <a> <i class="bi bi-pencil-square blue"></i> </a>
              <a> <i class="bi bi-x-circle red"></i> </a>

            </span>
            
          </li>`
            itemList.insertAdjacentHTML("beforeend",liTag);
            
        });
    }
    else{
        let liTag = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
               <span>No Records Found.</span>
        </li>`;
        itemsList.insertAdjacentHTML("beforeend", liTag);
    }
}


//Für Localstorage https://www.w3schools.com/jsref/prop_win_localstorage.asp


//Local Store Methode
const setLocalStorage = function(todoItems){
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
}

//Items aus dem Localstorage bekommen
const getLocalStorage = function(){
    const todoStorage = localStorage.getItem("todoItems");
    if(todoStorage=="undefined"|| todoStorage===null){
        todoItems = [];
    }
    else{
        todoItems = JSON.parse(todoStorage); //um von Stringify wieder zurück zu einem Objekt zu konvertieren
    }
    console.log("items", todoItems)
    console.log(todoItems.length)
    getList(todoItems);
}

//Submit funktioniert mit dem button ind er html form. 
document.addEventListener("DOMContentLoaded", ()=> {
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        const itemName = input.value.trim();
        if(itemName.length === 0 ){
            alert("Please Enter a Task");
        }
        else{
            const itemObj = {
                name: itemName,
                isDone: false,
                addedAt: new Date().getTime()
            };
            todoItems.push(itemObj);
            setLocalStorage(todoItems);
            
        }
        console.log(itemName);
    });
    getLocalStorage();
})