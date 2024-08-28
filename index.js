 let landding =document.querySelector(".landding");
let imgesArray = ["01.jpg","02.jpg","03.jpg", "04.jpg"];

let randomBackground = true;
let randomBack;

if(randomBackground === true){
   function random(){
    randomBack = setInterval(function(){
        let random =Math.floor(Math.random()*4);
        landding.style.backgroundImage='url("imgs/'  + imgesArray[random] + '")';
    },5000)


}
   }

let setting=document.querySelector(".setting-box");
let gear=document.querySelector(".fa-gear")
gear.addEventListener("click",function(){
    setting.classList.toggle("open")
    gear.classList.toggle("fa-spin")
})


let local=localStorage.getItem("color-main")
if(local !== null){
    document.documentElement.style.setProperty("--main-color",local)
    document.querySelectorAll(".colors li ").forEach(ele=>{
        ele.classList.remove("active")
        if (ele.dataset.color===local){
            ele.classList.add("active")
        }
    })
}

let colors=document.querySelectorAll(".colors li")
colors.forEach(li=>{
    li.addEventListener("click",(e)=>{
        document.documentElement.style.setProperty("--main-color",e.target.dataset.color)
        localStorage.setItem("color-main",e.target.dataset.color)
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active")
        })
        e.target.classList.add("active")
    })
})




let span = document.querySelectorAll(".random-background span");



let localBackgrSor=localStorage.getItem("event")
console.log(localBackgrSor)
if(localBackgrSor !== null){
    span.forEach(act=>{
        act.classList.remove("active")
        if(act.dataset.background === localBackgrSor ){
            act.classList.add("active")
        }
    })
}




//random background//


span.forEach( function(el){
el.addEventListener("click",function(ele){
    ele.target.parentElement.querySelectorAll(".active").forEach(el=>{
        el.classList.remove("active")
    })
    ele.target.classList.add("active")
       localStorage.setItem("event",ele.target.dataset.background)
       
    if(ele.target.dataset.background === "yes"){
        random()
       
    }else{
         randomBackground = false;
          clearInterval(randomBack)
       
     }
})
})

// our skills section

let skills=document.querySelector(".our-skills");
window.onscroll=function(){
   let skillsTop= skills.offsetTop;
  
   let skillsHeight=skills.offsetHeight;
   
   let wind=this.innerHeight;
let scrol= this.pageYOffset

if(scrol > (skillsTop + skillsHeight - wind)) {
let el = document.querySelectorAll(" .skills-prograss span")

el.forEach(ele=>{
    ele.style.width = ele.dataset.prog;
})
}else{
    let el = document.querySelectorAll(" .skills-prograss span")

el.forEach(ele=>{
    ele.style.width = "0%"
})
}
    
}

let imgs=document.querySelectorAll(".imge-box img");
imgs.forEach(im=>{
    im.addEventListener("click",(el)=>{
        // creat overlay
        let overlay=document.createElement("div")
       overlay.className=("img-overlay")
        document.body.appendChild(overlay)
             // creat imgbox 
        let imgBox=document.createElement("div")
        imgBox.className=("imgBox")
          // create heading
            let heading=document.createElement("h3");
            heading.className=("heading")
            let htext=document.createTextNode(im.alt)
            heading.appendChild(htext)
            imgBox.appendChild(heading)

            // creat img
        let img=document.createElement("img")
        img.src=el.target.src
       imgBox.appendChild(img)
       document.body.appendChild(imgBox)
      
      let closepopup=document.createElement("span")
      closepopup.className=("closepopup")
     let t =document.createTextNode("x")
     closepopup.appendChild(t)
imgBox.appendChild(closepopup)
if(closepopup.className==="closepopup"){
    closepopup.addEventListener("click",function(){
        closepopup.parentNode.remove()
        document.querySelector(".img-overlay").remove()
    })
}




    })
})


// scroll 
let bulet=document.querySelectorAll(".nav-bults .bult");
// bulet.forEach(function(bulet){
//     bulet.addEventListener("click",function(el){
//         document.querySelector(el.target.dataset.section).scrollIntoView({
//             behavior:"smooth"
//         })
//     })
// })


function scrollToAnywhere(element){
    element.forEach(ele=>{
        ele.addEventListener("click",(el)=>{
            document.querySelector(el.target.dataset.section).scrollIntoView({
                behavior:"smooth"
            })
        })
    })
}
scrollToAnywhere(bulet)

 let bulet22=document.querySelector(".nav-bults ");
//  hidde bult setting
let bultLocStor=localStorage.getItem("local");
 bultSpan=document.querySelectorAll(".bult-option span");

if(bultLocStor!==null){
    bultSpan.forEach(ele=>{
        ele.classList.remove("active")
    })
if(bultLocStor==="yes"){
    
    // bulet=document.querySelector(".nav-bults ");
   document.querySelector(".bult-option .yes").classList.add("active")
    bulet22.style.display="block"
}else{
    // bulet=document.querySelector(".nav-bults ");
    document.querySelector(".bult-option .no").classList.add("active")
    bulet22.style.display="none"
}
}








 
bultSpan.forEach(bulet2=>{
    bulet2.addEventListener("click",(el)=>{
        el.target.parentElement.querySelectorAll(".active").forEach(ele=>{
            ele.classList.remove("active")
        })
el.target.classList.add("active")
if(el.target.dataset.bulet==="yes"){
    localStorage.setItem("local","yes")
//    bulet=document.querySelector(".nav-bults ");
   bulet22.style.display="block"
    
}else{
    bulet22.style.display="none"
    localStorage.setItem("local","no")
}
    })
})


// function active(element){
//     element.forEach(ele=>{
//         ele.addEventListener("click",(el)=>{
//             el.target.parentElement.querySelectorAll(".active").forEach(ac=>{
//                 ac.classList.remove("active")
//             })
//             el.target.classList.add('active')
//         })
//     })
// }

// active(element);





//reset button


document.querySelector(".reset").onclick=function(){
    window.location.reload()
   localStorage.clear()          // or  //localStorage.removeItem("")
}






// create active class on toggle

let links= document.querySelector("ul.links")
let toggle = document.querySelector(".toggle-menu")
  





toggle.addEventListener("click",function(e){
    this.classList.toggle("active")
    links.classList.toggle("open")
    links.style.transition=".8s"
})

document.addEventListener("click",(e)=>{
    if(e.target !==toggle &&links ){
        if(links.classList.contains("open")){
        toggle.classList.toggle("active")
        links.classList.toggle("open")
    }
       
    }
})

  //scroll
  let scroll = document.querySelector(".scroll")
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  window.addEventListener("scroll", el =>{
    let scrollTop = document.documentElement.scrollTop
scroll.style.width = `${(scrollTop / height) * 100 }%`
  })
