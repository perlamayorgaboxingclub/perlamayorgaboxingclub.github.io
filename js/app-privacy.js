// Change style of navbar on scroll
window.onscroll = function () { 
    scrollFunction();
};

function scrollFunction() {
    var navbar = document.getElementById("myNavbar");
    var pmBtnToUp = document.getElementById("pm-btnToUp");
    w3_close();
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
        pmBtnToUp.style.display = "block";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top", " w3-white w3-opacity");
        pmBtnToUp.style.display = "none";
    }
}


// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
    } else {
        mySidebar.style.display = 'block';
    }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}


$(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready
});
   
$(window).on('load', function() {
    // executes when complete page is fully loaded, including all frames, objects and images
});

$(window).resize(function() {
});