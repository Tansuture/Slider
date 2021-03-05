let pages = [{
    src: 'img/slider-image 0.jpg',
    title: 'Rostov-on-Don Admiral',
    area: '81 m2',
    time: '3.5 months',
    cost: 'Upon request'
}, {
    src: 'img/slider-image 1.jpg',
    title: 'Sochi Thieve',
    area: '105 m2',
    time: '4 months',
    cost: 'Upon request'
}, {
    src: 'img/slider-image 2.jpg',
    title: 'Rostov-on-Don Patriotic',
    area: '93 m2',
    time: '3 months',
    cost: 'Upon request'
}]

function initSlider() {
    let sliderImages = document.querySelector('.slider-img-container')
    let sliderArrows = document.querySelectorAll('.slider-arrow')
    let sliderDots = document.querySelector('.slider_dots')
    let sliderList = document.querySelector('.points')
    let slideChange = document.querySelector('.block')

    initImages()
    initArrows()
    initDots()
    initCityNames()



    function initImages() {
        pages.forEach((image, index) => {
            let imgSrc = `<img src = '${pages[index].src}' class = 'image n${index} ${index===0 ? 'active' : ''}'data-index = '${index}'>`
            sliderImages.innerHTML += imgSrc;
        })

    }


    function initArrows() {
        sliderArrows.forEach(arrow => {
            arrow.addEventListener('click', () => {
                let curNumber = +sliderImages.querySelector('.active').dataset.index
                let nextNumber;
                if (arrow.classList.contains('left')) {
                    nextNumber = curNumber === 0 ? pages.length - 1 : curNumber - 1;
                } else {
                    nextNumber = curNumber === pages.length - 1 ? 0 : curNumber + 1;
                }
                moveSlider(nextNumber)
            })
        })
    }



    function initDots() {
        pages.forEach((image, index) => {
            let dot = `<div class='slider__dots-item n${index} ${index === 0? 'active' : ''}' data-index='${index}'></div>`;
            sliderDots.innerHTML += dot;
        });
        sliderDots.querySelectorAll('.slider__dots-item').forEach(dot => {
            dot.addEventListener('click', function () {
                moveSlider(this.dataset.index);
            })
        })
    }


    function initCityNames() {
        pages.forEach((image, index) => {
            let item = `<li class="js-list  n${index} ${index === 0? "active-list" : ""}" data-index="${index}"><a href = '#'>${pages[index].title}</a></li>`;
            sliderList.innerHTML += item
        });
        sliderList.querySelectorAll(".js-list").forEach(item => {
            item.addEventListener("click", function () {
                moveSlider(this.dataset.index);
            })
        })

    }



    function moveSlider(num) {
        sliderImages.querySelector('.active').classList.remove('active')
        sliderImages.querySelector('.n' + num).classList.add('active');

        sliderDots.querySelector('.active').classList.remove('active');
        sliderDots.querySelector('.n' + num).classList.add('active');

        sliderList.querySelector(".active-list").classList.remove("active-list");
        sliderList.querySelector('.n' + num).classList.add("active-list");

        slideChange.querySelector(".sity").innerText = pages[num].title;
        slideChange.querySelector(".area").innerText = pages[num].area;
        slideChange.querySelector(".cost").innerText = pages[num].cost;
        slideChange.querySelector(".time").innerText = pages[num].time;




    }
}




document.addEventListener('DOMContentLoaded', initSlider)