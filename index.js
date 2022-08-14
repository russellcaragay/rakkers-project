function themeFunction(icon) {
    var element = document.body;
    const navs = document.querySelectorAll('.nav-items-main');
    const titleimg = document.querySelectorAll('.title-img');
    
    element.classList.toggle("dark-mode");
    navs.forEach(nav => nav.classList.toggle('nav-dark-mode'));
    

    if(icon.classList.contains("fa-moon")){
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }
    else{
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }    
}

function navToggle() {
    const navs = document.querySelectorAll('.nav-items')
    navs.forEach(nav => nav.classList.toggle('toggle-show'));
}

// Footer Section Toggles
function newToggle() {
    const navs = document.querySelectorAll('.toggle-new-contents')
    navs.forEach(nav => nav.classList.toggle('toggle-show'));
}

// Footer Function
function footersignFunction(x) {
    
    if(x.classList.contains("fa-plus")){
        x.classList.remove("fa-plus");
        x.classList.add("fa-minus");
    }
    else{
        x.classList.remove("fa-minus");
        x.classList.add("fa-plus");
    }
}

function categoriesToggle() {
    const navs = document.querySelectorAll('.toggle-categories-contents')
    navs.forEach(nav => nav.classList.toggle('toggle-show'));
}

function informationToggle() {
    const navs = document.querySelectorAll('.toggle-information-contents')
    navs.forEach(nav => nav.classList.toggle('toggle-show'));
}

function newsletterToggle() {
    const navs = document.querySelectorAll('.toggle-newsletter-contents')
    navs.forEach(nav => nav.classList.toggle('toggle-show'));
}




document.querySelector('.nav-toggle')
.addEventListener('click', navToggle);

//Footer Section Document Queries
document.querySelector('.toggle-new')
.addEventListener('click', newToggle);

document.querySelector('.toggle-categories')
.addEventListener('click',categoriesToggle);

document.querySelector('.toggle-information')
.addEventListener('click',informationToggle);

document.querySelector('.toggle-newsletter')
.addEventListener('click',newsletterToggle);