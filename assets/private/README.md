# 🔒 Hướng dẫn thêm ảnh/video riêng tư

## 📂 Cách thêm ảnh và video của bạn:

### Bước 1: Tạo thư mục và thêm file
1. Tạo thư mục `assets/private/` (đã tạo sẵn)
2. Thêm ảnh và video vào thư mục này:
   - `img1.jpg` - Ảnh 1
   - `img2.jpg` - Ảnh 2
   - `img3.jpg` - Ảnh 3
   - `video1.mp4` - Video
   - `video1-thumb.jpg` - Thumbnail cho video (ảnh đại diện)

### Bước 2: Đặt mật khẩu
Mở file `js/private.js` và thay đổi dòng:

```javascript
const CORRECT_PASSWORD = "191224"; // Thay bằng ngày yêu nhau của bạn
```

**Ví dụ:** 
- Nếu yêu nhau ngày 19/12/2024 → "191224"
- Nếu yêu nhau ngày 14/02/2025 → "140225"

### Bước 3: Thêm nhiều ảnh/video hơn (tùy chọn)

Mở file `js/private.js` và thêm vào mảng `privateMedia`:

```javascript
const privateMedia = [
    {
        type: 'image',
        src: 'assets/private/img1.jpg',
        caption: 'Khoảnh khắc ngọt ngào 💋'
    },
    {
        type: 'image',
        src: 'assets/private/img2.jpg',
        caption: 'Yêu em nhiều lắm 😘'
    },
    {
        type: 'video',
        src: 'assets/private/video1.mp4',
        caption: 'Video đáng nhớ 🎥'
    },
    {
        type: 'image',
        src: 'assets/private/img3.jpg',
        caption: 'Chỉ có em thôi 💞'
    },
    // Thêm nhiều ảnh/video ở đây
    {
        type: 'image',
        src: 'assets/private/img4.jpg',
        caption: 'Caption của bạn 💕'
    }
];
```

Sau đó thêm HTML tương ứng trong file `private.html`:

```html
<!-- Photo/Video Item 5 -->
<div class="private-item" onclick="openPrivateModal(4)">
    <div class="private-media">
        <img src="assets/private/img4.jpg" alt="Private moment 4">
        <div class="private-overlay">
            <span class="play-icon">👁️</span>
        </div>
    </div>
    <p class="private-caption">Caption của bạn 💕</p>
</div>
```

## 🔐 Bảo mật

- Mật khẩu chỉ lưu trong session (tắt tab = mất quyền truy cập)
- Chỉ có người biết mật khẩu mới xem được
- Nếu muốn bảo mật cao hơn, nên host trên server riêng

## 💡 Lưu ý

1. **Định dạng ảnh**: `.jpg`, `.jpeg`, `.png`, `.gif`
2. **Định dạng video**: `.mp4`, `.webm`, `.ogg`
3. **Kích thước**: 
   - Ảnh: Nên < 5MB/ảnh
   - Video: Nên < 50MB/video
4. **Tên file**: Không có dấu, khoảng trắng

## 🎯 Cách truy cập

Từ trang Gallery (page3.html), người yêu sẽ thấy nút:
```
🔒 Khoảnh khắc riêng tư...
```

Click vào → Nhập mật khẩu → Xem nội dung đặc biệt!

---

**Chúc bạn có những khoảnh khắc đẹp! 💕**