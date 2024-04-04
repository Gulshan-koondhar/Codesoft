let textarea = document.getElementById("inputtext");
let btns = document.querySelectorAll("button");
let string = "";
let arr = Array.from(btns);
arr.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.target.innerHTML)
    if(e.target.innerHTML == "="){
        string = eval(string);
        textarea.value = string
    }else if(e.target.innerHTML == "CE"){
        string = "";
        textarea.value = string;
    }else if(e.target.innerHTML == "DEL"){
        string = string.substring(0, string.length-1);
        textarea.value = string
    } else{
        string += e.target.innerHTML;
        textarea.value = string
    }
  });
});
