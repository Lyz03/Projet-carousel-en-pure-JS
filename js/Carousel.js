const Carousel = function (imagesArray, container) {
    this.images = imagesArray;
    this.container = container;

    this.createHtmlBase = function () {
        // previous button
        let previous = document.createElement('button');
        previous.id = "previous";
        previous.innerText = "<";
        this.container.appendChild(previous)

        // img
        let a = 0;

        this.images.forEach(value => {
            let img = document.createElement('img');
            img.id = "image" + a.toString();
            img.src = value;
            img.alt = "placeholder";
            this.container.appendChild(img);

            a++;
        });

        // next button
        let next= document.createElement('button');
        next.id = "next";
        next.innerText = ">";
        this.container.appendChild(next)
    }

    // button click
    let translate = 0;
    this.previousTransition = function () {
        if (translate === 0)
            translate = (imagesArray.length * 400) - 400;
        else
            translate -= 400;

        document.querySelectorAll('#carousel img').forEach(value => {
            value.style.transform = "translateX(" + (- translate) + "px)";
        });
    }

    this.nextTransition = function () {
        if (translate === (imagesArray.length * 400) - 400)
            translate = 0;
        else
            translate += 400;

        document.querySelectorAll('#carousel img').forEach(value => {
            value.style.transform = "translateX(-" + translate + "px)";
        });

    }

    this.nextAuto = function () {
        setInterval(() => this.nextTransition(), 5000)
    }

}