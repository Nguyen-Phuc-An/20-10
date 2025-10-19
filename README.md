# 💖 20/10 - Hộp Quà Tình Yêu

## 🌸 Giới thiệu
Website tặng người yêu nhân dịp 20/10 - Được thiết kế như một hành trình mở quà với 5 trang riêng biệt, mỗi trang là một lớp cảm xúc.

## ✨ Cấu trúc 5 trang

### 📄 Trang 1: Màn chào mở quà (`index.html`)
- Hộp quà 3D với hiệu ứng rung khi hover
- Trái tim và hoa rơi nền
- Click vào hộp quà → Pháo giấy nổ → Chuyển trang

### 💌 Trang 2: Lời chúc ngọt ngào (`page2.html`)
- Hiệu ứng typing text từng chữ
- Thiệp trắng thanh lịch
- Trái tim bùng nổ khi kết thúc
- Nút "Tiếp tục" xuất hiện

### 📸 Trang 3: Bộ sưu tập kỷ niệm (`page3.html`)
- Gallery ảnh dạng polaroid
- Ảnh nghiêng tạo cảm giác tự nhiên
- Click ảnh để phóng to
- Trái tim xuất hiện khi hover
- **Lưu ý**: Thay thế ảnh mẫu bằng ảnh thật của bạn

### 😜 Trang 4: Góc tinh nghịch (`page4.html`)
- Nút bí mật "Đừng bấm vào đây nha 😏"
- Popup vui nhộn khi click
- Hiệu ứng nụ hôn rơi xuống 💋

### 🌠 Trang 5: Kết thúc cảm động (`page5.html`)
- Nền tối với sao lấp lánh
- Lời nhắn cuối cùng typing
- Nút "Xem lại từ đầu"

## 🎨 Thiết kế

**Màu sắc:**
- Trang 1: Hồng pastel
- Trang 2: Hồng nhạt
- Trang 3: Vàng kem - hồng
- Trang 4: Tím - xanh gradient
- Trang 5: Tím đậm (nền đêm)

**Font chữ:**
- `Dancing Script` - Tiêu đề lãng mạn
- `Poppins` - Nút và UI
- `Quicksand` - Nội dung chính

## 🚀 Cách sử dụng

### Bước 1: Mở file
```bash
# Mở index.html bằng trình duyệt
# Hoặc dùng Live Server trong VS Code
```

### Bước 2: Thêm ảnh của bạn (tùy chọn)
1. Tạo thư mục `assets/images/`
2. Thêm 4 tấm ảnh vào
3. Sửa file `page3.html`:
```javascript
// Trong js/page3.js, thay đổi phần photos
{
    caption: "Lần đầu mình đi chơi �",
    image: "assets/images/photo1.jpg"  // Thay gradient bằng image
}
```

### Bước 3: Thêm nhạc nền (tùy chọn)
1. Tải file nhạc `.mp3` vào `assets/music.mp3`
2. File đã có sẵn thẻ `<audio>` trong mỗi trang

## 📁 Cấu trúc thư mục

```
chuc20_10/
├── index.html          (Trang 1 - Mở quà)
├── page2.html          (Trang 2 - Lời chúc)
├── page3.html          (Trang 3 - Gallery)
├── page4.html          (Trang 4 - Tinh nghịch)
├── page5.html          (Trang 5 - Kết thúc)
├── css/
│   ├── style.css       (Style chung)
│   ├── page2.css       (Style trang 2)
│   ├── page3.css       (Style trang 3)
│   ├── page4.css       (Style trang 4)
│   └── page5.css       (Style trang 5)
├── js/
│   ├── particles.js    (Hiệu ứng nền)
│   ├── page1.js        (Logic trang 1)
│   ├── page2.js        (Logic trang 2)
│   ├── page3.js        (Logic trang 3)
│   ├── page4.js        (Logic trang 4)
│   └── page5.js        (Logic trang 5)
├── assets/             (Tạo thư mục này nếu muốn thêm ảnh/nhạc)
│   ├── images/         (Ảnh của bạn)
│   └── music.mp3       (Nhạc nền)
└── README.md
```

## 🎯 Tùy chỉnh

### Thay đổi lời chúc
Sửa trong file `js/page2.js`:
```javascript
const message = `Nội dung mới của bạn...`;
```

### Thay đổi timeline
Sửa trực tiếp trong file `page2.html` hoặc `js/page2.js`

### Thay đổi màu sắc
Sửa trong các file CSS tương ứng

### Thay đổi tốc độ typing
```javascript
// Trong page2.js và page5.js
setTimeout(typeWriter, 50);  // Số càng nhỏ, typing càng nhanh
```

## 💡 Tips

1. **Test trên nhiều trình duyệt**: Chrome, Firefox, Safari
2. **Responsive**: Đã tối ưu cho mobile
3. **Nhạc nền**: Có thể bị chặn autoplay, cần click để phát
4. **Ảnh**: Nên dùng ảnh có kích thước 500x500px trở lên
5. **Hosting**: Có thể host miễn phí trên GitHub Pages, Netlify, hoặc Vercel

## 🌟 Tính năng đặc biệt

✅ Animation mượt mà
✅ Hiệu ứng typing text
✅ Pháo giấy và confetti
✅ Gallery ảnh polaroid
✅ Popup bí mật tinh nghịch
✅ Responsive trên mọi thiết bị
✅ Không cần thư viện bên ngoài (thuần HTML/CSS/JS)

## ❤️ Made with Love

```
From: Anh Yêu Dấu
To: Cô gái dễ thương nhất
Date: 20/10/2025
With: 💻 + ❤️
```

---

**Chúc bạn và người yêu có một ngày 20/10 thật ngọt ngào! 🥰�**