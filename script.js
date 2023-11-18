var circle = document.querySelector("#circle")
var frame = document.querySelector("#frame")


const lerp = (x, y, a) => x * (1 - a) + y * a;
/* window.addEventListener("mousemove",function(dets){
   circle.style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`
}) */

window.addEventListener("mousemove",function(dets){
    gsap.to(circle, {
        x: dets.clientX,
        y: dets.clientY,
        duration:.3,
        ease:Expo
    })
})

frame.addEventListener("mouseenter", function(dets){
    
    var dims =frame.getBoundingClientRect();

    var xstart = dims.x;
    var xend = dims.x + dims.width;

    var zeroone = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX)
    
    
    
    
    gsap.to(circle,{
        scale:4
    })
    gsap.to("#frame p",{
        duration: .4,
        y: "-5vw"
    })
    gsap.to("#frame p",{
        x:lerp(30, -50, zeroone),
        duration: .3
    })
})
frame.addEventListener("mouseleave", function(dets){
    gsap.to(circle,{
        scale:1
    })
    gsap.to("#frame p",{
        duration: .4,
        y: "0"
    })
    gsap.to("#frame p",{
        x:0,
        duration: .3
    })
})