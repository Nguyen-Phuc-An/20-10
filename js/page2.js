// Page 2: Typing Effect
const message = `Gửi cô gái dễ thương, có cá tính, biết làm nũng mà anh yêu thương nhất 💕

Cảm ơn bé vì đã ở bên anh suốt gần 1 năm — từ 19/12/2024 đến nay.

Chúc em 20/10 thật vui, thật xinh, và mãi là cô gái khiến anh say mê 😘

Yêu em ❤️`;

const typedText = document.getElementById('typed-text');
const nextBtn = document.getElementById('nextBtn');
const bgMusic = document.getElementById('bgMusic');
let index = 0;

// Play music
bgMusic.volume = 0.3;
bgMusic.play().catch(() => {});

function typeWriter() {
    if (index < message.length) {
        typedText.textContent += message.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
    } else {
        // Show hearts burst
        setTimeout(createHeartsBurst, 500);
        // Show next button
        setTimeout(() => {
            nextBtn.classList.remove('hidden');
        }, 2000);
    }
}

function createHeartsBurst() {
    const container = document.getElementById('hearts-burst');
    const hearts = ['❤️', '💕', '💖', '💗', '💓', '💝'];
    
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-burst';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        
        const angle = (Math.PI * 2 * i) / 30;
        const distance = 200;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        heart.style.setProperty('--x', x + 'px');
        heart.style.setProperty('--y', y + 'px');
        
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}

nextBtn.addEventListener('click', () => {
    window.location.href = 'page3.html';
});

// Start typing
setTimeout(typeWriter, 500);