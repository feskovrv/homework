let menu = document.querySelector('.menu');
menu.onclick = (e)=>{
    console.log(e.target.classList[1])
    let button = document.getElementsByClassName(e.target.classList[1] + '-submenu')[0];
    console.log(button);
    button.classList.toggle('submenu_show');
}

let position = 0;
const 
    slidesToShow = 1,
    slidesToScroll = 1,
    container = document.querySelector('.slider-container'),
    track = document.querySelector('.slider-track'),
    items = document.querySelectorAll('.slider-item'),
    btnPrev = document.querySelector('.btn-prev'),
    btnNext = document.querySelector('.btn-next'),
    itemsCount = items.length,
    itemWidth = container.clientWidth / slidesToShow,
    movePosition = slidesToScroll * itemWidth;

items.forEach((item)=>{
    item.style.minWidth = `${itemWidth}px`
});

btnNext.addEventListener('click', ()=>{
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    console.log (itemsLeft);
    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    console.log (position);
    setPosition();
});

btnPrev.addEventListener('click', ()=>{
    const itemsLeft = Math.abs(position) / itemWidth;
    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    setPosition();
});

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
};

const cards = [
    {
        image: 'https://cdn.svyaznoy.ru/upload/iblock/b4d/iphone_11_g_2.jpg',
        title: 'Название 1'
    },
    {
        image: 'https://ichip.ru/blobimgs/uploads/2018/11/Huawei-P20-Lite.jpg',
        title: 'Название 2'
    },
    {
        image: 'https://cdn.svyaznoy.ru/upload/iblock/b4d/iphone_11_g_2.jpg',
        title: 'Название 3'
    },
    {
        image: 'https://ichip.ru/blobimgs/uploads/2018/11/Huawei-P20-Lite.jpg',
        title: 'Название 4'
    },
    {
        image: 'https://cdn.svyaznoy.ru/upload/iblock/b4d/iphone_11_g_2.jpg',
        title: 'Название 5'
    },
    {
        image: 'https://ichip.ru/blobimgs/uploads/2018/11/Huawei-P20-Lite.jpg',
        title: 'Название 6'
    },
    {
        image: 'https://cdn.svyaznoy.ru/upload/iblock/b4d/iphone_11_g_2.jpg',
        title: 'Название 7'
    }
]


function renderCards (){
    const cardsContainer= document.querySelector('.cards__container');
        cardsContainer.innerHTML = cards.map((item, idx) => {
            return `
            <div class="card-item">
                <img src="${item.image}" class="card-image">
                <span class="card-title">${item.title}</span>
            </div>`
        }).join('');
}

renderCards();