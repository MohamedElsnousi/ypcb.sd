document.addEventListener("DOMContentLoaded", function() {
    const track = document.getElementById('logoTrack');
    
    // 1. Clone the internal HTML to create a seamless loop
    const trackContent = track.innerHTML;
    track.innerHTML = trackContent + trackContent; // Duplicate once for the loop
    
    // 2. Add the animation class after cloning
    track.classList.add('logo-track-animate');
    
    // Optional: Dynamic speed adjustment based on number of items
    const itemsCount = track.querySelectorAll('.slide-item').length;
    const duration = itemsCount * 3; // 3 seconds per item for smooth speed
    track.style.animationDuration = `${duration}s`;
});