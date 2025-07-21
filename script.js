 const videoElement = document.getElementById("hero-video");
  const sourceElement = document.getElementById("video-source");

  const getVideoSrc = (width) => {
    if (width <= 425) return "./images/mobilescreen.mp4";
    if (width <= 1024) return "./images/graph-website-video-tablet.mp4";
    return "./images/graph-website-video-desktop.mp4";
  };

  let currentVideoSrc = "";

  function setResponsiveVideo() {
    const screenWidth = window.innerWidth;
    const desiredSrc = getVideoSrc(screenWidth);

    // Avoid reloading same video again and again
    if (currentVideoSrc === desiredSrc) return;

    // Update video src
    sourceElement.src = desiredSrc;
    videoElement.load();
    currentVideoSrc = desiredSrc;
  }

  // Initial load
  setResponsiveVideo();

  // Resize optimization using debounce
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(setResponsiveVideo, 200);
  });