function swap(ele1, ele2){
    let temp = ele1.style.height;
    ele1.style.height = ele2.style.height;
    ele2.style.height = temp;

}

function ButtonsOn(){
    document.querySelector("#newArray").disabled = false;
    document.querySelector("#size_input").disabled = false;
    document.querySelector("#bubbleSort").disabled = false;
    document.querySelector("#mergeSort").disabled = false;
    document.querySelector("#quickSort").disabled = false;       
    
}

function ButtonsOff(){
    console.log("inside Buttons off");
    document.querySelector("#newArray").disabled = true;
    document.querySelector("#size_input").disabled = true;
    document.querySelector("#bubbleSort").disabled = true;
    document.querySelector("#mergeSort").disabled = true;
    document.querySelector("#quickSort").disabled = true;
         
}


let array = [];


createNewArray();


function createNewArray(noOfBars = 60){

    deleteBars();

    array = [];

    for(let i = 0; i < noOfBars; i++){
        array[i] = Math.floor(Math.random()*(500-20)+20);

    }


    const bars = document.querySelector("#bars");
    for(let i = 0; i < noOfBars; i++){
        const bar = document.createElement("div");
        bar.style.height = array[i].toString()+"px";
        bar.classList.add("barItem");
        bars.appendChild(bar);
    }
}

function deleteBars(){
    const bars = document.querySelector("#bars");
    bars.innerHTML = "";
}


let arraySize = document.querySelector("#size_input");
arraySize.addEventListener("input" , function(){
    //console.log(arraySize.value);
    createNewArray(arraySize.value);
});


const generatingNewArray = document.querySelector("#newArray");
generatingNewArray.addEventListener("click" , function(){
    //console.log("inside generatingNewArray");
    createNewArray(arraySize.value);
});

let delay = 170;

let delayTime = document.querySelector("#speed_input");
delayTime.addEventListener("input" , function(){
    delay = 340-delayTime.value;
    //console.log("delay: " , delay);
});

// Used in async function
function wait(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}