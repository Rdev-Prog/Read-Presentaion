//variables
const left = document.getElementById('left')
const right = document.getElementById('right')
let slidecount = 1
const c1 = document.getElementById('c1')
const c2 = document.getElementById('c2')
const c3 = document.getElementById('c3')
const c4 = document.getElementById('c4')
const c5 = document.getElementById('c5')
const c6 = document.getElementById('c6')

//function for button
    function slidechanger() {
        if (slidecount === 1) {
            c1.style.display = "block"
            c2.style.display ="none"
            c3.style.display ="none"
            c4.style.display ="none"
            c5.style.display ="none"
            c6.style.display ="none"
            
        } else if(slidecount === 2) {
            c2.style.display = "block"
            c1.style.display = "none"
            c3.style.display ="none"
            c4.style.display ="none"
            c5.style.display ="none"
            c6.style.display ="none"

        } else if (slidecount === 3) {
            c3.style.display = "block"        
            c1.style.display = "none"
            c2.style.display = "none"
            c4.style.display ="none"
            c5.style.display ="none"
            c6.style.display ="none"

        } else if (slidecount === 4) {
            c4.style.display = "block"
            c1.style.display = "none"        
            c2.style.display = "none"
            c3.style.display = "none"
            c5.style.display ="none"
            c6.style.display ="none"

        } else if (slidecount === 5) {
            c5.style.display = "block"
            c1.style.display = "none"        
            c2.style.display = "none"
            c3.style.display = "none"
            c4.style.display ="none"
            c6.style.display ="none"

        } else if(slidecount === 6) {
            c6.style.display = "block"
            c1.style.display = "none"        
            c2.style.display = "none"
            c3.style.display = "none"
            c4.style.display ="none"
            c5.style.display ="none"

        } else if(slidecount === 7) {
            slidecount = 1
        }
    }
    right.addEventListener('click', ()=> {
        slidecount++
        slidechanger()    
    }
)

    left.addEventListener('click', ()=> {
        slidecount--
        slidechanger()
    }
)



