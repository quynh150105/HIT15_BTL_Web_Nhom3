let lastScrollTop = 0
window.addEventListener("scroll", function() {
    let header = document.querySelector(".sticky_header")
    let currentScroll = document.documentElement.scrollTop
    
    if (currentScroll > lastScrollTop) {
        header.style.top = "-200px";
    } else {
        header.style.top = "0"
    }
    
    if (currentScroll <= 0) {
        lastScrollTop = 0
    } else {
        lastScrollTop = currentScroll
    }
})

