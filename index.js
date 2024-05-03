document.addEventListener('scroll',()=>{
    const header = document.querySelector('header');
    if(window.scrollY > 0){
        header.classList.add("scrolled")
    }else{
        header.classList.remove("scrolled")
    }
})
const items = document.querySelectorAll(".slider .list .item")
const next = document.getElementById("next");
const prev = document.getElementById("previous");
const thumbnails = document.querySelectorAll(".thumbnail .item");
const circles = document.querySelectorAll(".circles span");
const mountain1 =document.querySelector(".mountain1")
const mountain2 =document.querySelector(".mountain2");
let countItem = items.length;
let itemActive = 0;
let refreshInterval =setInterval(()=>next.click(), 4000);
next.addEventListener("click",()=>{
    itemActive +=1
    if(itemActive>=countItem){
        itemActive = 0;
    }
    showSlider()
    items[itemActive].classList.add("active")
    thumbnails[itemActive].classList.add("active")
    circles[itemActive].classList.add("active")
})
prev.addEventListener("click",()=>{
    itemActive -=1
    if(itemActive<0){
        itemActive = items.length-1;
    }
    showSlider()
    items[itemActive].classList.add("active")
    thumbnails[itemActive].classList.add("active")
    circles[itemActive].classList.add("active")
})

const showSlider = ()=>{
    const oldActiveItem = document.querySelector(".slider .list .item.active");
    const oldActiveThumbnail = document.querySelector(".thumbnail .item.active");
    const oldActivecircle = document.querySelector(".circles span.active");
    oldActiveItem.classList.remove("active");
    oldActiveThumbnail.classList.remove("active");
    oldActivecircle.classList.remove("active");
}
thumbnails.forEach((thumbnail,index)=>{
    thumbnail.addEventListener("click",()=>{
        showSlider()
        items[index].classList.add("active")
        thumbnails[index].classList.add("active")
        circles[index].classList.add("active")
        itemActive = index
    })
})
circles.forEach((circle,index)=>{
    circle.addEventListener("click",()=>{
        showSlider()
        items[index].classList.add("active")
        thumbnails[index].classList.add("active")
        circles[index].classList.add("active")
        itemActive = index
    })
})
console.log(mountain2)
mountain2.addEventListener("click",()=>{
    mountain1.classList.remove("active");
    mountain2.classList.add("active") 
})
mountain1.addEventListener("click",()=>{
    mountain2.classList.remove("active");
    mountain1.classList.add("active") 
})

clearInterval(refreshInterval);
refreshInterval =setInterval(()=>next.click(), 5000);