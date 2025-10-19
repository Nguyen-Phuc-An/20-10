// Page 4: Tricky Section
const secretBtn = document.getElementById('secretBtn');
const popup = document.getElementById('secretPopup');
const bgMusic = document.getElementById('bgMusic');

// Play music
bgMusic.volume = 0.3;
bgMusic.play().catch(() => {});

secretBtn.addEventListener('click', () => {
    popup.classList.add('show');
    createKissMarks();
});

function closePopup() {
    popup.classList.remove('show');
}

function createKissMarks() {
    const container = document.getElementById('kissContainer');
    const kisses = ['💋', '💕', '😘', '😚', '😙'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const kiss = document.createElement('div');
            kiss.className = 'kiss-emoji';
            kiss.textContent = kisses[Math.floor(Math.random() * kisses.length)];
            kiss.style.left = Math.random() * 100 + '%';
            kiss.style.animationDuration = (Math.random() * 2 + 2) + 's';
            container.appendChild(kiss);
            
            setTimeout(() => {
                kiss.remove();
            }, 4000);
        }, i * 100);
    }
}

function nextPage() {
    window.location.href = 'page5.html';
}

// Close popup when clicking outside
popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        closePopup();
    }
});