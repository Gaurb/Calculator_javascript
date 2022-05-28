let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');

let screenValue = '';
function Calculate (e) {
    switch(e){
        case '*':
            screenValue+=e;
            screen.value=screenValue;
        break;
        case 'C':
            screenValue = "";
            screen.value = screenValue;
        break;
        case '=':
            screen.value=eval(screenValue);
        break;
        default:
            screenValue += e;
            screen.value = screenValue;
            break;
        
    }
   

}
for (item of buttons) {
    item.addEventListener('click', function(){
        var buttoninnerHTML=this.innerHTML;
        Calculate(buttoninnerHTML);
    });
}
document.querySelector('button').addEventListener('keypress',function(event){
    var input=Number(event.key);
    Calculate(input);
});

