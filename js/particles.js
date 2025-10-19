// Particles background effect
function createParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;
    
    const particles = ['❤️', '💕', '💖', '💗', '💓', '💝', '🌸', '🌺', '🌷', '🌹'];
    
    setInterval(() => {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.textContent = particles[Math.floor(Math.random() * particles.length)];
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 3 + 4) + 's';
        particle.style.fontSize = (Math.random() * 15 + 15) + 'px';
        container.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 7000);
    }, 400);
}

// Initialize particles on page load
document.addEventListener('DOMContentLoaded', createParticles);