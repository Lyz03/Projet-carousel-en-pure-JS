let images = ["/images/image1.jpg", "/images/image2.jpg", "/images/image3.jpg", "/images/image4.JPG", "/images/image5.JPG"];

const myNewCarousel = new Carousel(images, document.getElementById('carousel'));

myNewCarousel.createHtmlBase();
myNewCarousel.nextAuto();

document.getElementById("previous").addEventListener("click", myNewCarousel.previousTransition);
document.getElementById('next').addEventListener("click", myNewCarousel.nextTransition);