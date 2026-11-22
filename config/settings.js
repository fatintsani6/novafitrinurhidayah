/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║           OCEAN BIRTHDAY — SEMUA PENGATURAN DI SINI         ║
 * ║  Kamu HANYA perlu edit file ini. Tidak perlu buka file lain. ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 *  Cara pakai:
 *  1. Baca setiap bagian (1–7)
 *  2. Ganti nilai yang ada tanda  ← GANTI INI
 *  3. Simpan file → refresh browser
 */

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   1. PIN MASUK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PIN 4–6 angka yang harus diketik tamu untuk membuka website.  */
const WEBSITE_PIN = "241102";              // ← GANTI PIN

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   2. NAMA PENERIMA
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nama yang muncul di halaman utama (hero).                      */
const RECIPIENT_NAME = "nova fitri nur hidayah";           // ← GANTI NAMA


/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   3. MUSIK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   FILE MUSIK  → taruh di:  assets/music/song1.mp3
   FOTO COVER  → taruh di:  assets/music/song1.jpeg  (rasio 3:4)
   Lalu ganti judul dan nama artis di bawah ini.                  */
const MUSIC_TRACKS = [
  {
    title:  "Mesra-Mesraannya Kecil-Kecilan Dulu",             // ← GANTI JUDUL LAGU
    artist: "Sal Priadi",                   // ← GANTI NAMA ARTIS
    src:    "assets/music/song1.mp3",    //   (nama file mp3 — jangan diubah kecuali nama filenya beda)
    cover:  "assets/music/song1.jpeg",   //   (nama file cover — jangan diubah kecuali nama filenya beda)
    startTime: 0,                           // ← MULAI DARI DETIK KE BERAPA
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   4. FOTO GALERI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Taruh foto di:  assets/images/
   Nama file harus:  img1.jpeg  img2.jpeg  … img8.jpeg
   Ganti caption (keterangan foto) di setiap baris.               */
const GALLERY_PHOTOS = [
  { file: "img1.jpeg", caption: "Senyummu bisa memperbaiki seluruh hariku." },  // ← GANTI CAPTION
  { file: "img2.jpeg", caption: "Kaulah alasan hatiku merasa begitu penuh." },
  { file: "img3.jpeg", caption: "Setiap detik bersamamu adalah favoritku." },
  { file: "img4.jpeg", caption: "Sebagian orang mencari kebahagiaan, aku menemukan kebahagiaanku dalam dirimu." },
  { file: "img5.jpeg", caption: "Kamu mengubah hari-hariku yang biasa menjadi sesuatu yang indah." },
  { file: "img6.jpeg", caption: "Hatiku merasa paling aman saat bersamamu." },
  { file: "img7.jpeg", caption: "Jika aku bisa mengulang satu momen, aku akan memilih kita setiap saat." },
  { file: "img8.jpeg", caption: "Tetap menjadi orang favoritku, selalu." },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   5. ISI SURAT
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Setiap string adalah satu paragraf.
   Bisa ditambah atau dikurangi paragrafnya.                       */
const LETTER_PARAGRAPHS = [
  "Aku ingin mengirim surat ini seperti para pelaut lama mengirim kabar pulang — disegel rapat, dihanyutkan, dan dipercayakan untuk menemukan jalan sampai kepadamu.",
  "Hari ini adalah harimu. Aku berharap hari ini berjalan dengan tenang, hangat, dan dipenuhi hal-hal kecil yang menyenangkan. Kamu benar-benar pantas mendapatkan semuanya.",
  "Terima kasih telah menjadi sosok yang kehadirannya membuat hari-hari biasa terasa layak untuk dikenang. Ruang kecil di internet ini adalah cara sederhana untuk menyampaikannya.",
  "Apa pun caramu merayakan hari ini, aku berharap kamu dikelilingi orang-orang yang mencintaimu sebanyak aku mencintaimu. Selamat ulang tahun untukmu.",
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   6. KENANGAN (TIMELINE)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   depth  = kedalaman yang ditampilkan (label saja)
   year   = judul bab
   title  = judul kenangan
   text   = isi cerita                                             */
const MEMORIES = [
  {
    depth: "2m",
    year:  "Bab Pertama",
    title: "Awal Segalanya",
    text:  "Saat semuanya tiba-tiba terasa pas dan mulai masuk akal.",
  },
  {
    depth: "8m",
    year:  "Bab Kedua",
    title: "Hari-Hari Tenang",
    text:  "Hanya kamu dan aku, serta momen sederhana yang akhirnya menjadi segalanya.",
  },
  {
    depth: "16m",
    year:  "Bab Ketiga",
    title: "Melalui Badai",
    text:  "Kita pernah melewati hari-hari sulit, tetapi kita selalu menemukan jalan untuk kembali.",
  },
  {
    depth: "24m",
    year:  "Bab Keempat",
    title: "Menemukan Cahaya",
    text:  "Kamu adalah bagian paling terang dalam perjalananku, bahkan di lautan terdalam.",
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   7. UCAPAN ULANG TAHUN
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   icon: wave | shell | star | compass | anchor | heart
   text: isi ucapannya                                            */
const WISHES = [
  { icon: "wave",    text: "Semoga tahun ini membawakan ketenangan lautan dan kedalaman kebaikan hatimu." },
  { icon: "shell",   text: "Semoga harimu seterang cahaya matahari di atas air dan malammu sebesar ketenangan laut surut." },
  { icon: "star",    text: "Semoga setiap harapan kecilmu datang tepat saat kamu paling membutuhkannya." },
  { icon: "compass", text: "Ke mana pun tahun ini membawamu, semoga kamu selalu kembali kepada orang-orang yang menyayangimu." },
  { icon: "anchor",  text: "Tetaplah teguh, tetaplah bersyukur, dan tetaplah sebagus dirimu sekarang." },
  { icon: "heart",   text: "Selamat ulang tahun — Hingga tua bersama." },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   JANGAN EDIT DI BAWAH INI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
(function (window) {
  window.WEBSITE_PIN = String(WEBSITE_PIN);
  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   8. WHATSAPP REPLY BUTTON
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nomor WA untuk membalas pesan setelah lilin ditiup.
   Gunakan format internasional tanpa tanda + (contoh: 62812...) */
const WHATSAPP_NUMBER = "6281234567890";   // ← GANTI NOMOR WA YANG ORDER
const WHATSAPP_MESSAGE = "Hai, aku baru saja membuka botolnya. Terima kasih sudah membuat hariku istimewa! ✨"; // ← GANTI PESAN OTOMATIS

window.OCEAN_SETTINGS = {
    recipientName:    String(RECIPIENT_NAME),
    galleryPhotos:    GALLERY_PHOTOS,
    musicTracks:      MUSIC_TRACKS,
    letterParagraphs: LETTER_PARAGRAPHS,
    memories:         MEMORIES,
    wishes:           WISHES,
    whatsappNumber:   WHATSAPP_NUMBER,
    whatsappMessage:  WHATSAPP_MESSAGE
  };
})(window);
