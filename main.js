//sticky navbar
$(function(){
    $("#toggle").click(function(){
        $(".nav-links").slideToggle();
    })
});








window.addEventListener("scroll", function(){
    var header= document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0)
});

const toggleButton = document.getElementById('toggle-Button')
const header = document.getElementById('navbar-links')


