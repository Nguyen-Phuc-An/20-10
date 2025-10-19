// Lời chúc
const letterMessage = `Bé à,
Hôm nay là 20/10 — ngày của con gái đó.
Anh không giỏi nói lời hoa mỹ,
Nên anh làm cái web nhỏ này tặng em.
Cảm ơn bé vì đã luôn dễ thương, biết làm nũng, và chịu đựng anh gần 1 năm nay 😆
Chúc bé luôn xinh, luôn vui, và mãi là cô gái khiến anh mê mệt 💕`;

let typingIndex = 0;
let typingSpeed = 40; // Nhanh hơn một chút

// Tạo trái tim rơi
function createHearts() {
    const container = document.querySelector('.hearts-container');
    const hearts = ['❤️', '💕', '💖', '💗', '💓', '💝'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
        heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 7000);
    }, 300);
}

// Tạo bong bóng
function createBubbles() {
    const container = document.querySelector('.bubbles-container');
    
    setInterval(() => {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        const size = Math.random() * 60 + 20;
        bubble.style.width = size + 'px';
        bubble.style.height = size + 'px';
        bubble.style.left = Math.random() * 100 + '%';
        bubble.style.animationDuration = (Math.random() * 4 + 5) + 's';
        container.appendChild(bubble);
        
        setTimeout(() => {
            bubble.remove();
        }, 9000);
    }, 500);
}

// Chuyển sang trang lời chúc
function goToLetter() {
    const welcomeScreen = document.getElementById('welcome-screen');
    const letterScreen = document.getElementById('letter-screen');
    
    welcomeScreen.classList.remove('active');
    
    setTimeout(() => {
        letterScreen.classList.add('active');
        createBubbles();
        startTyping();
    }, 800);
}

// Hiệu ứng typing
function startTyping() {
    const textElement = document.getElementById('typing-text');
    const giftBtn = document.getElementById('gift-btn');
    
    function type() {
        if (typingIndex < letterMessage.length) {
            textElement.textContent += letterMessage.charAt(typingIndex);
            typingIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(() => {
                giftBtn.classList.remove('hidden');
                giftBtn.style.animation = 'fadeInUp 0.8s ease';
            }, 500);
        }
    }
    
    type();
}

// Hiển thị pháo giấy và thông điệp
function showSurprise() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    const footer = document.getElementById('footer');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Hiển thị lời yêu thương
    alert('Yêu bé 3000 💞');
    
    // Tạo pháo giấy
    const confetti = [];
    const confettiCount = 300;
    const colors = ['#ff6fa8', '#ffb347', '#a78bfa', '#fbbf24', '#34d399', '#f472b6'];
    
    class Confetto {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height - canvas.height;
            this.size = Math.random() * 10 + 5;
            this.speedY = Math.random() * 3 + 2;
            this.speedX = Math.random() * 2 - 1;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.rotation = Math.random() * 360;
            this.rotationSpeed = Math.random() * 10 - 5;
        }
        
        update() {
            this.y += this.speedY;
            this.x += this.speedX;
            this.rotation += this.rotationSpeed;
            
            if (this.y > canvas.height) {
                this.y = -10;
                this.x = Math.random() * canvas.width;
            }
        }
        
        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation * Math.PI / 180);
            ctx.fillStyle = this.color;
            ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
            ctx.restore();
        }
    }
    
    for (let i = 0; i < confettiCount; i++) {
        confetti.push(new Confetto());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        confetti.forEach(c => {
            c.update();
            c.draw();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    // Hiển thị footer
    setTimeout(() => {
        footer.classList.remove('hidden');
        footer.classList.add('show');
    }, 1000);
    
    // Dừng pháo giấy sau 10 giây
    setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, 10000);
}

// Hiển thị popup bí mật
function showSecret() {
    const popup = document.getElementById('secret-popup');
    popup.classList.remove('hidden');
    setTimeout(() => {
        popup.classList.add('show');
    }, 10);
    
    // Phát âm thanh (nếu có)
    playSound();
}

// Đóng popup
function closeSecret() {
    const popup = document.getElementById('secret-popup');
    popup.classList.remove('show');
    setTimeout(() => {
        popup.classList.add('hidden');
    }, 300);
}

// Âm thanh (tùy chọn - có thể thêm file âm thanh)
function playSound() {
    // Có thể thêm:
    // const audio = new Audio('pop-sound.mp3');
    // audio.play();
}

// Khởi tạo
document.addEventListener('DOMContentLoaded', () => {
    createHearts();
});

// Responsive canvas
window.addEventListener('resize', () => {
    const canvas = document.getElementById('confetti-canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});