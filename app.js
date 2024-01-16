let ul = document.querySelector("ul");
let inp = document.querySelector("input");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let Item = document.createElement("li");
  Item.innerText = inp.value;

  let delt = document.createElement("button");
  delt.innerText = "Delete";
  delt.classList.add("delete");

  Item.appendChild(delt);
  ul.appendChild(Item);
  inp.value = "";
});

ul.addEventListener("click", function(e) {
    if(e.target.nodeName == "BUTTON"){
     let listItem =  e.target.parentElement;
     listItem.remove();
       console.log("Deleted");
    }
})

// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click", function(){
//         let paren = this.parentElement;
//         console.log(paren);
//         paren.remove();
//     })
// }



