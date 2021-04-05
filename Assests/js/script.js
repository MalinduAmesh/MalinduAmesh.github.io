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