// < =============== btn Scroll && nav border ================= >
let navbar = document.querySelector('.navbar'),
    btnScroll = document.querySelector('#btnScroll');
btnScroll.onclick = ()=> scroll({top:0})
onscroll = ()=>{
    if (scrollY >= 250) {
        navbar.classList.remove('dashed-border');
        btnScroll.classList.add('bottom-0');
    } else {
        navbar.classList.add('dashed-border');
        btnScroll.classList.remove('bottom-0');
    }
}
// < =============== Scrollreveal ================= >
let commun = {
    distance :'90px',
    duration :1000,
    reset :true,
}
let scrX = ScrollReveal({
    ...commun,
    origin :'top'
});
scrX.reveal('.home img, .home .text_home, .product .product_text, .product .box, .steps .box, .about .about_text, .testimonial img, .about img, .testimonial .testimonial_text',{interval:150});