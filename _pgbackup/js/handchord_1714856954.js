function scrollToBottom() {
  var position = 0;
  var scrollDuration = 24000000; // Adjust this value to set the scroll duration in milliseconds
  var startTime = null;

  function scrollStep(timestamp) {
    if (!startTime) {
      startTime = timestamp;
    }

    var progress = timestamp - startTime;
    var scrollDistance = document.documentElement.scrollHeight - window.innerHeight;
    var scrollY = Math.easeInOutCubic(progress, 0, scrollDistance, scrollDuration);
    window.scrollTo(0, scrollY);

    if (progress < scrollDuration) {
      window.requestAnimationFrame(scrollStep);
    }
  }

  window.requestAnimationFrame(scrollStep);
}

// Easing function
Math.easeInOutCubic = function (t, b, c, d) {
  if (d === 0) return b;
  t /= d / 2;
  if (t < 1) return c / 2 * t * t * t + b;
  t -= 2;
  return c / 2 * (t * t * t + 2) + b;
};

scrollToBottom();