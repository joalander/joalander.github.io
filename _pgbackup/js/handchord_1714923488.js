document.addEventListener('DOMContentLoaded', function() {
  let scrollInterval;
  const playBtn = document.getElementById('play-btn');
  const restartBtn = document.getElementById('restart-btn');
  const scrollControlDiv = document.getElementById('scroll-control');
  
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
        scrollControlDiv.classList.add('transparent');
      } else {
        clearInterval(scrollInterval);
        playBtn.innerText = 'Play';
        scrollControlDiv.classList.remove('transparent');
      }
    }, 15);
  }
  
  function pauseScroll() {
    clearInterval(scrollInterval);
    playBtn.innerText = 'Play';
    scrollControlDiv.classList.remove('transparent');
  }
  
  function resumeScroll(duration) {
    scrollToBottom(duration);
    playBtn.innerText = 'Pause';
  }
  
  playBtn.addEventListener('click', function() {
    if (scrollInterval) {
      pauseScroll();
    } else {
      resumeScroll(1000); // Specify the duration to resume scrolling
    }
  });
  
  restartBtn.addEventListener('click', function() {
    pauseScroll();
    window.scrollTo(0, 0);
  });
  
  // Example usage: scroll to bottom with a duration of 1000 milliseconds (1 second)
  scrollToBottom(1000);
});