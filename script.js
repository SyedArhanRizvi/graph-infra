    function improveResponsive(e) {
      if (e <= 1024 && e > 425) {
        document.querySelector('video').src = "./images/graph-website-video-tablet.mp4";
      } else if (e < 425) {
        document.querySelector('video').src = "./images/mobilescreen.mp4";
      } else {
        document.querySelector('video').src = "./images/graph-website-video-desktop.mp4";
      }
    }

    window.addEventListener("resize", (e) => {
      improveResponsive(e.target.innerWidth);
    });

    improveResponsive(window.innerWidth);

