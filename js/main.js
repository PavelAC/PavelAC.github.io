function showSidebar(){
const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex';
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'none';
}

window.onscroll=function(){
    toggleScroll();
}

function toggleScroll() {
    const scrollToTopBtn =document.getElementById("scrollToTopBtn")

    if (window.scrollY > 200) {
        // scrollToTopBtn.style.opacity= '1';
        scrollToTopBtn.classList.add('visible')
    }
    else {
        // scrollToTopBtn.style.opacity= '0';
        scrollToTopBtn.classList.remove('visible')
    }      
}