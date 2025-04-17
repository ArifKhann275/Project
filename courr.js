
  function toggleLectures(sectionNumber) {
    const section = document.getElementById(`section-${sectionNumber}`);
    section.style.display = section.style.display === "block" ? "none" : "block";
  }

  function toggleVideo(lectureElement) {
    const video = lectureElement.querySelector(".video-container");
    if (video) {
      video.style.display = video.style.display === "block" ? "none" : "block";
    }
  }


  let isVideoVisible = false;

  function toggleVideo() {
    const videoContainer = document.getElementById("video-container");
    const button = document.querySelector("button");

    if (isVideoVisible) {
      videoContainer.style.display = "none";
      button.textContent = "Show Video";
    } else {
      videoContainer.style.display = "block";
      button.textContent = "Hide Video";
    }

    isVideoVisible = !isVideoVisible;
  }

