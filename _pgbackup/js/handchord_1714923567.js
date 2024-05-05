document.addEventListener('DOMContentLoaded', function() {
  function scrollToBottom(duration) {
    const scrollHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollStep = Math.PI / (duration / 15);
    let count = 0;
    let scrollPosition = 0;
  
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== scrollHeight - windowHeight) {
        count += 1;
        scrollPosition = scrollHeight - (scrollHeight - windowHeight) * Math.cos(count * scrollStep);
        window.scrollTo(0, scrollPosition);
      } else {
        clearInterval(scrollInterval);
      }
    }, 300000);
  }
  
  // Example usage: scroll to bottom with a duration of 1000 milliseconds (1 second)
  scrollToBottom(240000);
});