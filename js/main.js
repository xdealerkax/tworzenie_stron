// pobranie img-container 
let imgContainer = document.querySelector('#img-container')
let sliderXPosition = 0
let btnAnim = document.querySelector('#btn-anim')
// jeśli coś ma to aniamcja trwa jeśli puste to aniamcja nie jest uruchiomiona i ja ją chcę uruchomić
let animationHandle

btnAnim.addEventListener('click', btnAnimClick)

function btnAnimClick(e) {
    if (animationHandle){
        // zatrzymaj animację
        // clearinterwval zatrzymuje intervala tylko powiedz którego
        clearInterval(animationHandle)
        // undefined puste
        animationHandle = undefined
    }
    else {
        // uruchom animacje
        // chce wiedzieć którego setintervala zatrzymać
        animationHandle = setInterval(animateSlider, 16)
    }
}

//  na sztywno
// imgContainer.style.transform = 'translateX(-500px)'

// setinterval podaj funkcje która ma się wykonywać co jakiś czas a druga rzecz co jaki czas ile milisekund
// wersja prosta już nie używana
function animateSlider() {
    imgContainer.style.transform = "translateX(" + sliderXPosition + "px)"
    // "transform: translateX("+" "-100" "px") tą wartość trzymamy w sliderxposition a + łączą ciągi znaków i do tego doklej px
    sliderXPosition -=2
}






// produkcyjnie używane dziś
// let sliderXPosition = 0
// animateSlider()
// function animateSlider() {
//     imgContainer.style.transform = "translateX(" + sliderXPosition + "px)"
//     sliderXPosition -=2
//     // ponowne wykonanie przy odświeżaniu ekranu
//     window.requestAnimationFrame(animateSlider)
// }