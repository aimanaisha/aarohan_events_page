
const register = document.querySelectorAll(".know");


for (var i = 0; i <register.length; i++) {
    console.log(register[i]);
    const str1= register[i];
    str1.addEventListener("click",() => {
        const div=document.querySelector(".modal");
        div.classList.add("modaldisplay");
    });
}

const closes = document.querySelectorAll(".cross");


for (var i = 0; i <closes.length; i++) {
    console.log(closes[i]);
    const str2= closes[i];
    str2.addEventListener("click",() => {
        const div=document.querySelector(".modal");
        div.classList.remove("modaldisplay");
    });
}



