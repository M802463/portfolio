function smoothScrolling() {

  // Initialize Lenis
  const lenis = new Lenis();

  // Listen for the scroll event and log the event data
  lenis.on('scroll', (e) => {
    //   console.log(e);
  });

  // Use requestAnimationFrame to continuously update the scroll
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

}
smoothScrolling()


let main = document.querySelector("body");
let cursor = document.querySelector(".cursor");
let maincursor = document.querySelector(".main_cursor");

main.addEventListener("mouseenter", () => {
  gsap.to(cursor, {
    scale: 1
  })
})

main.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.x - 20,
    y: e.y - 20,
    ease: "power1.out",
    duration: .5
  })
})

main.addEventListener("mouseleave", () => {
  gsap.to(cursor, {
    scale: 0
  })
})

main.addEventListener("mouseenter", () => {
  gsap.to(maincursor, {
    scale: 1
  })
})

main.addEventListener("mousemove", (e) => {
  gsap.to(maincursor, {
    x: e.x - 4,
    y: e.y - 4,
    ease: "power1.out",
    duration: .2222
  })
})

main.addEventListener("mouseleave", () => {
  gsap.to(maincursor, {
    scale: 0
  })
})
