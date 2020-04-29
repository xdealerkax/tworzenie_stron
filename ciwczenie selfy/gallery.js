// wpisywanie zawartości do consoli
// console.log("hello");
// pobieranie elemnetow ze struktury Dom dokumentu
// let divText = 
// pobranie elementu po klasie css
let divText = document.querySelector('.text')
// pobieranie elementu po nazwie znacznika
// let divText = document.querySelector('div')
// let divText = document.querySelector('#header')

// zmiana zawartości elemenwtu jeśli coś tu wpiszesz to zamienie to
// wyświetla się to na stronie
// divText.innerHTML = "<h1>Hello World!</h1>"
// divText.innerText = "<h1>Hello World!</h1>"

// zmiana styli elementu
let subheader = document.querySelector('.aleo')
subheader.style.background = 'gray';
// padding-right 
subheader.style.paddingRight = '50px'
// dynamiczne rzeczy robimy w javascript

// zmiana klas css elementu header4 nazwa zmiennej
let header4 = document.querySelector('h4')
// dodanie klasy
header4.classList.add('bigger');
header4.classList.add('animate');
// usuwanie klasy
header4.classList.remove('bigger');
// przełączenie klasy jak klasa bigger jest ma ją usunąc jak jej nie ma , ma ją dodać inaczej włącz wyłącz
header4.classList.toggle('bigger')

// pobranie button-a nieklik to id
let btnKlik = document.querySelector('#nieklik')
//  dodanie obsługi zdarzenia click na button#nieklik
// zapisanie na zdarzenie dwie rzeczy podać nazwa zdarzenia i funckja
// onBtnKlikClick
btnKlik.addEventListener('click' , onBtnKlikClick)
//  deklaracja funkcji
// klik zwiększa się czcionka potem klik i się zmniejsza
function onBtnKlikClick(event) {
    console.log(event)
    header4.classList.toggle('bigger')
}
//  TYLKO DLA JEDNEGO ZDJĘCIA + obsługa zamykania
// // lightbox
// // pobierz zdjęcie
// let img = document.querySelector('.lightbox')
// // dodaj obsługę kliknięcia w zdjęcie
// img.addEventListener('click', showLightbox)
// // funckja pokazująca lightbox
// function showLightbox(event) {
//     let lightboxDiv = document.querySelector('#lightbox')
//     lightboxDiv.style.display = "flex"
// }


//  DLA WSZYSTKICH ZDJĘC W KLASIE LIGHTBOX
// lightbox
// pobierz zdjęcia
let imgs = document.querySelectorAll('.lightbox')

// dodaje zdarzenie kliknięcia 
for (let img of imgs) {
    img.addEventListener('click', showLightbox)
}
// dodaj obsługę kliknięcia w zdjęcie
// funckja pokazująca lightbox
// event ma swój target(kliknięcie użytkownika)
function showLightbox(event) {
    let lightboxDiv = document.querySelector('#lightbox')
    lightboxDiv.style.display = "flex"
    // pobranie adresu zdjęcia z klikniętego znacznika img
    let imgScr = event.target.src
    // console.log(imgScr)
    // pobranie znacznika img z lightbox
    let lightboxImg = document.querySelector('#lightbox-img')
    // wpisanie nowego adresu do img w lightbox
    lightboxImg.src = imgScr
}




// obsługa zamykania lightboxa
let lightboxDiv = document.querySelector('#lightbox')
// zapisz się na kliknięcie lightboxa
lightboxDiv.addEventListener('click', hideLightbox)
//  funkcja zamykająca lightbox
// target element html w którym nastąpiło wydarzenie
function hideLightbox(event) {
    // console.log(event)
    lightboxDiv.style.display = "none"
}