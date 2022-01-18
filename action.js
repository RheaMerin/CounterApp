//bring th element
//button element
const add = document.querySelector('.add');
const sub = document.querySelector('.sub');
//text element
const text = document.querySelector('.value');
//add an event
add.addEventListener('click', increment);
sub.addEventListener('click', decrement);
//add a function 
i = 0; 
function increment(){
    i+=1;
    text.textContent = i;
    colours();
}
function decrement(){
    i-=1;
    text.textContent = i;
    colours();
}
function colours(){
    if (i>0){
        text.style.color = "#76FF03";
    }
    else if (i<0){
        text.style.color = "red";
    }
    else{
        text.style.color = "white";
    }
}
