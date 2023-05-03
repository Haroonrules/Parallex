const image = document.getElementById("myImage");
const image2 = document.getElementById("myImage2");
const image3 = document.getElementById("myImage3");
const image4 = document.getElementById("myImage4");
var video = document.getElementById("bg-video");
var videoContainer = document.getElementById("video-container");
// const boatContainer = document.querySelector(".boat-container");
// const boat = document.querySelector(".boat");
gsap.registerPlugin(ScrollTrigger);

let currentImage = 1;
let currentImage2 = 1;
let currentImage3 = 1;
let currentImage4 = 1;
const tl = gsap.timeline();

// videoContainer.addEventListener("mouseenter", () => {
//   gsap.to(boat, {
//     opacity: 0,
//     duration: 0.5,
//     ease: "power2.inOut",
//     zIndex: 1,
//   });
// });

// videoContainer.addEventListener("mouseleave", () => {
//   gsap.to(boat, {
//     opacity: 1,
//     duration: 0.5,
//     ease: "power2.inOut",
//     zIndex: -1,
//   });
// });

video.addEventListener("ended", function () {
  video.style.display = "none";
  videoContainer.style.display = "none";

  let sections = gsap.utils.toArray(".panel");
  let startImg = document.getElementById("first-img");
  let curtain = document.getElementById("curtain");

  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".container",
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
      end: () => "+=" + document.querySelector(".container").offsetWidth,
    },
  });
  const tl = gsap.timeline();

  tl.to(curtain, {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    duration: 0.8,
    ease: Power4.easeOut,
  }).fromTo(
    startImg,
    {
      ease: Power4.easeIn,
      delay: -0.5,
      scale: 1.2,
      duration: 0.5,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 0.5,
    }
  );
});

function changeImageSrc() {
  if (currentImage === 1) {
    image.src = "./assets/BGR_LABmain.jpg";
    currentImage = 2;
  } else {
    image.src = "/landscape/1.png";
    currentImage = 1;
  }
}

function changeImageSrc2() {
  if (currentImage2 === 1) {
    image2.src = "./assets/Ice-cave-bgr_boat.jpg";
    currentImage2 = 2;
  } else {
    image2.src = "/landscape/2.png";
    currentImage2 = 1;
  }
}

function changeImageSrc3() {
  if (currentImage3 === 1) {
    image3.src = "./assets/BGR_04_boatRight.jpg";
    currentImage3 = 2;
  } else {
    image3.src = "/landscape/3.png";
    currentImage3 = 1;
  }
}
function changeImageSrc4() {
  if (currentImage4 === 1) {
    image4.src = "./assets/BGR_05_boatLeft.jpg";
    currentImage4 = 2;
  } else {
    image4.src = "/landscape/4.png";
    currentImage4 = 1;
  }
}

function animateImage() {
  gsap.fromTo(
    image,
    {
      ease: Power4.easeIn,
      opacity: 0.5,
      scale: 1.2,
      duration: 1,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
    }
  );
}

function animateImage2() {
  gsap.fromTo(
    image2,
    {
      ease: Power4.easeIn,
      opacity: 0.5,
      scale: 1.2,
      duration: 1,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
    }
  );
}

function animateImage3() {
  gsap.fromTo(
    image3,
    {
      ease: Power4.easeIn,
      opacity: 0.5,
      scale: 1.2,
      duration: 1,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
    }
  );
}

function animateImage4() {
  gsap.fromTo(
    image4,
    {
      ease: Power4.easeIn,
      opacity: 0.5,
      scale: 1.2,
      duration: 1,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
    }
  );
}

image.addEventListener("click", () => {
  changeImageSrc();
  animateImage();
});

image2.addEventListener("click", () => {
  changeImageSrc2();
  animateImage2();
});

image3.addEventListener("click", () => {
  changeImageSrc3();
  animateImage3();
});

image4.addEventListener("click", () => {
  changeImageSrc4();
  animateImage4();
});
