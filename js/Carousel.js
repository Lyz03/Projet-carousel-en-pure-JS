const Carousel = function (imagesArray, container, widthPx, heightPx, smallDivContainer) {
    this.images = imagesArray;
    this.container = container;
    this.smallDivContainer = smallDivContainer
    this.width = widthPx;
    this.height = heightPx

    this.container.style.width = this.width;
    this.container.style.height = this.height;

    this.createHtmlBase = function () {
        // previous button
        let previous = document.createElement('button');
        previous.id = "previous";
        previous.innerText = "<";
        this.container.appendChild(previous)

        // img and small div
        let a = 0;

        this.images.forEach(value => {
            let img = document.createElement('img');
            img.id = "image" + a.toString();
            img.src = value;
            img.alt = "placeholder";
            this.container.appendChild(img);

            let smallDiv = document.createElement('div');
            smallDiv.id = "div" + a.toString();
            smallDiv.className = "small_div";
            this.smallDivContainer.appendChild(smallDiv);

            a++;
        });

        // next button
        let next= document.createElement('button');
        next.id = "next";
        next.innerText = ">";
        this.container.appendChild(next)
    }

    // swipe effect
    let translate = 0;

    // for events
    this.previousTransition = function () {
        if (translate === 0)
            translate = (imagesArray.length * parseInt(widthPx)) - parseInt(widthPx);
        else
            translate -= parseInt(widthPx);

        this.curentImage();

        document.querySelectorAll('#carousel img').forEach(value => {
            value.style.transform = "translateX(" + (- translate) + "px)";
        });
    }

    // for events
    this.nextTransition = function () {
        if (translate === (imagesArray.length * parseInt(widthPx)) - parseInt(widthPx))
            translate = 0;
        else
            translate += parseInt(widthPx);

        this.curentImage();

        document.querySelectorAll('#carousel img').forEach(value => {
            value.style.transform = "translateX(-" + translate + "px)";
        });

    }

    this.nextAuto = function () {
        setInterval(() => this.nextTransition(), 5000)
    }

    // add case there is more than 5 images
    this.curentImage = function () {
        const div0 = document.getElementById('div0');
        const div1 = document.getElementById('div1');
        const div2 = document.getElementById('div2');
        const div3 = document.getElementById('div3');
        const div4 = document.getElementById('div4');

        switch (translate) {
            case 0:
                div4.style.opacity = "0.6";
                div0.style.opacity = "1";
                div1.style.opacity = "0.6";
                break
            case parseInt(widthPx):
                div0.style.opacity = "0.6"
                div1.style.opacity = "1";
                div2.style.opacity = "0.6";
                break
            case parseInt(widthPx) * 2:
                div1.style.opacity = "0.6";
                div2.style.opacity = "1";
                div3.style.opacity = "0.6";
                break
            case parseInt(widthPx) * 3:
                div2.style.opacity = "0.6";
                div3.style.opacity = "1";
                div4.style.opacity = "0.6";
                break
            case parseInt(widthPx) * 4:
                div3.style.opacity = "0.6";
                div4.style.opacity = "1";
                div0.style.opacity = "0.6"
                break
        }
    }

}