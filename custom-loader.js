document.addEventListener("DOMContentLoaded", function () {
  // Wait for the Lottie loader to appear
  const waitForLottie = setInterval(() => {
    const lottie = document.querySelector("lottie-player.lottie-main-loader");

    if (lottie) {
      // Swap to your custom Lottie animation
      lottie.setAttribute(
        "src",
        "https://lottie.host/66b06804-3766-4316-906d-7d89529f520b/KcjD8T5LMJ.lottie"
      );

      // Playback settings
      lottie.setAttribute("speed", "1");
      lottie.setAttribute("loop", "true");
      lottie.setAttribute("autoplay", "true");
      lottie.setAttribute("mode", "normal");

      // Optionally add styling (centered, responsive)
      lottie.style.width = "280px";
      lottie.style.height = "280px";
      lottie.style.margin = "100px auto";
      lottie.style.display = "block";

      clearInterval(waitForLottie);
    }
  }, 200);
});
