let images = ["/images/image1.jpg", "/images/image2.jpg", "/images/image3.jpg", "/images/image4.JPG", "/images/image5.JPG"];

const myNewCarousel = new Carousel(images, document.getElementById('carousel'), '400px', '400px',
    document.getElementById('small_div_container'));

myNewCarousel.createHtmlBase();
myNewCarousel.nextAuto();

document.getElementById("previous").addEventListener("click", function () {
    myNewCarousel.previousTransition();
});

document.getElementById('next').addEventListener("click", function () {
    myNewCarousel.nextTransition();
});