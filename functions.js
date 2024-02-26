function toggleStyleSheet() {
    var styleElement = document.getElementById('mainStyleSheet');
    var currentStyle = localStorage.getItem('mainStyleSheet');
    
    if (currentStyle === "secondStyle.css") {
        currentStyle = "firstStyle.css";
    }
    else {
        currentStyle = "secondStyle.css";
    }
    styleElement.setAttribute('href', currentStyle);
    localStorage.setItem('mainStyleSheet', currentStyle);
}

function loadStyleSheet() {
    var styleElement = document.getElementById('mainStyleSheet');
    var currentStyle = localStorage.getItem('mainStyleSheet');
    if (currentStyle === null) {
        currentStyle = "firstStyle.css";
    }
    styleElement.setAttribute('href', currentStyle);

    var toggleSwitch = document.getElementById('checkbox');
    toggleSwitch.checked = (currentStyle === "secondStyle.css");
}

document.addEventListener('DOMContentLoaded', function() {
    loadStyleSheet();
});
