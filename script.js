const body = document.body;
const header = document.getElementById('header');
const tope = document.getElementById('top');

addEventListener("scroll",(event)=>{
    console.log(window.scrollY);
    if(window.scrollY>600){
        header.classList.add("hide");
        tope.classList.add("show")
    }else{
        header.classList.remove('hide');
        tope.classList.remove("show")
    }
})