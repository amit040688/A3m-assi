// document.querySelector('#toggle').addEventListener('change', () => {
//   document.querySelectorAll('input[name="drop-down"]').forEach(e => {
//     e.setAttribute('type', e.getAttribute('type') === 'checkbox' ? 'radio' : 'checkbox');
//   })
// })

$(document).ready(function() {
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.mobile-menu, body').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });



   
});