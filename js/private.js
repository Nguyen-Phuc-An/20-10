// Private Page JavaScript

// Mật khẩu (Đặt thành ngày yêu nhau: DDMMYY)
// Ví dụ: 19/12/2024 => "191224"
const CORRECT_PASSWORD = "191224"; // Thay bằng ngày của bạn

const passwordInput = document.getElementById('password-input');
const errorMessage = document.getElementById('error-message');
const passwordScreen = document.getElementById('password-screen');
const privateContent = document.getElementById('private-content');
const bgMusic = document.getElementById('bgMusic');

// Play music
bgMusic.volume = 0.3;

// Private media data
const privateMedia = [
    {
        type: 'image',
        src: 'img/86b8501057d1da8f83c06.jpg',
        caption: 'Khoảnh khắc ngọt ngào 💋'
    },
    {
        type: 'image',
        src: 'img/4effccb80f798227db6816.jpg',
        caption: 'Yêu em nhiều lắm 😘'
    },
    {
        type: 'video',
        src: 'img/29807498892507698203.mp4',
        caption: 'Video đáng nhớ 🎥'
    }
];

// Check password
function checkPassword() {
    const enteredPassword = passwordInput.value.trim();
    
    if (enteredPassword === CORRECT_PASSWORD) {
        // Correct password
        errorMessage.classList.add('hidden');
        passwordScreen.style.display = 'none';
        privateContent.classList.remove('hidden');
        privateContent.classList.add('show');
        
        // Play music
        bgMusic.play().catch(() => {});
        
        // Save login status (session only)
        sessionStorage.setItem('privateAccess', 'true');
    } else {
        // Wrong password
        errorMessage.classList.remove('hidden');
        passwordInput.value = '';
        passwordInput.focus();
        
        // Shake animation
        passwordInput.style.animation = 'shake 0.5s ease';
        setTimeout(() => {
            passwordInput.style.animation = '';
        }, 500);
    }
}

// Enter key to submit
passwordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkPassword();
    }
});

// Go back to previous page
function goBack() {
    window.history.back();
}

// Logout (lock again)
function logout() {
    sessionStorage.removeItem('privateAccess');
    privateContent.classList.remove('show');
    privateContent.classList.add('hidden');
    passwordScreen.style.display = 'flex';
    passwordInput.value = '';
    errorMessage.classList.add('hidden');
}

// Continue to next page
function continueTour() {
    window.location.href = 'page4.html';
}

// Open private modal
function openPrivateModal(index) {
    const modal = document.getElementById('private-modal');
    const modalMedia = document.getElementById('modal-media');
    const modalCaption = document.getElementById('modal-private-caption');
    const media = privateMedia[index];
    
    modal.classList.add('show');
    
    // Hiển thị đúng kích thước gốc (không cắt), giới hạn trong viewport
    modalMedia.style.width = '';
    modalMedia.style.height = '';
    modalMedia.innerHTML = '';

    if (media.type === 'image') {
        const img = document.createElement('img');
        img.src = media.src;
        img.alt = media.caption;
    img.style.maxWidth = '90vw';
    img.style.maxHeight = '80vh';
    img.style.width = 'auto';
    img.style.height = 'auto';
    img.style.objectFit = 'contain';
    img.style.display = 'block';
        img.onerror = () => {
            img.src = 'data:image/svg+xml,%3Csvg xmlns%3D%22http%3A//www.w3.org/2000/svg%22 viewBox%3D%220 0 800 800%22%3E%3Crect fill%3D%22%23ff9a9e%22 width%3D%22800%22 height%3D%22800%22/%3E%3Ctext x%3D%2250%25%22 y%3D%2250%25%22 font-size%3D%22100%22 text-anchor%3D%22middle%22 dy%3D%22.3em%22%3E%F0%9F%93%B7%3C/text%3E%3C/svg%3E';
        };
        modalMedia.appendChild(img);
    } else if (media.type === 'video') {
        const video = document.createElement('video');
        video.controls = true;
        video.playsInline = true;
        video.preload = 'metadata';
    video.autoplay = false; // không tự phát
        video.muted = false;
    video.style.maxWidth = '90vw';
    video.style.maxHeight = '80vh';
    video.style.width = 'auto';
    video.style.height = 'auto';
    video.style.objectFit = 'contain';
        const source = document.createElement('source');
        source.src = media.src;
        source.type = 'video/mp4';
        video.appendChild(source);
        modalMedia.appendChild(video);
    }
    
    modalCaption.textContent = media.caption;
}

// Close modal
function closePrivateModal() {
    const modal = document.getElementById('private-modal');
    modal.classList.remove('show');
    
    // Stop video if playing
    const video = modal.querySelector('video');
    if (video) {
        video.pause();
    }
}

// Close modal when clicking outside
document.getElementById('private-modal').addEventListener('click', (e) => {
    if (e.target.id === 'private-modal') {
        closePrivateModal();
    }
});

// Check if already logged in (in this session)
if (sessionStorage.getItem('privateAccess') === 'true') {
    passwordScreen.style.display = 'none';
    privateContent.classList.remove('hidden');
    privateContent.classList.add('show');
    bgMusic.play().catch(() => {});
}

// Focus on input when page loads
window.addEventListener('load', () => {
    if (passwordScreen.style.display !== 'none') {
        passwordInput.focus();
    }
});