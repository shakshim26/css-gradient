// call class name button

// let btn = document.getElementsById("btn1");


// console.log(btn);

// // call id name section

// let sec = document.getElementById("section");

// console.log(sec);


// // call without select element bt call class copyCode

// let copy = document.querySelector(".copyCode");

// console.log(copy);


let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let copy = document.getElementById("cssCode1");
rgb1 = "#fff";
rgb2 = "#edede";     


 const hexValue = () => {                               // Fat Arrow Function //         
    let myHexValue = "0123456789abcdef" ;
    let color = "#"; 
    for(let i = 0; i < 6; i++){
        color = color + myHexValue[Math.floor(Math.random()  * 16)];                    //math.floor= not include float , math.random= Any random variable//
    }
    return color;
}

const handleEvent = ()  => {
    rgb1 = hexValue(); 
    console.log(rgb1); 

    btn1.style.backgroundColor = `${rgb1}` 
    btn1.textContent = `${rgb1}`; 
    copy.textContent = `background-image: linear-gradient(to right, ${rgb1} , ${rgb2});`
    document.getElementById("section").style.backgroundImage=`linear-gradient(to right, ${rgb1} , ${rgb2})`;
    btn1.textContent=rgb1;
    btn1.style.backgroundColor= rgb1; 
};

const handleEvent2 = ()  => {
    rgb2 = hexValue(); 
    console.log(rgb2); 
    document.getElementById("section").style.backgroundImage=`linear-gradient(to right, ${rgb1} , ${rgb2})`;
    btn2.textContent=rgb2; 
    btn2.style.backgroundColor= rgb2;
    // btn2.style.backgroundColor = `${rgb2}` 
    btn2.textContent = `${rgb2}`; 
    copy.textContent = `background-image: linear-gradient(to right, ${rgb1} , ${rgb2});`

};



btn1.addEventListener("click", handleEvent); 
btn2.addEventListener("click", handleEvent2);



