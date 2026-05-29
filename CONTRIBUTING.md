# 🤝 Hướng Dẫn Đóng Góp (Contributing Guidelines)

Cảm ơn bạn đã quan tâm đến việc đóng góp cho dự án **NguyenNgocAnhTu Premium Unlocker**! 

Dự án này là mã nguồn mở và được duy trì bởi cộng đồng. Sự đóng góp của bạn (dù là báo lỗi, đề xuất tính năng, hay gửi mã nguồn) đều cực kỳ quý giá giúp dự án ngày càng hoàn thiện hơn.

---

## 🛠️ Làm thế nào để đóng góp?

### 1. 🐞 Báo cáo Lỗi (Report a Bug)
Nếu bạn gặp vấn đề với bất kỳ script, rule, hoặc cấu hình nào không hoạt động, hãy tạo một Issue mới.
- Vui lòng kiểm tra danh sách [Issues](https://github.com/ekaznyra/NguyenNgocAnhTu/issues) xem lỗi của bạn đã có người báo cáo chưa.
- Cung cấp rõ ràng: Ứng dụng bị lỗi (kèm version), Proxy Client đang dùng (Shadowrocket, Surge, v.v.), và mô tả chi tiết lỗi.

### 2. 💡 Đề xuất Ứng Dụng/Tính Năng Mới (Feature Request)
Bạn muốn thêm script để mở khoá một ứng dụng mới?
- Mở một Issue mới với tiêu đề `[Request] Tên Ứng Dụng`.
- Đừng quên đính kèm link App Store của ứng dụng đó.

### 3. 💻 Gửi Mã Nguồn (Pull Requests)
Nếu bạn có khả năng viết script (Javascript) hoặc cấu hình (Surge, QX, Loon, Stash), rất hoan nghênh bạn gửi PR:
1. **Fork** dự án này về tài khoản của bạn.
2. Cập nhật mã nguồn hoặc file cấu hình (luôn nhớ kiểm tra kỹ thuật toán `Generic Fallback` nếu ứng dụng có thể xử lý chung để tối ưu tài nguyên).
3. **Commit** thay đổi với nội dung rõ ràng (vd: `feat: Thêm script mở khoá XYZ`).
4. **Push** lên branch của bạn và tạo một **Pull Request** vào branch `master` của dự án gốc.

---

## 📐 Chuẩn Mực Viết Code & Cấu Hình

Để giữ cho kho lưu trữ siêu nhẹ, tối ưu RAM và Pin:
- **Tận dụng Generic Fallback**: Trước khi viết một `.js` riêng cho một app mua IAP, hãy thử dùng chung `revenuecat_multi.js` hoặc `iTunes.js`.
- **Giữ cấu hình gọn gàng**: Tránh duplicate các rules. Nếu một rule có thể bao quát, hãy dùng nó. Đảm bảo cấu trúc YAML/Conf tuân thủ chuẩn của từng nền tảng (Surge, Stash, Egern...).
- **Ghi chú rõ ràng**: Luôn có `# === TÊN APP ===` ở phần MITM và Scriptings để người dùng dễ tra cứu.

## 🧪 Hướng Dẫn Kiểm Tra (Testing)

Trước khi gửi Pull Request, vui lòng đảm bảo script/cấu hình của bạn hoạt động ổn định:
1. **Kiểm tra cú pháp**: Chạy script qua ESLint hoặc một trình duyệt/Node.js để đảm bảo không có lỗi cú pháp (Syntax Error).
2. **Kiểm tra thực tế**: Cài đặt cấu hình/script vào Proxy Client (Shadowrocket, Surge, Stash, v.v.), bật MITM và mở ứng dụng lên để xác nhận gói Premium/Pro đã được mở khoá.
3. **Kiểm tra rò rỉ (Leak)**: Đảm bảo script không chặn nhầm các API quan trọng khác của ứng dụng.

---

## 💬 Kênh Hỗ Trợ & Liên Hệ

Nếu bạn có ý tưởng lớn cần thảo luận trước khi code, hoặc cần hỗ trợ về mặt kỹ thuật:
- Mở một **[Thảo luận (Discussion) trên GitHub](https://github.com/ekaznyra/NguyenNgocAnhTu/issues)**.
- Hoặc liên hệ trực tiếp qua **[Facebook của Tác giả](https://www.facebook.com/NguyenNgocAnhTu.VN)** để trao đổi nhanh nhất.

---

Cảm ơn bạn đã giúp dự án mạnh mẽ hơn! ⚡ Cùng nhau, chúng ta mang lại trải nghiệm Premium cho cộng đồng!
