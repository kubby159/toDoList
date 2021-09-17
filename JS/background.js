const images = [

    "place.jpg","seoul.jpg","shanghai.jpg"
]

const chosenImage = images[Math.floor(Math.random()*images.length)];

//JS로 HTML Tag 추가시키기

//1. tag를 생성
const bgImage = document.createElement('img');

bgImage.src = `./images/${chosenImage}`;

//2. 만든 tag를 원하는 위치에 배치
document.body.appendChild(bgImage);