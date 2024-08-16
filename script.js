let string="";
let buttons = document.querySelectorAll('.function');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=="C"){
            string="";
        }
        else if(e.target.innerHTML=="="){
            string=eval(string);
        }
        else{
            if(e.target.innerHTML=='x'){
                string=string+"*";
            }
            else{
                console.log(e.target);
                string= string+e.target.innerHTML;
            }
        }
        document.querySelector("input").value=string;
    })
})
