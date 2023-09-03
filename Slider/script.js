/*
The code starts by selecting various DOM elements using getElementById and querySelectorAll. These elements include:
progress: Represents the progress bar.
prev: Represents the "previous" button.
next: Represents the "next" button.
circles: Represents a list of elements with the class "circle." These are likely the steps or sections of the application.
*/
const progress= document.getElementById('progress')
const prev= document.getElementById('prev')
const next= document.getElementById('next')
const circles= document.querySelectorAll('.circle')

// currentActive: This variable is used to keep track of the current step or section the user is on. It's initialized to 1, presumably the first step.
let currentActive=1

// Two event listeners are set up for the "next" and "prev" buttons.
next.addEventListener('click',()=>{
    // When the "next" button is clicked, the currentActive variable is incremented, but it is also checked to ensure it doesn't exceed the total number of steps (circles.length). Then, the update function is called.
    currentActive++
    if(currentActive>circles.length){
        currentActive=circles.length;
    }
    update()
})
prev.addEventListener('click',()=>{
    // When the "prev" button is clicked, the currentActive variable is decremented, but it is also checked to ensure it doesn't go below 1. Again, the update function is called.
    currentActive--
    if(currentActive<1){
        currentActive=1
    }
    update()
})
function update()
{
    // It iterates through each of the circle elements using a forEach loop.
    circles.forEach((circle,index)=>{
    // If the index of a circle is less than currentActive, it adds the class "active" to the circle, indicating that it's a completed step.
    if(index < currentActive){
        circle.classList.add('active')
    }
    // If the index is greater than or equal to currentActive, the "active" class is removed, indicating that these steps are not yet completed.
    else{
        circle.classList.remove('active')
    }
   })
   const actives=document.querySelectorAll('.active')
   // It calculates the progress bar width by counting the number of circles with the "active" class and dividing it by the total number of circles.
   progress.style.width=(actives.length-1) /(circles.length-1 )*100+'%'

// It also handles the state of the "prev" and "next" buttons:
// If currentActive is 1, the "prev" button is disabled.
// If currentActive is equal to the total number of circles, the "next" button is disabled.
// Otherwise, both buttons are enabled.  
   if(currentActive === 1){
    prev.disabled = true
   }
//    at the end 
   else if(currentActive===circles.length){
    next.disabled=true
   }
else{
    prev.disabled=false
    next.disabled=false
}
}

