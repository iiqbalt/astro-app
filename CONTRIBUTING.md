# 🧭 Panduan Kontribusi

Terima kasih sudah tertarik untuk berkontribusi di proyek ini! 🎉  
Kami sangat menghargai setiap bantuan — baik berupa laporan bug, perbaikan kecil, peningkatan fitur, maupun dokumentasi.

Sebelum mulai, harap baca panduan ini agar proses kontribusi berjalan lancar dan pull request kamu bisa diterima dengan cepat.

---

## ⚙️ Persiapan Awal

1. Pastikan kamu sudah memiliki akun [GitHub](https://github.com) atau [GitLab](https://gitlab.com).
2. *Fork* repository ini ke akun kamu sendiri.
3. Clone hasil fork tersebut ke komputer lokal:
   ```bash
   git clone https://github.com/username/nama-project.git
   cd nama-project
   ```
4. Buat branch baru untuk setiap perubahan:
   ```bash
   git checkout -b fitur/nama-fitur-baru
   ```

---

## 🧩 Jenis Kontribusi yang Diterima

Kamu bisa membantu dengan banyak cara:
- 🐛 **Laporan Bug:** Temukan error? Buat issue baru dan jelaskan langkah-langkah reproduksi.
- ✨ **Fitur Baru:** Punya ide kecil? Buat issue terlebih dahulu agar bisa didiskusikan.
- 🧹 **Perbaikan Kode:** Refactor, ubah nama variabel, atau optimasi performa.
- 📝 **Dokumentasi:** Perbaiki typo, tambah contoh kode, atau buat panduan instalasi lebih jelas.

> 💡 Untuk Hacktoberfest, hindari PR kosong seperti menghapus spasi, mengganti nama file tanpa alasan, atau menambah baris tidak penting. Fokuslah pada kontribusi yang benar-benar bermanfaat.

---

## 🧠 Aturan Penulisan Kode

- Gunakan format dan gaya kode yang konsisten.
- Jalankan linter (jika ada) sebelum membuat commit.
- Beri nama variabel dan fungsi dengan deskriptif.
- Jika menambah dependensi baru, pastikan alasannya kuat dan relevan.

---

## 💬 Langkah Kontribusi

1. **Fork & Clone** repositori.
2. **Buat Branch Baru**:
   ```bash
   git checkout -b fix/perbaikan-bug
   ```
3. **Lakukan Perubahan** di kode.
4. **Commit Perubahan** dengan pesan yang jelas:
   ```bash
   git commit -m "fix: perbaiki validasi input login"
   ```
5. **Push ke Fork Kamu**:
   ```bash
   git push origin fix/perbaikan-bug
   ```
6. **Buat Pull Request (PR)** ke branch `main` atau `develop`.

---

## 📜 Format Commit Message

Gunakan format berikut agar mudah dibaca:
```
<tipe>: <deskripsi singkat>
```

Contoh tipe umum:
- `feat:` → menambah fitur baru  
- `fix:` → memperbaiki bug  
- `docs:` → mengubah dokumentasi  
- `refactor:` → memperbaiki struktur kode tanpa mengubah perilaku  
- `style:` → perubahan format, indentasi, spasi  
- `test:` → menambah atau memperbarui pengujian  

Contoh:
```
feat: tambahkan fitur dark mode di halaman utama
```

---

## 🧾 Review & Merge

Setelah PR kamu dikirim:
1. Maintainer akan meninjau kode.
2. Jika ada perubahan diminta, kamu bisa update branch yang sama.
3. Setelah disetujui, PR akan di-merge ke branch utama.

---

## ❤️ Kode Etik

Kami mengikuti prinsip [Contributor Covenant](https://www.contributor-covenant.org/).  
Selalu bersikap sopan, hormati semua orang, dan gunakan bahasa yang positif.

---

## 🎁 Hacktoberfest Tips

- Pastikan repo ini punya label `hacktoberfest` di GitHub.
- Hanya PR yang **bernilai** (valid dan diterima) yang dihitung.
- Targetkan minimal **6 PR/MR diterima** untuk jadi *Super Contributor*.
- Gunakan label seperti `good first issue` atau `help wanted` untuk memulai.

---

Terima kasih sudah membantu menjadikan proyek ini lebih baik!  
Selamat berkontribusi dan semoga PR kamu diterima! 🚀
