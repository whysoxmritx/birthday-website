const yesBtn = document.getElementById("yes");
const msg = document.getElementById("message");
const nextBtnContainer = document.getElementById("next");
const stickerVideo = document.getElementById("sticker-video");

let videoShown = false; // Ensure video only appears once

yesBtn.addEventListener("mouseover", () => {
  const container = document.getElementById("button-container");
  const areaRect = container.getBoundingClientRect();
  const maxX = areaRect.width - yesBtn.clientWidth - 20;
  const maxY = areaRect.height - yesBtn.clientHeight - 20;

  // Move Yes button randomly
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;
  yesBtn.style.position = "absolute";
  yesBtn.style.left = `${x}px`;
  yesBtn.style.top = `${y}px`;

  // Show message & "Will See" button
  msg.style.display = "block";
  nextBtnContainer.style.display = "block";

  // Show video **next to the message**, only once
  if (!videoShown) {
    stickerVideo.style.display = "block";

    // Get message position
    const msgRect = msg.getBoundingClientRect();
    stickerVideo.style.position = "absolute";
    stickerVideo.style.left = `${msgRect.right + 10}px`; // 10px to the right of message
    stickerVideo.style.top = `${msgRect.top}px`;          // Align top with message
    videoShown = true;
  }
});

yesBtn.addEventListener("mouseout", () => {
  // Video stays visible even after mouse leaves
});
const willSeeBtn = document.getElementById("will_see");
willSeeBtn.addEventListener("click", () => {
  window.location.href = "will_see.html";
});
// Get the "No" button element
const noButton = document.getElementById('no');

// Add a click event listener to the "No" button
noButton.addEventListener('click', () => {
    // Navigate the user to the no.html page
    window.location.href = 'no.html';
});