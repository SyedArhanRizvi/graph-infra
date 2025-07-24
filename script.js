const videoElement = document.getElementById("hero-video");
const sourceElement = document.getElementById("video-source");

const getVideoSrc = (width) => {
  if (width <= 425) return "./images/mobilescreen.mp4";
  if (width <= 1024) return "./images/graph-website-video-tablet.mp4";
  return "./images/graph-website-video-desktop.mp4";
};

const closeBtn = document.getElementById("close-btn");

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
});

//  lucide.createIcons();
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const navbar = document.getElementById("navbar");
let lastScrollTop = 0;

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop === 0) {
    navbar.classList.remove("bg-[linear-gradient(90deg,_rgba(21,18,72,1)_100%,_rgba(51,44,174,0.2)_100%)]");
    navbar.classList.add("bg-transparent", "py-1");
  } else if (scrollTop > lastScrollTop) {
    navbar.classList.remove("bg-transparent");
    navbar.classList.add("bg-[linear-gradient(90deg,_rgba(21,18,72,1)_100%,_rgba(51,44,174,0.2)_100%)]");
  } else {
    navbar.classList.remove("bg-transparent");
    navbar.classList.add("bg-[linear-gradient(90deg,_rgba(21,18,72,1)_100%,_rgba(51,44,174,0.2)_100%)]");
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

const container = document.getElementById("carouselContainer");

function scrollCarousel(direction) {
  const screenWidth = window.innerWidth;
  const card = container.querySelector(".card");
  const cardWidth = card.offsetWidth + 32;
  const cardsToScroll = screenWidth >= 1024 ? 2 : 1;
  const scrollAmount = cardWidth * cardsToScroll;

  container.scrollBy({
  left: direction === "left" ? -scrollAmount : scrollAmount,
  behavior: "smooth",
  });
}

let currentVideoSrc = "";

function setResponsiveVideo() {
  const screenWidth = window.innerWidth;
  const desiredSrc = getVideoSrc(screenWidth);

  if (currentVideoSrc === desiredSrc) return;

  sourceElement.src = desiredSrc;
  videoElement.load();
  currentVideoSrc = desiredSrc;
}

setResponsiveVideo();

let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(setResponsiveVideo, 200);
});

gsap.registerPlugin(ScrollTrigger);
function section1Anime() {
  const h1 = document.querySelector(".s2H1");
  const paraNodes = document.querySelectorAll(".s2PNode p");
  if (!h1) {
    console.error("Element .s2H1 not found");
    return;
  }

  gsap.from(h1, {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: h1,
      scroller: "body",
      start: "top 70%",
      end: "top 20%",
      // scrub: true,
      // markers: true,
    },
  });

  paraNodes.forEach((ele) => {
    gsap.from(ele, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ele,
        scroller: "body",
        start: "top 70%",
        end: "top 20%",
        // scrub: true,
        // markers: true,
      },
    });
  });

  gsap.from(".s2Img", {
    x: -100,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: ".s2Img",
      scroller: "body",
      // markers:true,
      start: "top 75%",
      end: "top 20%",
      scrub: 1,
    },
  });
  // const s2BtmH1 = document.querySelector(".s2BtmH1");

  // const words = s2BtmH1.textContent.trim().split(" ");
  // s2BtmH1.innerHTML = "";

  // words.forEach((word, index) => {
  //   const span = document.createElement("span");
  //   span.textContent = word + " ";
  //   span.style.display = "inline-block";
  //   span.style.opacity = "0";
  //   s2BtmH1.appendChild(span);
  //   span.style.marginRight = "10px";

  //   gsap.to(span, {
  //     opacity: 1,
  //     scale: 1,
  //     y: 0,
  //     duration: 0.8,
  //     delay: index * 0.1,
  //     ease: "power2.out",
  //     scrollTrigger: {
  //       trigger: span,
  //       scroller: "body",
  //       start: "top 55%",
  //       // markers: true,
  //     },
  //   });

  //   gsap.set(span, {
  //     scale: 0.8,
  //     y: 20,
  //   });
  // });

  const paraNodes2 = document.querySelectorAll(".s2BtmD p");

  paraNodes2.forEach((ele) => {
    gsap.from(ele, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ele,
        scroller: "body",
        start: "top 70%",
        end: "top 20%",
        // scrub: true,
        // markers: true,
      },
    });
  });
}

section1Anime();

function changeImg() {
  const screenWidth = window.innerWidth;
  let img = document.querySelector(".simgD img");
  if (screenWidth <= 1024) {
    img.src = "./images/mbsc.png"
  } else {
    img.src = "./images/s2Img.png";
  }
}


changeImg();

window.addEventListener("resize", ()=>{
  changeImg();
})
