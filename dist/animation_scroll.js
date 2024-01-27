gsap.registerPlugin(ScrollTrigger);
gsap.from('#a1_heading_unlock_right',{
    x:800,
    duration:1
});
gsap.from('#a1_heading_unlock_left',{
    x:-800,
    duration:1
});
gsap.from('#a2_twobutton_gradient',{
    y:200,
    duration:1,
    scrollTrigger:"#a2_twobutton_gradient"
});

gsap.from("#a3_showcase_left",{
    x:900,
    duration:1,
    delay:0.2,
    scrollTrigger:"#a3_showcase_left"
});
gsap.from("#a3_showcase_right",{
    x:-900,
    delay:0.2,
    duration:1,
    scrollTrigger:"#a3_showcase_right"
});


gsap.from('#a4_templateCustomize',{
    y:400,
    duration:1,
    scrollTrigger:"#a4_templateCustomize"
});

gsap.from('#a4_templateCustomize_left',{
    x:-400,
    delay:0.1,
    duration:2,
    scrollTrigger:"#a4_templateCustomize_left"
});

gsap.from('#a4_templateCustomize_middle',{
    y:400,
    delay:0.1,
    duration:2,
    scrollTrigger:"#a4_templateCustomize_left"
});

gsap.from('#a4_templateCustomize_right',{
    x:800,
    delay:0.1,
    duration:2,
    scrollTrigger:"#a4_templateCustomize_left"
});

gsap.from('#a5_onePlatform',{
    delay:0.5,
    scale:2,
    opacity:0,
    duration:2,
    scrollTrigger:"#a5_onePlatform"
});

gsap.from('#a6_blackbg',{
    scale:0.1,
    duration:2,
    scrollTrigger:"#a6_blackbg"
});

gsap.from('#a7_testimonials',{
    y:200,
    scale:4,
    duration:1.2,
    scrollTrigger:"#a7_testimonials"
});