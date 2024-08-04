let main = document.querySelector(".main");
let cursor = document.querySelector("#cursor");
let imagediv = document.querySelector("#image")

main.addEventListener("mousemove", function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
    })
})
imagediv.addEventListener("mouseenter", function(dets){
    gsap.to(cursor,{
        scale:2,
        x:dets.x,
        y:dets.y
    })
})
imagediv.addEventListener("mouseleave", function(dets){
    gsap.to(cursor,{
        scale:1,
        x:dets.x,
        y:dets.y
    })
})