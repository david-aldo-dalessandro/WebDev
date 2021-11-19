window.onload = function(){

    let images = document.querySelectorAll("img[class=car]");
    let letters = document.querySelectorAll("div");
    

    for (let image of images){
        image.addEventListener("mouseover", zoom_in);
        image.addEventListener("mouseout", zoom_out);
    }

    for (let letter of letters){
        letter.addEventListener("click", click_on);
    }

}

function zoom_in(event){

    let target = event.currentTarget;

    event.stopPropagation();

    target.classList.add("expanded");     
    target.classList.remove("shrink");
}

function zoom_out(event){
    let target = event.currentTarget;

    event.stopPropagation();

    target.classList.add("shrink");
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