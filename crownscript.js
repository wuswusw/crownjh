let liEls = document.querySelectorAll("header > ul > li");
let divEls = document.querySelectorAll("#cate1items > div");


for(let i=0; i<liEls.length; i++){
    liEls[i].addEventListener("mouseover",()=>{
        //divEls[i].style.display = "block";
        divEls[i].style.height='50px';
    });

    liEls[i].addEventListener("mouseout",()=>{
        //divEls[i].style.display = "none";
        divEls[i].style.height='0px';
    });
}

