var sliderball = document.getElementById('sb')
var unchecked = true

function lightMode(){
    document.getElementById('container').style.backgroundColor = '#efefef';
    window.sliderball.style.backgroundColor = '#ddd';
}

function darkMode(){
    document.getElementById('container').style.backgroundColor = '#1b1b1b';
    window.sliderball.style.backgroundColor = '#201e1ed8';
}

function swap(){
    switch(window.unchecked) {
        case true:
            sliderball.style.marginLeft = '165px';
            lightMode()
            window.unchecked = false;
            break;
        case false:
            sliderball.style.marginLeft = '0px';
            darkMode()
            window.unchecked = true;
            break;
        default:
    }
}


