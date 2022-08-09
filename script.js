console.log("todolist");

//Elemente in DOM 
const form = document.querySelector("#itemForm");
const message = document.querySelector("#message");
const input = document.querySelector("#itemInput");
const itemList = document.querySelector("#itemList");
const filter = document.querySelector(".nav-item");

//create an empty Item List
let todoItems = [];


//Local Store Methode
const setLocalStorage = function(todoItems){
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
}

//Submit funktioniert mit dem button ind er html form. 
document.addEventListener("DOMContentLoaded", ()=> {
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        const itemName = input.value;
        if(itemName == ""){
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
    })
})