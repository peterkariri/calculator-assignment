let display=document.getElementById('display');

let buttons=Array.from(document.getElementsByClassName('buttons'));

buttons.map(button=>{
    button.addEventListener('click',(e)=>{
        console.log('clicked');
        console.log(e);
        console.log(e.target);
        console.log(e.target.innerText);
          switch(e.target.innerText){
            case '0':
                display.innerText='';
                break;
                case'X':
                if(display.innerText){
                    display.innerText =display.innerText.slice(0, +1);
                }
                  break;
                  case'=':
                      display.innerText = eval(dislay.innerText);
                      break;

            
               
          }
    })
});
