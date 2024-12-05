//variables
const left = document.getElementById('left')
const right = document.getElementById('right')
const elementOfStory = document.getElementById("elementOfStory")

const c1 = document.getElementById('c1')
const c2 = document.getElementById('c2')
const c3 = document.getElementById('c3')
const c4 = document.getElementById('c4')
const c5 = document.getElementById('c5')

//function for button
let slidecount = 1
function slidechanger() {
        if (slidecount === 1) {
            left.disabled = true

            c1.style.display = "block"
            c2.style.display ="none"
            c3.style.display ="none"
            c4.style.display ="none"
            c5.style.display ="none"

            elementOfStory.innerText = "Exposition"
        } else if(slidecount === 2) {
            c2.style.display = "block"
            c1.style.display = "none"
            c3.style.display ="none"
            c4.style.display ="none"
            c5.style.display ="none"
            
            elementOfStory.innerText = "Rising Action"
        } else if (slidecount === 3) {
            c3.style.display = "block"        
            c1.style.display = "none"
            c2.style.display = "none"
            c4.style.display ="none"
            c5.style.display ="none"
            
            elementOfStory.innerText = "Climax"
        } else if (slidecount === 4) {
            c4.style.display = "block"
            c1.style.display = "none"        
            c2.style.display = "none"
            c3.style.display = "none"
            c5.style.display ="none"
            
            elementOfStory.innerText = "Falling Action"
        } else if (slidecount === 5) {
            c5.style.display = "block"
            c1.style.display = "none"        
            c2.style.display = "none"
            c3.style.display = "none"
            c4.style.display ="none"
            
            elementOfStory.innerText = "Resolution"
        }
        
        if (slidecount === 5) {
            right.disabled = true
        } else {
            right.disabled = false
        }

        if(slidecount === 1){
            left.disabled = true
        } else {
            left.disabled = false
        }

        console.log(slidecount);
        
    }
    right.addEventListener('click', ()=> {
        slidecount++
        slidechanger()    
    })

    left.addEventListener('click', ()=> {
        slidecount--
        slidechanger()
    })

const readNowBtn = document.getElementById("readNowBtn")

readNowBtn.addEventListener("click", () => {
    window.location.href = "https://poemuseum.org/the-tell-tale-heart/?fbclid=IwY2xjawG7u6tleHRuA2FlbQIxMAABHa64PAgvmpRPQmlzKLw19uQgr-iO8tmurJShS5RvHvHrZmoJ9f2FMDyLbw_aem_vLYmxbNqcJ5adcPFmVN0OA"
})

const hamburgerIcon = document.getElementById("hamburgerIcon")
const navBar = document.getElementById("navBar")

let hamburgerIconClickCounter = 0

hamburgerIcon.addEventListener("click", () => {
    hamburgerIconClickCounter++
    
    if(hamburgerIconClickCounter === 1){
        navBar.style.display = "block"

        navBar.classList.remove("navLinkList")
        navBar.classList.add("navBarTabView")
        navBar.classList.add("navBarTabViewAnimation")

        hamburgerIcon.style.color = "black"
        hamburgerIcon.classList.remove("fa-bars")
        hamburgerIcon.classList.add("fa-x")
    } else if (hamburgerIconClickCounter === 2) {
        hamburgerIconClickCounter = 0
        navBar.style.display = "none"

        navBar.classList.add("navLinkList")
        navBar.classList.remove("navBarTabView")

        hamburgerIcon.style.color = "white"
        hamburgerIcon.classList.remove("fa-x")
        hamburgerIcon.classList.add("fa-bars")
    }
})


const navLink = document.querySelectorAll(".navLinkItem")
navLink.forEach((link) => {
    link.addEventListener("click", () => {
        hamburgerIconClickCounter = 0
        navBar.style.display = "none"

        navBar.classList.add("navLinkList")
        navBar.classList.remove("navBarTabView")

        hamburgerIcon.style.color = "white"
        hamburgerIcon.classList.remove("fa-x")
        hamburgerIcon.classList.add("fa-bars")
        
    })
})


