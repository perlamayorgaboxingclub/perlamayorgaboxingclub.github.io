// Modal Image Gallery
function onClick(element) {
    console.log(element);
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
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

function pm_map(){
    var contentPopup = '<div><div class="w3-center"><img src="../images/logo.png" alt="Prueba"></img></div><div><p><b>Perla Mayorga Boxing Club</b></p><p>28813, Pozuelo del Rey</p><p>40.367091, -3.316149</p></div></div>'
		
    var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        osm = L.tileLayer(osmUrl, {maxZoom: 18, attribution: osmAttrib});
    var map = L.map('mapid').setView([40.367091, -3.316149], 17).addLayer(osm);
    L.marker([40.367091, -3.316149])
        .addTo(map)
        .bindPopup(contentPopup)
        .openPopup();
}

function pm_setHeight(column) {
    var maxHeight = 0;
    //Get all the element with class = pm-cvmaestros
    column = $(column);
    column.css('height', 'auto');
    //Loop all the column
    column.each(function() {       
        //Store the highest value
        if($(this).height() > maxHeight) {
            maxHeight = $(this).height();
        }
    });
    //Set the height
    column.height(maxHeight);
}

function pm_setHeightAuto(column) {
    column = $(column);
    column.css('height', 'auto');
}




//------------------------------------------------------
// Change style of navbar on scroll
window.onscroll = function () { 
    myFunction();
};

function myFunction() {
    var navbar = document.getElementById("myNavbar");
    w3_close();
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top", "");
    }
}
//-------------------------------------------------------






$(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready
});
   
$(window).on('load', function() {
    // executes when complete page is fully loaded, including all frames, objects and images
    this.pm_map();
    if($(window).width() > 600){
        pm_setHeight('.pm-cvmaestros');
        pm_setHeight('.pm-gymhorarios');
    }
    else{
        pm_setHeightAuto('.pm-cvmaestros');
        pm_setHeightAuto('.pm-gymhorarios');
    }

    setTimeout(function () {
        $("#popupCook").fadeIn(200);
     }, 4000);
    $("#closePopupCook, .popupCookOK").click(function() {
        $("#popupCook").fadeOut(200);
    }); 
    
});

$(window).resize(function() {
    // execute when resize window
    if($(window).width() > 600) {
        pm_setHeight('.pm-cvmaestros');
        pm_setHeight('.pm-gymhorarios');
    }
    else{
        pm_setHeightAuto('.pm-cvmaestros');
        pm_setHeightAuto('.pm-gymhorarios');
    }
    
});