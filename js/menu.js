import { mainFightMenu, menuItemsColor, sideHustleMenu, thirstClubMenu, sweetKnockoutsMenu } from "./data.js" 



document.getElementById("nav-menu").style.color="#ff3e6c"

const mainFightItems=document.getElementById("main-fight-items")
const sideHustleItems=document.getElementById("side-hustles-items")
const thirstClubItems=document.getElementById("thirst-club-items")
const sweetKnockoutsItems=document.getElementById("sweet-knockouts-items")

function renderMenuItem(img, head, info,count, mainItems){
    mainItems.innerHTML+=`
                        <div class="menu-item">
                            <div class="food-item-img" id="food-item-img-${count}"></div>
                            <h4>${head}</h4>
                            <p>${info}</p>
                        </div>
    `
    let x=`food-item-img-${count}`
    console.log(x)
    let y=`url("${img}")`
    console.log(y)
    let a=Math.floor(Math.random()*6)
    let b=menuItemsColor[a]

    document.getElementById(x).style.backgroundColor=`${b}`
    document.getElementById(x).style.backgroundImage=y
}

let mainFightCounter=0
for(let foodItem of mainFightMenu){
    mainFightCounter+=1
    renderMenuItem(foodItem.FoodImg,foodItem.FoodHead,foodItem.FoodInfo,mainFightCounter,mainFightItems)
}

// mainFightCounter=0
for(let foodItem of sideHustleMenu){
    mainFightCounter+=1
    console.log(foodItem)
    renderMenuItem(foodItem.FoodImg,foodItem.FoodHead,foodItem.FoodInfo,mainFightCounter,sideHustleItems)
}

for(let foodItem of thirstClubMenu){
    mainFightCounter+=1
    console.log(foodItem)
    renderMenuItem(foodItem.FoodImg,foodItem.FoodHead,foodItem.FoodInfo,mainFightCounter,thirstClubItems)
}

for(let foodItem of sweetKnockoutsMenu){
    mainFightCounter+=1
    console.log(foodItem)
    renderMenuItem(foodItem.FoodImg,foodItem.FoodHead,foodItem.FoodInfo,mainFightCounter,sweetKnockoutsItems)
}


