<div align="center">

# 🤝 Hướng dẫn đóng góp — Contributing Guide

<br>

<img src="https://img.shields.io/badge/💎_ĐÓNG_GÓP-HƯỚNG_DẪN-c9a84c?style=for-the-badge&labelColor=1a0a2e" alt="contributing"/>

<br><br>

> ✨ Cảm ơn bạn đã quan tâm đến việc đóng góp cho **Premium Unlocker**!
> Mọi đóng góp đều được trân trọng. 💎

</div>

<br>

## 📋 Quy trình đóng góp

### 1. 🍴 Fork repository

```bash
# Fork repo trên GitHub, sau đó clone về máy
git clone https://github.com/YOUR-USERNAME/NguyenNgocAnhTu.git
cd NguyenNgocAnhTu
```

### 2. 🌿 Tạo nhánh mới

```bash
# Tạo nhánh từ master
git checkout -b feature/ten-tinh-nang

# Ví dụ:
git checkout -b feature/them-app-moi
git checkout -b fix/sua-loi-youtube
```

### 3. ✍️ Thực hiện thay đổi

Thay đổi code, test kĩ trên thiết bị thật.

### 4. 📤 Commit & Push

```bash
git add .
git commit -m "✨ feat: thêm app mới XYZ"
git push origin feature/ten-tinh-nang
```

### 5. 🔄 Tạo Pull Request

Tạo PR trên GitHub và điền đầy đủ template.

---

## 📝 Quy ước Commit Message

| Prefix | Ý nghĩa | Ví dụ |
|:---|:---|:---|
| `✨ feat:` | Tính năng mới | `✨ feat: thêm hỗ trợ Notion` |
| `🐛 fix:` | Sửa lỗi | `🐛 fix: sửa lỗi YouTube ads` |
| `📝 docs:` | Cập nhật tài liệu | `📝 docs: thêm hướng dẫn Egern` |
| `🔧 chore:` | Công việc bảo trì | `🔧 chore: cập nhật hostname` |
| `⚡ perf:` | Cải thiện hiệu suất | `⚡ perf: tối ưu script iTunes` |
| `🎨 style:` | Định dạng code | `🎨 style: format JS files` |

---

## 📱 Thêm ứng dụng mới

Khi muốn thêm app mới vào module, cần cập nhật **tất cả** các file sau:

| # | File cần sửa | Hành động |
|:---:|:---|:---|
| 1 | `Module/js/ten_app.js` | Tạo file script mới |
| 2 | `Module/NguyenNgocAnhTu_Shadowrocket.module` | Thêm rule + script |
| 3 | `Module/NguyenNgocAnhTu_LanceX.module` | Thêm rule + script |
| 4 | `Module/NguyenNgocAnhTu_Surge.sgmodule` | Thêm rule + script |
| 5 | `Module/NguyenNgocAnhTu_Loon.plugin` | Thêm rule + script |
| 6 | `Module/NguyenNgocAnhTu_QuantumultX.snippet` | Thêm rewrite + script |
| 7 | `Module/NguyenNgocAnhTu_Stash.stoverride` | Thêm rule + script |
| 8 | `Module/NguyenNgocAnhTu_Egern.yaml` | Thêm rule + script |
| 9 | `README.md` | Cập nhật danh sách ứng dụng |

---

## ✅ Checklist trước khi tạo PR

- [ ] Đã test trên thiết bị thật (iOS 15+)
- [ ] Đã test trên ít nhất 2 ứng dụng proxy khác nhau
- [ ] Đã cập nhật README.md (nếu thêm app mới)
- [ ] Đã cập nhật tất cả 7+ file module
- [ ] Code có comment rõ ràng
- [ ] Không ảnh hưởng đến các app đã hoạt động
- [ ] Commit message theo quy ước

---

## 🚫 Không chấp nhận

- Code chứa mã độc hoặc theo dõi người dùng
- Script thu thập thông tin cá nhân
- Nội dung vi phạm pháp luật
- Spam hoặc quảng cáo

---

<div align="center">

### 💎 Cảm ơn bạn đã đóng góp!

Mỗi đóng góp đều giúp cộng đồng phát triển mạnh mẽ hơn. ⭐

</div>
