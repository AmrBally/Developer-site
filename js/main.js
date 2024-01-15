$(function () {
    var windowH = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navH = $('.navbar').innerHeight();
    $('.slider, .carousel-item ').height(windowH - ( upperH + navH));
})
// let slider = document.querySelector('.slider')

// let hslider = slider.clientHeight

// let upperH = document.querySelector('.upper-bar')

// console.log(upperH.clientHeight);
// let navH = document.querySelector('.navbar')

// console.log(navH);
// let windowH = (window).innerHeight

// console.log(` window ${windowH} `) ;

// function calcHeight() {
    
//     hslider = (windowH - ( upperH.clientHeight + navH.clientHeight ))
    
//     console.log(hslider);
// }
// calcHeight()



let listFeatures = document.querySelectorAll('.featured-work ul li');
let listFeaturesParent = document.querySelector('.featured-work ul ');
let shuffleWorkImg = document.querySelectorAll('.shufled-work .row div img ');
let shuffleWorkDiv = document.querySelectorAll('.shufled-work .row div ');
let allBtn = document.querySelector('.featured-work .list-unstyled .all')


listFeatures[0].classList.add('active');

for (let i = 0; i < listFeatures.length; i++ ){
    listFeatures[i].onclick = () => {
        listFeatures.forEach((e) => {
            e.classList.remove('active');
        })
        if (!listFeatures[i].classList.contains('active')) {
            listFeatures[i].classList.add('active');
        }


        for (let s = 0; s < shuffleWorkDiv.length; s++ ) {
            shuffleWorkDiv[s].classList.remove('divDisabled');
        }
        listFeatures.forEach((e) => {
            e.classList.remove('active');
        })

        shuffleWorkDiv.forEach((img) => {
            if (img.getAttribute('data-type') !== listFeatures[i].getAttribute('data-class') ) {
                img.classList.add('divDisabled');

            }
        })

        // for (let s = 0; s < shuffleWorkImg.length; s++ ) {
        //     shuffleWorkImg[s].classList.remove('disabled');
        // }
        // listFeatures.forEach((e) => {
        //     e.classList.remove('active');
        // })

        // shuffleWorkImg.forEach((img) => {
        //     if (img.className !== listFeatures[i].getAttribute('data-class') ) {
        //         img.classList.add('disabled');
        //     }
        // })
    }
}

allBtn.onclick = cheker


function cheker() { 
    for (let s = 0; s < shuffleWorkImg.length; s++ ) {

        shuffleWorkImg[s].classList.remove('disabled');
    }
    listFeatures.forEach((e) => {
        e.classList.remove('active');
    })

    for (let s = 0; s < shuffleWorkDiv.length; s++ ) {
        shuffleWorkDiv[s].classList.remove('divDisabled');
    }

    listFeatures[0].classList.add('active');
}















