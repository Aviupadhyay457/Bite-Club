document.getElementById("nav-gallery").style.color="#ff3e6c"

const loadMoreBtn=document.getElementById("gallery-load-more-btn")


import { galleryData } from "./data.js"

const galleryGrid=document.getElementById("gallery-grid")
let i=0


function renderImg(photoUrl){
    galleryGrid.innerHTML+=`
    <img src="${photoUrl}" class="gallery-img">
    `
}


function LoadImgs(){
    let x=i+8
    for(i;(i<galleryData.length && i<x);i++){
        renderImg(galleryData[i].img)
    }
}

loadMoreBtn.addEventListener("click",function(){
    LoadImgs()
    if(i>=galleryData.length){
        loadMoreBtn.style.display="none"
    }
})

LoadImgs()
