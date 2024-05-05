document.addEventListener('DOMContentLoaded', function() {
  let scrollInterval;
  
  function scrollToBottom(duration) {
    const scrollHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollStep = Math.PI / (duration / 15);
    let count = 0;
    let scrollPosition = 0;
  
    scrollInterval = setInterval(() => {
      if (window.scrollY !== scrollHeight - windowHeight) {
        count += 1;
        scrollPosition = scrollHeight - (scrollHeight - windowHeight) * Math.cos(count * scrollStep);
        window.scrollTo(0, scrollPosition);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  }
  
  function pauseScroll() {
    clearInterval(scrollInterval);
  }
  
  function resumeScroll(duration) {
    scrollToBottom(duration);
  }
  
  // Example usage: scroll to bottom with a duration of 1000 milliseconds (1 second)
  scrollToBottom(240000);
  
  // Add event listener for touchstart to pause scrolling on touch devices
  document.addEventListener('touchstart', function() {
    pauseScroll();
  });
  
  // Add event listener for touchend to resume scrolling on touch devices
  document.addEventListener('touchend', function() {
    resumeScroll(240000); // Specify the duration to resume scrolling
  });
  
  // Add event listener for keydown to detect spacebar on laptops and compatible devices
  document.addEventListener('keydown', function(event) {
    if (event.code === 'Space' || event.code === 'Spacebar') {
      if (scrollInterval) {
        pauseScroll();
      } else {
        resumeScroll(1000); // Specify the duration to resume scrolling
      }
      event.preventDefault();
    }
  });
});