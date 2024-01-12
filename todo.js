const item = document.querySelector("#item")
const mylist= document.querySelector("#mylist")

item.addEventListener(
    "keyup",
    function(event){
        if (event.key== "Enter"){
            addToDo(this.value);
            this.value = ""
        }

    }
)
const addToDo =(item) => { 
   const listItem =document.createElement("li");
   listItem.innerHTML=`
    ${item}
   <i class="fa-solid fa-xmark"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path opacity="1" fill="#1E3050" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></i>
   `;

listItem.addEventListener(
    "click",
    function(){
        this.classList.toggle("done");
    }
  ) 
listItem.querySelector("i").addEventListener  (  

    "click",
    function(){
        listItem.remove()
    }

)
mylist.appendChild(listItem)
}
