let current_screen=document.getElementById('CurrScreen');
let current_input='';
    document.querySelector('.container').addEventListener('click',function(event){
     const Value=event.target.textContent;
     handleButtonClick(Value);
     updatescreen();
    });

    function handleButtonClick(value){
        const numericButtons = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
        const operatorButtons = ['+', '-', '*', '/'];
        const specialButtons = ['AC', 'DEL', '='];

        for(const button of numericButtons){
            if(value==button){
                current_input+=value;
                return;
            }
        }

        for(const button of operatorButtons){
            if(value==button){
                current_input+=' '+value+' ';
                return;
            }
        }

        for(const button of specialButtons){
            if(value==button){
                handleSpecialButton(value);
                return;
            }
        }
    }

    function handleSpecialButton(value){
        if(value==='AC'){
            current_input='0';
        }
        else if(value==='DEL'){
            current_input=current_input.slice(0,-1);
        }
        else if(value==='='){
            try{
                current_input=eval(current_input).toString();
            }
            catch(error){
                current_input='ERROR';
            }
        }
    };

    function updatescreen(){
         current_screen.value=current_input;
    }