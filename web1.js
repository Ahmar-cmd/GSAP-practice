var tl=gsap.timeline()
tl.from(".logo, .things, .log-in, .icon",{
    y:-100,
    duration:1,
    // repeat:1,
    opacity:0,
    delay:1,
    stagger:0.7
})
tl.from(".text",{
    x:-400,
    duration:1,
    // repeat:1,
    opacity:0,
    delay:0,
    stagger:1
})
tl.from(".image img",{
    scale:0.2,
     opacity:0,
    duration:0.5
})
gsap.from(".box",{
    scale:0.5,
    duration:1.3,
     opacity:0,
    delay:0.1,
     stagger:1,
     scrollTrigger:{
        trigger:".box",
        scroller:"body",
        start:"top 50%",
        end:"top 60%",
        scrub:2
         }
})
