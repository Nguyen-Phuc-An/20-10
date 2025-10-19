// Page 5: Final Message (Invite for next Saturday)
function getNextSaturday(from = new Date()) {
    const d = new Date(from);
    const day = d.getDay(); // 0=CN ... 6=T7
    let delta = (6 - day + 7) % 7;
    if (delta === 0) delta = 7; // nếu hôm nay là T7, lấy T7 tuần sau
    d.setDate(d.getDate() + delta);
    return d;
}

function formatDateVN(date) {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
}

const nextSaturday = getNextSaturday();
const dateVN = formatDateVN(nextSaturday);

const finalMessage = `Hẹn hò nhỏ tuần sau nhé? 💌

Thứ Bảy, ngày ${dateVN}
- Thời gian: Cỡ trưa hoặc chiều nha
- Địa điểm: Em chọn nè (quán cà phê hoặc máy quạt máy lạnh...hehe)

Anh đã chuẩn bị một bất ngờ nhỏ cho em.
Đi chơi với anh nha? 😘`;

const finalText = document.getElementById('finalText');
const footerInfo = document.getElementById('footerInfo');
const bgMusic = document.getElementById('bgMusic');
let index = 0;

// Play music
bgMusic.volume = 0.3;
bgMusic.play().catch(() => {});

// Create sparkles background
createSparkles();

function typeWriter() {
    if (index < finalMessage.length) {
        finalText.textContent += finalMessage.charAt(index);
        index++;
        setTimeout(typeWriter, 80);
    } else {
        // Show footer after typing
        setTimeout(() => {
            footerInfo.classList.remove('hidden');
            footerInfo.classList.add('show');
        }, 1000);
    }
}

function createSparkles() {
    setInterval(() => {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 2 + 's';
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 3000);
    }, 200);
}

function restart() {
    window.location.href = 'index.html';
}

// Start typing
setTimeout(typeWriter, 500);