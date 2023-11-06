const menubar = document.querySelector(".menubar")
const menu = document.querySelector(".menu")
menu.addEventListener("click",()=>{
    menubar.classList.toggle("active")
})
const rem = document.querySelector(".del")
rem.addEventListener("click",()=>{
    menubar.classList.toggle("active")
})

const sec2_an1 = document.querySelector(".bub1")
const sec2_an2 = document.querySelector(".bub2")
const sec2_an3 = document.querySelector(".sec_2_content")
const sec3_an1 = document.querySelector(".sec_3_content_1")
const sec3_an2 = document.querySelector(".sec_3_content_2")
const sec4_an1 = document.querySelector(".colblock")
const sec4_an2 = document.querySelector(".imgblock")
const sec4_an3 = document.querySelector(".section_4_content")
const sec5_an1 = document.querySelector(".sec_5_content_1")
const sec5_an2 = document.querySelector(".sec_5_content_2")
const sec6_an1 = document.querySelector(".girlimg")
const sec6_an2 = document.querySelector(".sec_6_cont2")
const sec7_an1 = document.querySelector(".sec7_content")
const sec7_an2 = document.querySelector(".buttons")
const sec8_an1 = document.querySelector(".first_an")
const sec8_an2 = document.querySelector(".second_an")
const sec8_an3 = document.querySelector(".sec_8_container")
const [...elems] = document.querySelectorAll(".numbers")
const sec9_an1 = document.querySelector(".sec9_content_1")
const sec9_an2 = document.querySelector(".sec9_content_2")

const h = window.innerHeight + 20;


window.addEventListener("scroll",(ev)=>{
    if(sec2_an1.getBoundingClientRect().y < h){
        sec2_an1.classList.add("sec2_an1")
    }
    if(sec2_an1.getBoundingClientRect().y >= h){
        sec2_an1.classList.remove("sec2_an1")
    }
})
window.addEventListener("scroll",(ev)=>{
    if(sec2_an2.y < h){
        sec2_an2.classList.add("sec2_an2")
    }
    if(sec2_an2.y >= h){
        sec2_an2.classList.remove("sec2_an2")
    }
})
window.addEventListener("scroll",(ev)=>{
    if(sec2_an3.getBoundingClientRect().y < h){
        sec2_an3.classList.add("sec2_an3")
    }
    if(sec2_an3.getBoundingClientRect().y >= h){
        sec2_an3.classList.remove("sec2_an3")
    }
})

