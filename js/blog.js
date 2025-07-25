import { blogData } from "./data.js" 

const blogContainerGrid=document.getElementById("blog-container-grid")
document.getElementById("nav-blog").style.color="#ff3e6c"


function renderBlogData(img, head, cat, date,c){
    blogContainerGrid.innerHTML+=`
                    <div class="blog-container">
                    <div class="blog-img" id="blog-img-${c}"></div>
                    <h3><a href="#">${head}</a></h3>
                    <p class="blog-category"> <a >${cat}</a></p>
                    <p class="blog-publish-date">posted on ${date}</p>
                </div>
    `
    document.getElementById(`blog-img-${c}`).style.backgroundImage=`url("${img}")`
}
let count=0
for(let i=0; i<blogData.length;i++){
    count=count+1
    renderBlogData(blogData[i].blogImg, blogData[i].blogHead, blogData[i].blogCategory,blogData[i].blogDate,count)
}