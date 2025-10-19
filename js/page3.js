// Page 3: Media Gallery (5 portrait videos + 1 portrait image)
const bgMusic = document.getElementById('bgMusic');
const modal = document.getElementById('photoModal');
const modalPhoto = document.getElementById('modalPhoto');
const modalCaption = document.getElementById('modalCaption');

// Play music
bgMusic.volume = 0.3;
bgMusic.play().catch(() => {});

// Provide your real file paths under assets/gallery/
const mediaList = [
    { type: 'video', src: 'img/12344987967677376305.mp4', caption: 'Khoảnh khắc 1 🎬' },
    { type: 'video', src: 'img/12402497028579159522.mp4', caption: 'Khoảnh khắc 2 🎬' },
    { type: 'video', src: 'img/1707880835491619579.mp4', caption: 'Khoảnh khắc 3 🎬' },
    { type: 'video', src: 'img/45910378853799757404.mp4', caption: 'Khoảnh khắc 4 🎬' },
    { type: 'video', src: 'img/81709956560010319711.mp4', caption: 'Khoảnh khắc 5 🎬' },
    { type: 'image', src: 'img/86b8501057d1da8f83c06.jpg', caption: 'Tấm hình em xinh 💞' },
];

function openModal(index) {
    const item = mediaList[index];
    modal.classList.add('show');
    
    // Enforce portrait container for modal
    modalPhoto.style.background = 'none';
    modalPhoto.innerHTML = '';
    
    if (item.type === 'video') {
        // // Build video element without poster
        const video = document.createElement('video');
        video.controls = true;
        video.playsInline = true;
        video.preload = 'metadata';
        video.style.width = 'auto';
        video.style.height = '90vh';
        video.style.maxWidth = '90vw';
        video.style.objectFit = 'contain';

        const source = document.createElement('source');
        source.src = item.src;
        source.type = 'video/mp4';
        video.appendChild(source);

        // Friendly error fallback
        video.addEventListener('error', () => {
            modalPhoto.innerHTML = `
                <div style="color:#fff; text-align:center; max-width: 80vw;">
                    <p>Không mở được video này.</p>
                    <p>Kiểm tra lại đường dẫn hoặc định dạng (khuyến nghị: MP4 H.264 + AAC).</p>
                    <p><small>Đường dẫn hiện tại: ${item.src}</small></p>
                </div>
            `;
        }, { once: true });

        video.addEventListener('loadedmetadata', () => {
            const isPortrait = video.videoHeight >= video.videoWidth;
            if (isPortrait) {
                video.style.width = 'auto';
                video.style.height = '90vh';
            } else {
                // Landscape fallback
                video.style.width = '90vw';
                video.style.height = 'auto';
            }
        });

        modalPhoto.appendChild(video);
    } else {
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.caption;
        img.style.maxWidth = '90vw';
        img.style.maxHeight = '90vh';
        img.style.objectFit = 'contain';
        img.onload = () => {
            const isPortrait = img.naturalHeight >= img.naturalWidth;
            if (isPortrait) {
                img.style.width = 'auto';
                img.style.height = '90vh';
            } else {
                img.style.width = '90vw';
                img.style.height = 'auto';
            }
        };
        img.onerror = () => {
            modalPhoto.innerHTML = `
                <div style="color:#fff; text-align:center; max-width: 80vw;">
                    <p>Không mở được ảnh này.</p>
                    <p><small>Đường dẫn hiện tại: ${item.src}</small></p>
                </div>
            `;
        };
        modalPhoto.appendChild(img);
    }
    modalCaption.textContent = item.caption;
}

function closeModal() {
    modal.classList.remove('show');
}

function nextPage() {
    window.location.href = 'page4.html';
}

function goToPrivate() {
    window.location.href = 'private.html';
}

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});