window.addEventListener("scroll",(ev)=>{
    if(sec3_an1.getBoundingClientRect().y < h){
        sec3_an1.classList.add("sec3_an1")
    }
    if(sec3_an1.getBoundingClientRect().y >= h){
        sec3_an1.classList.remove("sec3_an1")
    }
})
window.addEventListener("scroll",(ev)=>{
    if(sec3_an2.getBoundingClientRect().y < h){
        sec3_an2.classList.add("sec3_an2")
    }
    if(sec3_an2.getBoundingClientRect().y >= h){
        sec3_an2.classList.remove("sec3_an2")
    }
})
window.addEventListener("scroll",(ev)=>{
    if(sec4_an1.getBoundingClientRect().y < h){
        sec4_an1.classList.add("sec4_an1")
    }
    if(sec4_an1.getBoundingClientRect().y >= h){
        sec4_an1.classList.remove("sec4_an1")
    }
})
window.addEventListener("scroll",(ev)=>{
    if(sec4_an2.getBoundingClientRect().y < h){
        sec4_an2.classList.add("sec4_an2")
    }
    if(sec4_an2.getBoundingClientRect().y >= h){
        sec4_an2.classList.remove("sec4_an2")
    }
})
window.addEventListener("scroll",(ev)=>{
    if(sec4_an3.getBoundingClientRect().y < h){
        sec4_an3.classList.add("sec4_an3")
    }
    if(sec4_an3.getBoundingClientRect().y >= h){
        sec4_an3.classList.remove("sec4_an3")
    }
})
window.addEventListener("scroll",(ev)=>{
    if(sec5_an1.getBoundingClientRect().y < h){
        sec5_an1.classList.add("sec5_an1")
    }
    if(sec5_an1.getBoundingClientRect().y >= h){
        sec5_an1.classList.remove("sec5_an1")
    }
})
window.addEventListener("scroll",(ev)=>{
    if(sec5_an2.getBoundingClientRect().y < h){
        sec5_an2.classList.add("sec5_an2")
    }
    if(sec5_an2.getBoundingClientRect().y >= h){
        sec5_an2.classList.remove("sec5_an2")
    }
})
window.addEventListener("scroll",(ev)=>{
    if(sec6_an1.getBoundingClientRect().y < h){
        sec6_an1.classList.add("sec6_an1")
    }
    if(sec6_an1.getBoundingClientRect().y >= h){
        sec6_an1.classList.remove("sec6_an1")
    }
})
window.addEventListener("scroll",(ev)=>{
    if(sec6_an2.getBoundingClientRect().y < h){
        sec6_an2.classList.add("sec6_an2")
    }
    if(sec6_an2.getBoundingClientRect().y >= h){
        sec6_an2.classList.remove("sec6_an2")
    }
})
window.addEventListener("scroll",(ev)=>{
    if(sec7_an1.getBoundingClientRect().y < h){
        sec7_an1.classList.add("sec7_an1")
    }
    if(sec7_an1.getBoundingClientRect().y >= h){
        sec7_an1.classList.remove("sec7_an1")
    }
})
window.addEventListener("scroll",(ev)=>{
    if(sec7_an2.getBoundingClientRect().y < h){
        sec7_an2.classList.add("sec7_an2")
    }
    if(sec7_an2.getBoundingClientRect().y >= h){
        sec7_an2.classList.remove("sec7_an2")
    }
})

window.addEventListener("scroll",(ev)=>{
    if(sec8_an1.getBoundingClientRect().y < h){
        sec8_an1.classList.add("sec8_an1")
    }
    if(sec8_an1.getBoundingClientRect().y >= h){
        sec8_an1.classList.remove("sec8_an1")
    }
})
window.addEventListener("scroll",(ev)=>{
    if(sec8_an2.getBoundingClientRect().y < h){
        sec8_an2.classList.add("sec8_an2")
    }
    if(sec8_an2.getBoundingClientRect().y >= h){
        sec8_an2.classList.remove("sec8_an2")
    }
})
window.addEventListener("scroll",(ev)=>{
    if(sec8_an3.getBoundingClientRect().y < h){
        sec8_an3.classList.add("sec8_an3")
    }
    if(sec8_an3.getBoundingClientRect().y >= h){
        sec8_an3.classList.remove("sec8_an3")
    }
})

let key = 0;
function numTime(elem, timeinterval, step, finalcount,str2 = ""){
    let key = 0;
    let T = finalcount / step;
    let time = setInterval(()=>{
        key = key + step
        if(key >= finalcount){
            key = finalcount
            clearInterval(time)
        }
        elem.innerHTML = key+str2;
    },timeinterval / T)
}

window.addEventListener("scroll",(ev)=>{
    if(sec9_an1.getBoundingClientRect().y < h){
        sec9_an1.classList.add("sec9_an1")
    }
    if(sec9_an1.getBoundingClientRect().y >= h){
        sec9_an1.classList.remove("sec9_an1")
    }
    if(elems[0].getBoundingClientRect().y < h){
        if(!key){
            key = 1;
            numTime(elems[0], 1000, 2, 17)
            numTime(elems[1], 1000, 1, 12,"+");
            numTime(elems[2], 1000, 11, 108)
            numTime(elems[3], 1000, 14, 150)
        }
    }
    if(elems[0].getBoundingClientRect().y >=h){
        key = 0
        elems.map(item => item.innerHTML = 0)
    }
    if(sec9_an2.getBoundingClientRect().y < h){
        sec9_an2.classList.add("sec9_an2")
    }
    if(sec9_an2.getBoundingClientRect().y >= h){
        sec9_an2.classList.remove("sec9_an2")
    }
})
