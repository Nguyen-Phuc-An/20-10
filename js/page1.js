// Page 1: Gift Box Opening
const giftBox = document.getElementById('giftBox');
const bgMusic = document.getElementById('bgMusic');

// Try to play music (may be blocked by browser)
bgMusic.volume = 0.3;
bgMusic.play().catch(() => {
    console.log('Music autoplay blocked. Will play on user interaction.');
});

giftBox.addEventListener('click', function() {
    // Play music on interaction
    bgMusic.play().catch(() => {});
    
    // Open gift box
    giftBox.classList.add('open');
    
    // Create confetti explosion
    createConfetti();
    
    // Redirect to page 2 after animation
    setTimeout(() => {
        window.location.href = 'page2.html';
    }, 2000);
});

function createConfetti() {
    const colors = ['#ff6fa8', '#ffb347', '#a78bfa', '#fbbf24', '#34d399', '#f472b6'];
    const container = document.body;
    
    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = '50%';
        confetti.style.top = '50%';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.setProperty('--x', (Math.random() - 0.5) * 1000 + 'px');
        confetti.style.setProperty('--y', (Math.random() - 0.5) * 1000 + 'px');
        confetti.style.animationDuration = (Math.random() * 2 + 1) + 's';
        
        container.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}