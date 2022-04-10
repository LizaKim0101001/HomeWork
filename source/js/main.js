const src = "../img/baner.png";

const caruselImage = document.querySelector('.carusel-wrapper');
const slides = caruselImage.querySelectorAll(".carusel-image");

const btnNext = document.querySelector('#next');
const btnPrew = document.querySelector('#prew');

let activeTab = 0;
let idTab = 0;

//код для реализации переключения не кнопками
const caruselItem = document.querySelectorAll('.carusel-item');
const caruselList = document.querySelector('.carusel-list');

//есть проблема, если не попадаешь по тегу li
caruselList.addEventListener('click', (evet)=>{
    let tagName = evet.target.tagName.toLowerCase()
    if (tagName == 'li') {
        idTab = evet.target.id - 1
        activeTab = idTab
        removeAddClass()
    }
})

//код для реализации переключения кнопками


btnNext.addEventListener('click', ()=>{
    getActiveTab("next")
})
btnPrew.addEventListener('click', ()=>{
    getActiveTab("prew")
})

function getActiveTab(params) {
    if (params === 'next') {
        activeTab +=1;
        if (activeTab > 3) {
            activeTab = 0
        }
        idTab = activeTab;
        removeAddClass()
    } else if (params === 'prew') {
        activeTab = activeTab -1;
        if (activeTab < 0) {
            activeTab = 3;
        }
        idTab = activeTab;
        removeAddClass()
    }
}

function removeAddClass(){
    for (let i = 0; i < slides.length; i++) {
        if (activeTab == i) {
            slides[i].classList.add('active')
            caruselItem[i].classList.add("carusel-item__active")
        } else{
             slides[i].classList.remove('active')
            caruselItem[i].classList.remove("carusel-item__active")
        }
    }
}