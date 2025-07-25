import { homeMenuData } from "./data.js" 

let quesOne=document.getElementById("ques-one")
let questwo=document.getElementById("ques-two")
let questhree=document.getElementById("ques-three")
let quesfour=document.getElementById("ques-four")
let onlyAnswerOne=document.getElementById("only-answer-one")
let onlyAnswerTwo=document.getElementById("only-answer-two")
let onlyAnswerThree=document.getElementById("only-answer-three")
let onlyAnswerFour=document.getElementById("only-answer-four")
let divisionOne=document.getElementById("division-one")
let divisionTwo=document.getElementById("division-two")
let divisionThree=document.getElementById("division-three")
let divisionFour=document.getElementById("division-four")
console.log(document.getElementById("homepage-dish-one-img"))



const HomePageMainFight = document.getElementById("homepage-main-fight")
const HomePageSideHustles = document.getElementById("homepage-side-hustles")
const HomePageThirstClub = document.getElementById("homepage-thirst-club")
const HomePageSweetKnockouts = document.getElementById("homepage-sweet-knockouts")
const HomePageDishCategorySelect=document.getElementsByClassName("homepage-dish-category-select")

// const HomePageMainFightDot=HomePageMainFight.children[1]
// console.log(HomePageMainFightDot)
// HomePageMainFightDot.style.color="yellow"

function homepageFoodHtml(arr){
    return `
                    <div class="homepage-dish-one">
                        <div class="homepage-dish-one-img" id="homepage-dish-one-img"></div>
                        <h2>${arr[1]}</h2>
                        <p>${arr[2]}</p>
                        <p class="food-tagline">${arr[3]}</p>
                        <p ><a class="underline-on-hover">Order Now -></a></p>
                    </div>
                    <div class="homepage-dish-two">
                        <div class="homepage-dish-two-img" id="homepage-dish-two-img"></div>
                        <h2>${arr[5]}</h2>
                        <p>${arr[6]}</p>
                        <p class="food-tagline">${arr[7]}</p>
                        <p><a class="underline-on-hover">Order Now -></a></p>
                    </div>
                    <div class="homepage-dish-three">
                        <div class="homepage-dish-three-img" id="homepage-dish-three-img" ></div>
                        <h2>${arr[9]}</h2>
                        <p>${arr[10]}</p>
                        <p class="food-tagline">${arr[11]}</p>
                        <p ><a class="underline-on-hover">Order Now -></a></p>
                    </div>
    `
}
function iterateHomeMenuData(x){
    let dataArray=[]
    for(let i=0;i<homeMenuData.length;i++){
        if(homeMenuData[i].foodCategoryID===x){
           dataArray.push(homeMenuData[i].FoodImg,homeMenuData[i].FoodHead,homeMenuData[i].FoodInfo,homeMenuData[i].FoodTagline)
        }
    }
    return dataArray
}

function renderImages(x){
    let a =`url('${x[0]}')`
    let b =`url("${x[1]}")`
    let c =`url("${x[2]}")`
    console.log(a,b,c)
    document.getElementById("homepage-dish-one-img").style.backgroundImage=a
    document.getElementById("homepage-dish-two-img").style.backgroundImage=b
    document.getElementById("homepage-dish-three-img").style.backgroundImage=c
}

function renderDot(homeFoodCat){
    homeFoodCat.style.opacity="1"
    homeFoodCat.children[1].style.visibility="visible"
}

function removeDots(){
    for(let i=0;i<HomePageDishCategorySelect.length;i++){
        HomePageDishCategorySelect[i].style.opacity="0.6"
        HomePageDishCategorySelect[i].children[1].style.visibility="hidden"
    }
}


HomePageMainFight.addEventListener("click",function(){
    let dataArray=iterateHomeMenuData(1)
    document.getElementById("homepage-food-items").innerHTML=homepageFoodHtml(dataArray)
    renderImages([dataArray[0],dataArray[4],dataArray[8]])
    removeDots()
    renderDot(HomePageMainFight)
})

HomePageSideHustles.addEventListener("click",function(){
    let dataArray=iterateHomeMenuData(2)
    document.getElementById("homepage-food-items").innerHTML=homepageFoodHtml(dataArray)
    renderImages([dataArray[0],dataArray[4],dataArray[8]])
    removeDots()
    renderDot(HomePageSideHustles)
    
})

HomePageThirstClub.addEventListener("click",function(){
    let dataArray=iterateHomeMenuData(3)
    document.getElementById("homepage-food-items").innerHTML=homepageFoodHtml(dataArray)
    renderImages([dataArray[0],dataArray[4],dataArray[8]])
    removeDots()
    renderDot(HomePageThirstClub)
})

HomePageSweetKnockouts.addEventListener("click",function(){
    let dataArray=iterateHomeMenuData(4)
    document.getElementById("homepage-food-items").innerHTML=homepageFoodHtml(dataArray)
    console.log(document.getElementById("homepage-dish-one-img"))
    renderImages([dataArray[0],dataArray[4],dataArray[8]])
    removeDots()
    renderDot(HomePageSweetKnockouts)
})

quesOne.addEventListener("click",function(){
    onlyAnswerTwo.classList.remove("display-none")
    divisionTwo.classList.remove("display-none")
    onlyAnswerThree.classList.remove("display-none")
    divisionThree.classList.remove("display-none")
    onlyAnswerFour.classList.remove("display-none")
    divisionFour.classList.remove("display-none")
    onlyAnswerOne.classList.toggle("display-none")
    divisionOne.classList.toggle("display-none")
})

questwo.addEventListener("click",function(){
    onlyAnswerOne.classList.remove("display-none")
    divisionOne.classList.remove("display-none")
    onlyAnswerThree.classList.remove("display-none")
    divisionThree.classList.remove("display-none")
    onlyAnswerFour.classList.remove("display-none")
    divisionFour.classList.remove("display-none")
    onlyAnswerTwo.classList.toggle("display-none")
    divisionTwo.classList.toggle("display-none")
})

questhree.addEventListener("click",function(){
    onlyAnswerOne.classList.remove("display-none")
    divisionOne.classList.remove("display-none")
    onlyAnswerTwo.classList.remove("display-none")
    divisionTwo.classList.remove("display-none")
    onlyAnswerFour.classList.remove("display-none")
    divisionFour.classList.remove("display-none")
    onlyAnswerThree.classList.toggle("display-none")
    divisionThree.classList.toggle("display-none")

})

quesfour.addEventListener("click",function(){
    onlyAnswerOne.classList.remove("display-none")
    divisionOne.classList.remove("display-none")
    onlyAnswerTwo.classList.remove("display-none")
    divisionTwo.classList.remove("display-none")
    onlyAnswerThree.classList.remove("display-none")
    divisionThree.classList.remove("display-none")
    onlyAnswerFour.classList.toggle("display-none")
    divisionFour.classList.toggle("display-none")
})

let dropdownEleHover =document.getElementsByClassName("dropdown-ele-hover")
console.log(dropdownEleHover)
for(let i=0; i<dropdownEleHover.length;i++){
    dropdownEleHover[i].classList.add("underline-on-hover")
}
