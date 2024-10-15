const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }
  
function addTask(){
    if(inputBox.value === ''){
        alert("yoh!! you must write something buanah!");
    }
    else{
        let li =document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData()
}

listContainer.addEventListener("click", function(del){
    if(del.target.tagName === "li"){
        del.target.classList.toggle("checked");
        saveData()
    }
    else if(del.target.tagName === "SPAN"){
        del.target.parentElement.remove();
        saveData()
    }
},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask()