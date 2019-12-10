document.querySelector('header > h1').innerText = "Inspector Clouseau"
document.querySelector('header >  h2').innerText = "Decades of solving crimes"


function windowResize() {
    var windowWidth = window.innerWidth, windowHeight = window.innerHeight, offsetTop = window.pageYOffset, offsetLeft = window.pageXOffset, siteUrl = window.location.href;
    document.getElementById("message").innerHTML = "Window size is " + windowWidth + "wide by " + windowHeight + " tall.<br> Window offset is " + offsetTop + " from the top and " + offsetLeft + " from the left.<br> Site URL is: " + siteUrl;
}

function docProperties() {
    var title = document.title, lastMod = document.lastModified;
    document.getElementById("message-2").innerHTML = "Document title: " + title + "<br>" + "Last Modified: " + lastMod;
}

docProperties();
windowResize();

