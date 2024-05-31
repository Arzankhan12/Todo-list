const inputBox = document.querySelector("#input-box")
const liContainer = document.querySelector("#list-container")

function addTask(){
    if(inputBox.value === ""){
        alert("you must write something")

    }else{
        let listing = document.createElement("li");
        listing.innerHTML = inputBox.value;
        liContainer.appendChild(listing);
        let spanCross = document.createElement("span");
        spanCross.innerHTML = "\u00d7" 
        listing.appendChild(spanCross)
    }
    inputBox.value = "";
    saveData();
}


liContainer.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
        console.log(e.target.tagName)
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
        console.log(e.target.tagName)
    }
},false)


function saveData(){
    localStorage.setItem("data" , liContainer.innerHTML);
}

function ShowData(){
    liContainer.innerHTML = localStorage.getItem("data");
}
ShowData()