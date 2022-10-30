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



let clip1 = document.querySelector("#page2video1");
let div1 = document.querySelector("#p2b1");

// let over={
//   arrv:["#page2video1","#page2video2","#page2video3","#page2video4","#page2video5","#page2video6","#page2video7","#page2video8"],
// arrd:['#p2b1','#p2b2','#p2b3','#p2b14','#p2b5','#p2b6','#p2b7','#p2b8']
// }
const arr=[
  {objv:"#page2video1",objd:'#p2b1'},
  {objv:"#page2video2",objd:'#p2b2'},
  {objv:"#page2video3",objd:'#p2b3'},
  {objv:"#page2video4",objd:'#p2b4'},
  {objv:"#page2video5",objd:'#p2b5'},
  {objv:"#page2video6",objd:'#p2b6'},
  {objv:"#page2video7",objd:'#p2b7'},
  {objv:"#page2video8",objd:'#p2b8'}
]
// console.log(arr[1].objv);
// console.log(arr[1].objd);

// arr[1].objd.addEventListener("mouseover", function (e) {
//   arr[1].objv.play();
// })


arr.forEach(function(elem){
  document.querySelector(elem.objd).addEventListener("mouseover", function (e) {
    document.querySelector(elem.objv).play();
  })
  document.querySelector(elem.objd).addEventListener("mouseout", function (e) {
    document.querySelector(elem.objv).pause();
  })
    console.log(elem.objd);
})

// div1.addEventListener("mouseover", function (e) {
//   clip1.play();
// })

// div1.addEventListener("mouseout", function (e) {
//   clip1.pause();
// })


gsap.to('#page2btn',{
  scrollTrigger:{
      scroller:'#main',
      trigger:'.page2r',
      pin:'#page2btn',
      pinSpacing:false,
      // markers:true,
      start:"top 5%",
      end:"bottom 70%",

  }
})


gsap.to('#page3btn',{
  scrollTrigger:{
      scroller:'#main',
      trigger:'.page3right',
      pin:'#page3btn',
      pinSpacing:false,
      // markers:true,
      start:"top 5%",
      end:"bottom 70%",

  }
})

gsap.to('.pbbtn',{
  scrollTrigger:{
      scroller:'#main',
      trigger:'.pbd1r',
      pin:'.pbbtn',
      pinSpacing:false,
      // markers:true,
      start:"top 5%",
      end:"bottom 50%",

  }
})

gsap.to('.pbd3btn',{
  scrollTrigger:{
      scroller:'#main',
      trigger:'.pbd3r',
      pin:'.pbd3btn',
      pinSpacing:false,
      // markers:true,
      start:"top 5%",
      end:"bottom 50%",

  }
})