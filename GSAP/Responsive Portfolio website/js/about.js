// smooth scroll 
const scroll = new LocomotiveScroll({
    el: document.querySelector('#js-scroll'),
    smooth: true,
    smoothMobile: true,
    inertia: 0.75
});

// div following mouse 
TweenMax.from(".cursor-follow", 2, {
    delay: 1,
    opacity: 0
});

follower = document.querySelector('.cursor-follow');

posX = 0;
posY = 0;
mouseX = 0;
mouseY = 0;

TweenMax.to({}, 0.016, {
    repeat: -1,
    onRepeat: function () {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        TweenMax.set(follower, {
            css: {
                left: posX - 40,
                top: posY - 40,
            }
        });
    }
});

document.addEventListener("mousemove", function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});