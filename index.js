function init(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
init()
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


gsap.from("#block2",{
  y:20,
  opacity:0,
  duration:3,
  stagger: .3,
  ease: Expo.easeInOut
})
// document.querySelectorAll("#section2 .abc")
// .forEach(function(elem){
gsap.from("#one", {
  scrollTrigger: {
    trigger: "#one",
    scroller: "#main",
    start: "top 70%",
  },
  x: -100,
  opacity: 0,
  ease: Expo.easeInOut,
  duration: 1
})
gsap.from("#two", {
  scrollTrigger: {
    trigger: "#two",
    scroller: "#main",
    start: "top 70%",
  },
  x: -100,
  opacity: 0,
  ease: Expo.easeInOut,
  duration: 1
})
gsap.from("#three", {
  scrollTrigger: {
    trigger: "#three",
    scroller: "#main",
    start: "top 70%",
  },
  x: 100,
  opacity: 0,
  ease: Expo.easeInOut,
  duration: 1
})
gsap.from("#four", {
  scrollTrigger: {
    trigger: "#four",
    scroller: "#main",
    start: "top 70%",
  },
  x: 100,
  opacity: 0,
  ease: Expo.easeInOut,
  duration: 1
})
// })
// document.querySelectorAll("#section2 #two")
// .forEach(function(elem){
//     gsap.from(elem,{
//         scrollTrigger:{
//             trigger:elem,
//             start:"top 80%",
//             markers:true
//         },
//         Y:300,
//         opacity:1,
//         ease:Expo.easeInOut,
//         duration:2
//     })
// })


var uname  = "Sarthak"
var abc = localStorage.setItem("Name",uname)
var lol = localStorage.getItem('uname')
console.log(lol)



