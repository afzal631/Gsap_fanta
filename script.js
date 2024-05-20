var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "0% 97%", //first value is for .two divs/pages fix position , second value is browsers fix position
    //first value is for .two divs/pages fix position , second value is browsers fix position
    end: "70% 60%",
    scrub: true,
    // markers: true,
  },
});

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".three",
    start: "0% 95%",
    end: "40% 50%",
    scrub: true,
    // markers: true,
  },
});

tl.to(
  "#fanta",
  {
    top: "127%",
    left: "3%",
    // rotateY:"90deg"
  },
  "orange"
); //this dependency will make sure that all the animation of particular timeline will work together at same time
tl.to(
  "#orange-cut",
  {
    top: "160%",
    left: "23%",
  },
  "orange"
);
tl.to(
  "#orange",
  {
    width: "15%",
    top: "170%",
    right: "10%",
  },
  "orange"
);
tl.to(
  "#leaf",
  {
    top: "110%",
    rotate: "130deg",
    left: "70%",
  },
  "orange"
);
tl.to(
  "#leaf2",
  {
    top: "110%",
    rotate: "130deg",
    left: "0%",
  },
  "orange"
);

tl2.from(".lemon1",{
    rotate: "-90deg",
    left: "-100%",
    top: "110%"
}, 'ca')
tl2.from("#cocacola",{
    rotate: "-90deg",
    top: "110%",
    left: "-100%",
}, 'ca')

tl2.from(".lemon2",{
    rotate: "90deg",
    left: "100%",
    top: "110%"
}, 'ca')
tl2.from("#pepsi",{
    rotate: "90deg",
    top: "110%",
    left: "100%",
}, 'ca')

tl2.to("#orange-cut",{
    width:"18%",
    left: "42%",
    top: "204%"
}, 'ca')
tl2.to("#fanta",{
    width:"35%",
    top: "210%",
    left: "33%",
}, 'ca')
