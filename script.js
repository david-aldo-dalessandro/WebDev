window.onload = function(){

    let images = document.querySelectorAll("img[class=car]");

    for (let image of images){
        image.addEventListener("mouseover", over_on);
        image.addEventListener("mouseout", over_off);

    }

}

function over_on(event){

    let target = event.currentTarget;

    event.stopPropagation();
        target.classList.add("expanded");
    
    
   
    
}

function over_off(event){
    let target = event.currentTarget;

    event.stopPropagation();

    target.classList.remove("expanded");
}

function test(){
    alert("Hello\nHow are you?");
}