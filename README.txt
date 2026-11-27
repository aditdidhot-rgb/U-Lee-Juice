====================================================================
PANDUAN PENGELOLAAN WEBSITE U LEE JUICE
====================================================================

Website katalog U LEE JUICE ("FRESH HEALTHY HAPPIER") dibuat dengan
HTML5, CSS3, dan JavaScript murni sehingga bisa langsung dibuka
di komputer atau HP tanpa server dan tanpa database.

--------------------------------------------------------------------
1. CARA MEMBUKA WEBSITE (KOMPUTER & HP)
--------------------------------------------------------------------
Terdapat 2 file HTML di folder u-lee-juice/:

A. index.html (File Utama untuk Edit Foto & Hosting)
   - Membaca file dari folder css/, js/, dan images/.
   - Gunakan file ini saat membuka website di komputer/laptop, saat
     mengganti foto di folder images/products/, atau saat meng-upload
     website ke hosting (seperti GitHub Pages / Netlify / Vercel).
   - PENTING: Jika memindahkan index.html, seluruh folder css/, js/,
     dan images/ harus ikut dibawa dalam 1 folder yang sama.

B. U Lee Juice.html (File Mandiri Khusus Preview Langsung di HP)
   - Di HP Android/iOS, mengirim file index.html sendirian (misalnya
     lewat WhatsApp) atau membukanya lewat File Manager akan membuat
     browser HP memblokir folder css/, js/, dan images/ sehingga
     tampilannya polos dan foto tidak muncul.
   - Karena itu tersedia "U Lee Juice.html" yang sudah menggabungkan
     semua desain, kode, dan foto ke dalam 1 file utuh agar bisa
     langsung dikirim dan dibuka dengan rapi di HP (buka dengan
     Google Chrome / Safari di HP).
   - Catatan: Jika Anda mengganti foto asli di folder images/products/,
     perubahan otomatis tampil di "index.html".

--------------------------------------------------------------------
2. CARA MENGGANTI LOGO & FOTO HERO
--------------------------------------------------------------------
- Mengganti Logo U LEE JUICE:
  Siapkan file logo dengan nama "logo.png", lalu ganti/timpa file:
  images/logo.png

- Mengganti Foto Utama (Hero):
  Siapkan foto jus utama dengan nama "hero.jpg", lalu ganti/timpa:
  images/hero.jpg

--------------------------------------------------------------------
3. CARA MENAMBAHKAN & MENGGANTI FOTO PRODUK
--------------------------------------------------------------------
Setiap menu memiliki 1 file foto di dalam folder:
images/products/

Cara mengganti foto produk dengan foto asli:
1. Siapkan foto produk asli Anda (format .jpg, disarankan kotak 1:1
   atau landscape 4:3 yang jelas dan terang).
2. Ganti nama file foto Anda agar SAMA PERSIS dengan nama file yang
   sudah ada di folder images/products/, contoh:
   - images/products/jus-alpukat.jpg
   - images/products/jus-mangga.jpg
   - images/products/jus-jeruk.jpg
   - images/products/jus-jambu.jpg
   - images/products/es-teler.jpg
   - images/products/milkshake.jpg
   - images/products/seblak-biasa.jpg
   - images/products/indomie-telur.jpg
3. Salin dan timpa file lama di dalam folder images/products/.
4. Refresh browser untuk melihat foto baru.

Catatan: Jika foto baru Anda berformat .png (misalnya jus-mangga.png),
ubah bagian image di file js/script.js menjadi:
image: 'images/products/jus-mangga.png'

--------------------------------------------------------------------
4. CARA MENAMBAHKAN PRODUK BARU
--------------------------------------------------------------------
1. Simpan foto produk baru ke folder images/products/
   (contoh: images/products/jus-kurma.jpg).
2. Buka file js/script.js menggunakan Notepad atau VS Code.
3. Cari bagian "const PRODUCTS = [".
4. Tambahkan satu baris baru dengan format berikut:

   { id: 'jus-kurma', name: 'Jus Kurma', category: 'fresh-juice', image: 'images/products/jus-kurma.jpg' },

5. Pilihan "category" yang tersedia:
   - 'fresh-juice'      -> Fresh Juice
   - 'fresh-juice-mix'  -> Fresh Juice Mix
   - 'non-juice'        -> Non Juice
   - 'cemilan'          -> Cemilan
   - 'seblak'           -> Seblak
   - 'topping'          -> Topping

6. Simpan file js/script.js, lalu refresh browser.

--------------------------------------------------------------------
5. CARA MENGUBAH NAMA PRODUK
--------------------------------------------------------------------
1. Buka file js/script.js dengan Notepad atau VS Code.
2. Cari produk yang ingin diubah di dalam "const PRODUCTS = [".
3. Ubah teks di bagian "name", misalnya:
   name: 'Jus Alpukat Spesial'
4. Simpan file dan refresh browser.

--------------------------------------------------------------------
6. CARA MENGUBAH WARNA WEBSITE
--------------------------------------------------------------------
1. Buka file css/style.css dengan Notepad atau VS Code.
2. Pada bagian paling atas (di dalam ":root { ... }"), Anda akan
   melihat daftar warna utama:
   --color-forest: #204B25;   (Hijau Tua)
   --color-fresh:  #568B43;   (Hijau Segar)
   --color-cream:  #FFF9EC;   (Krem Hangat)
   --color-yellow: #FFC52E;   (Kuning Aksen)
   --color-orange: #F4773B;   (Oranye Aksen)
   --color-white:  #FFFFFF;   (Putih)
3. Ubah kode warna (contoh: #204B25) sesuai keinginan Anda.
4. Simpan file dan refresh browser.

--------------------------------------------------------------------
7. KONTAK & LOKASI (WHATSAPP & GOOGLE MAPS)
--------------------------------------------------------------------
Jika suatu saat nomor WhatsApp atau link Google Maps berubah:
1. Buka index.html, cari link WhatsApp dan Google Maps di bagian
   <footer>, lalu ganti dengan nomor atau link baru.
2. Buka js/script.js dan perbarui bagian SITE_CONFIG agar seragam.
====================================================================
