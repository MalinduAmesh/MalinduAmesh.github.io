// let clickGet =$("#prj-mind-btn").click(function(){
//     $(".form-1").focus();
// });
// clickGet;

// window.addEventListener('DOMContentLoaded', (event) => {
//     /* ---- particles.js config ---- */
  
//     particlesJS("particles-js", {
//       "particles": {
//         "number": {
//           "value": 380,
//           "density": {
//             "enable": true,
//             "value_area": 3600
//           }
//         },
  
//       }
 
//     });
//   })

const toggleButton  = document.getElementsByClassName('toggle-button')[0]
const navbarLink  = document.getElementsByClassName('navBar-links')[0]

toggleButton.addEventListener('click',()=>{
    navbarLink.classList.toggle('active')
})


const btn = document.querySelectorAll(".category button");
const product = document.querySelectorAll(".itemBox");

btn.forEach(item=> {
    item.addEventListener("click",function(){
        for(let i=0;i<btn.length;i++){
            btn[i].classList.remove("active");
        }
        item.classList.add("active");
        
        product.forEach(show=>{
            show.style.display = "none";
            let products = item.textContent.toLowerCase();
            if(show.getAttribute("data-att")=== products || products ==="all"){
                show.style.display="block";
            }
        })
    })
} )


var typed = new Typed('.animattte', {
    strings: ['Developer', 'Photographer','Designer'],
  
    stringsElement: null,
  
    typespeed:1,
    backspeed:1,
    startDelay: 1000,
    backDelay: 1000,
    fadeOut: false,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 500,
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true,
    loop:true,
    smartBackspace: true // Default value
  });
function forOrder(){
    $("#prj-mind-btn").click(function () {
        $("#form-1-getIn").focus();
    });
}