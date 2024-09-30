const element = document.getElementById('main');
const logo = document.getElementById('logo');
var nav = document.getElementById('navbar');

let lastScrollTop = 0;
element.onscroll = (e) => {
    if (element.scrollTop == 0) {
        logo.style.width = "12em";
        nav.style.marginTop = "8.5em";
        return;
    }

    logo.style.width = 0;
    nav.style.marginTop = 0;
    lastScrollTop = element.scrollTop <= 0 ? 0 : element.scrollTop;

    if (element.scrollTop + element.offsetHeight >= element.scrollHeight) {
        console.log("End");
    }
}