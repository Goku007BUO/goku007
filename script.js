let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addeventlistener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.queryselector('input').value = string; 
    }
    else if(e.target.innerHTML == 'clear'){
      string = eval(string);
      document.queryselector('input').value = string; 
    }
    else{
      console.log(e.target)
      string = string + e.target.innerHTML;
      document.queryseletor('input').value = string;
    }