window.onload = function(){

    let images = document.querySelectorAll("img[class=car]");
    let letters = document.querySelectorAll("div");
    

    for (let image of images){
        image.addEventListener("mouseover", over_on);
        image.addEventListener("mouseout", over_off);
    }

    for (let letter of letters){
        letter.addEventListener("click", click_on);
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

function click_on(event){

    let target = event.currentTarget;
        
   
    if (!target.classList.contains("red_out") && target.classList.contains("R")){
        target.classList.add("red_out");
    }
    else if (!target.classList.contains("green_out") && target.classList.contains("G")){
        target.classList.add("green_out");
    }
    else if (!target.classList.contains("blue_out") && target.classList.contains("B")){
        target.classList.add("blue_out");
    }
    else{
        target.classList.remove("red_out");
        target.classList.remove("blue_out");
        target.classList.remove("green_out");
    }

}





function test(){
    alert("Hello\nHow are you?");
}