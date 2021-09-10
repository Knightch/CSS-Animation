gsap.to('#videoplyr',{
    scrollTrigger:{
        trigger:"#main",
        start:"top top",
        scrub:2,
        pin:"#main"
    },
    scale:"0.9"
});
gsap.to('#main',{
    scrollTrigger:{
        trigger:"#videoplyr",
        start:"top top",
        scrub:2,
        pin:"#main"
    },
    background:"#000"
});
gsap.to('#one',{
    scrollTrigger:{
        trigger:"#main",
        start:"top top",
        scrub:3
    },
    left:'-600%',
    opacity:0
});
gsap.to('#holdr1',{
    scrollTrigger:{
        trigger:"#main",
        start:"top top",
        scrub:3
    },
    left:'-300%',
    opacity:0
});
gsap.to('#sx',{
    scrollTrigger:{
        trigger:"#main",
        start:"top top",
        scrub:3
    },
    right:'-600%',
    opacity:0
});
gsap.to('#holdr2',{
    scrollTrigger:{
        trigger:"#main",
        start:"top top",
        scrub:3
    },
    right:'-300%',
    opacity:0
});
