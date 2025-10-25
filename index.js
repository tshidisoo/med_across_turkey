// University data extracted from the images
const universities = [
    { name: "Adıyaman Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://static.adiyaman.edu.tr/files/54/2025-2026/2025-2026%20e%C4%9Fitim-%C3%B6%C4%9Fretim%20y%C4%B1l%C4%B1%20ilk%20defa%20kay%C4%B1tlanan%20uluslararas%C4%B1%20%C3%B6%C4%9Frencilerin%20%C3%B6%C4%9Frenim%20%C3%BCcretleri%20son%20pdf.pdf" },
    { name: "Afyonkarahisar Sağlık Bilimleri Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://ogrenci.afsu.edu.tr/wp-content/uploads/sites/10/2025/07/2025-katki-payi-ogrenim-ucretleri-tablosu.pdf" },
    { name: "Ağrı İbrahim Çeçen Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://www.agri.edu.tr" },
    { name: "Akdeniz Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://share.google/itXPwJGe96c7Gm5jl" },
    { name: "Aksaray Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://ogris.aksaray.edu.tr/dosya/d9efd799-4c5c-4c8e-b2dd-cad124860b16.pdf" },
    { name: "Alanya Alaaddin Keykubat Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://oidb.alanya.edu.tr/media/zjehhwav/2021-yili-ve-sonrasi.pdf" },
    { name: "Amasya Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://oidb.amasya.edu.tr/2025-2026-yabanci-ogrenci-ucret.aspx" },
    { name: "Ankara Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://isoidb.ankara.edu.tr/wp-content/uploads/sites/381/2025/07/2025-2026-Katki-Payi-Ucretleri.pdf" },
    { name: "Ankara Medipol Üniversitesi (İngilizce) (Burslu)", type: "vakif", program: "Tıp Fakültesi", url: "https://mio.ankaramedipol.edu.tr/sites/mio.medipol.edu.tr/files/document/Ankara%20Medipol%20Tution%20Fee%202025-2026.pdf" },
    { name: "Ankara Medipol Üniversitesi (Ücretli)", type: "vakif", program: "Tıp Fakültesi", url: "https://mio.ankaramedipol.edu.tr/sites/mio.medipol.edu.tr/files/document/Ankara%20Medipol%20Tution%20Fee%202025-2026.pdf" },
    { name: "Ankara Medipol Üniversitesi (Burslu)", type: "vakif", program: "Tıp Fakültesi", url: "https://mio.ankaramedipol.edu.tr/sites/mio.medipol.edu.tr/files/document/Ankara%20Medipol%20Tution%20Fee%202025-2026.pdf" },
    { name: "Ankara Medipol Üniversitesi (%25 İndirimli)", type: "vakif", program: "Tıp Fakültesi", url: "https://mio.ankaramedipol.edu.tr/sites/mio.medipol.edu.tr/files/document/Ankara%20Medipol%20Tution%20Fee%202025-2026.pdf" },
    { name: "Ankara Medipol Üniversitesi (İngilizce) (%25 İndirimli)", type: "vakif", program: "Tıp Fakültesi", url: "https://mio.ankaramedipol.edu.tr/sites/mio.medipol.edu.tr/files/document/Ankara%20Medipol%20Tution%20Fee%202025-2026.pdf" },
    { name: "Ankara Medipol Üniversitesi (%50 İndirimli)", type: "vakif", program: "Tıp Fakültesi", url: "https://mio.ankaramedipol.edu.tr/sites/mio.medipol.edu.tr/files/document/Ankara%20Medipol%20Tution%20Fee%202025-2026.pdf" },
    { name: "Ankara Medipol Üniversitesi (İngilizce) (%50 İndirimli)", type: "vakif", program: "Tıp Fakültesi", url: "https://mio.ankaramedipol.edu.tr/sites/mio.medipol.edu.tr/files/document/Ankara%20Medipol%20Tution%20Fee%202025-2026.pdf" },
    { name: "Ankara Yıldırım Beyazıt Üniversitesi (İngilizce)", type: "devlet", program: "Tıp Fakültesi", url: "https://aybu.edu.tr/GetFile?id=58d0e90c-9c0c-41f8-b98e-cd4348ec1052.pdf" },
    { name: "Ankara Yıldırım Beyazıt Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://aybu.edu.tr/GetFile?id=58d0e90c-9c0c-41f8-b98e-cd4348ec1052.pdf" },
    { name: "Atılım Üniversitesi (İngilizce) (Ücretli)", type: "vakif", program: "Tıp Fakültesi", url: "https://ic.atilim.edu.tr/page/35/bachelor%27s-programs" },
    { name: "Atılım Üniversitesi (İngilizce) (Burslu)", type: "vakif", program: "Tıp Fakültesi", url: "https://ic.atilim.edu.tr/page/35/bachelor%27s-programs" },
    { name: "Atılım Üniversitesi (İngilizce) (%25 İndirimli)", type: "vakif", program: "Tıp Fakültesi", url: "https://ic.atilim.edu.tr/page/35/bachelor%27s-programs" },
    { name: "Atatürk Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://birimler.atauni.edu.tr/ogrenci-isleri-daire-baskanligi/wp-content/uploads/sites/18/2025/07/2025-2026_Katki-Paylari_14072025_.pdf" },
    { name: "Atatürk Üniversitesi (İngilizce)", type: "devlet", program: "Tıp Fakültesi", url: "https://birimler.atauni.edu.tr/ogrenci-isleri-daire-baskanligi/wp-content/uploads/sites/18/2025/07/2025-2026_Katki-Paylari_14072025_.pdf" },
    { name: "Aydın Adnan Menderes Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://yes.adu.edu.tr/tr/program-kontenjanlari/" },
    { name: "Bahçeşehir Üniversitesi (İngilizce) (Burslu)", type: "vakif", program: "Tıp Fakültesi", url: "https://aday.bau.edu.tr/onlisans-ve-lisans-ucretler-2025-2026/" },
    { name: "Bahçeşehir Üniversitesi (İngilizce) (%50 İndirimli)", type: "vakif", program: "Tıp Fakültesi", url: "https://aday.bau.edu.tr/onlisans-ve-lisans-ucretler-2025-2026/" },
    { name: "Balıkesir Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://baunwebapi.balikesir.edu.tr/uploads/1736661767208.pdf" },
    { name: "Bandırma Onyedi Eylül Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://webyonetim.bandirma.edu.tr/Content/Web/Yuklemeler/DosyaYoneticisi/676/files/2025-2026%20KATKI%20PAYI.pdf" },
    { name: "Başkent Üniversitesi (Ücretli)", type: "vakif", program: "Tıp Fakültesi", url: "https://ogrisl.baskent.edu.tr/kw/genel.php?id=211850" },
    { name: "Başkent Üniversitesi (%50 İndirimli)", type: "vakif", program: "Tıp Fakültesi", url: "https://ogrisl.baskent.edu.tr/kw/genel.php?id=211850" },
    { name: "Başkent Üniversitesi (Burslu)", type: "vakif", program: "Tıp Fakültesi", url: "https://ogrisl.baskent.edu.tr/kw/genel.php?id=211850" },
    { name: "Başkent Üniversitesi (İngilizce) (Ücretli)", type: "vakif", program: "Tıp Fakültesi", url: "https://ogrisl.baskent.edu.tr/kw/genel.php?id=211850" },
    { name: "Başkent Üniversitesi (İngilizce) (Burslu)", type: "vakif", program: "Tıp Fakültesi", url: "https://ogrisl.baskent.edu.tr/kw/genel.php?id=211850" },
    { name: "Başkent Üniversitesi (İngilizce) (%50 İndirimli)", type: "vakif", program: "Tıp Fakültesi", url: "https://ogrisl.baskent.edu.tr/kw/genel.php?id=211850" },
    { name: "Bezm-i Âlem Vakıf Üniversitesi (Burslu)", type: "vakif", program: "Tıp Fakültesi", url: "https://aday.bezmialem.edu.tr/kontenjanlar-ve-ucretler.html" },
    { name: "Bezm-i Âlem Vakıf Üniversitesi (%50 İndirimli)", type: "vakif", program: "Tıp Fakültesi", url: "https://aday.bezmialem.edu.tr/kontenjanlar-ve-ucretler.html" },
    { name: "Bezm-i Âlem Vakıf Üniversitesi (Ücretli)", type: "vakif", program: "Tıp Fakültesi", url: "https://aday.bezmialem.edu.tr/kontenjanlar-ve-ucretler.html" },
    { name: "Bilecik Şeyh Edebali Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://www.bilecik.edu.tr/dosya/32163_c362_t%C3%BCrk%20Katk%C4%B1%20pay%C4%B1,%20%C3%B6%C4%9Frenim%20%C3%BCcretleri%20duyuru%202025-2026%20g%C3%BCz.pdf" },
    { name: "Biruni Üniversitesi (Burslu)", type: "vakif", program: "Tıp Fakültesi", url: "https://aday.biruni.edu.tr/2025/" },
    { name: "Biruni Üniversitesi (%25 İndirimli)", type: "vakif", program: "Tıp Fakültesi", url: "https://aday.biruni.edu.tr/2025/" },
    { name: "Biruni Üniversitesi (İngilizce) (Burslu)", type: "vakif", program: "Tıp Fakültesi", url: "https://aday.biruni.edu.tr/2025/" },
    { name: "Biruni Üniversitesi (İngilizce) (%25 İndirimli)", type: "vakif", program: "Tıp Fakültesi", url: "https://aday.biruni.edu.tr/2025/" },
    { name: "Biruni Üniversitesi (%50 İndirimli)", type: "vakif", program: "Tıp Fakültesi", url: "https://aday.biruni.edu.tr/2025/" },
    { name: "Biruni Üniversitesi (İngilizce) (%50 İndirimli)", type: "vakif", program: "Tıp Fakültesi", url: "https://aday.biruni.edu.tr/2025/" },
    { name: "Bolu Abant İzzet Baysal Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://oidb.ibu.edu.tr/Files/ckFiles/oidb-ibu-edu-tr/har%C3%A7lar/25-26_Harc_Tablosu.pdf" },
    { name: "Bursa Uludağ Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://uludag.edu.tr/dosyalar/oidb/2025-2026%20Katk%C4%B1%20Pay%C4%B1-%C3%96%C4%9Frenim%20%C3%9Ccreti%20Tutarlar%C4%B1.pdf" },
    { name: "Çanakkale Onsekiz Mart Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://student.comu.edu.tr/katki-payi-r22.html" },
    { name: "Çukurova Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://iso.cu.edu.tr/cu/student/tuition-fees" },
    { name: "Demiroğlu Bilim Üniversitesi (Burslu)", type: "vakif", program: "Tıp Fakültesi", url: "https://demiroglu.bilim.edu.tr/ogrenci/burslar-ve-ucretler" },
    { name: "Demiroğlu Bilim Üniversitesi (%50 İndirimli)", type: "vakif", program: "Tıp Fakültesi", url: "https://demiroglu.bilim.edu.tr/ogrenci/burslar-ve-ucretler" },
    { name: "Dicle Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://www.dicle.edu.tr" },
    { name: "Dokuz Eylül Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://deyos.deu.edu.tr/wp-content/uploads/2025/07/2025_Ogrenim_Ucretleri.pdf" },
    { name: "Düzce Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://cdn.duzce.edu.tr/File/GetFile/7ffa0bb8-8135-4b35-a2f9-4d5dd2613b19" },
    { name: "Ege Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://oidb.ege.edu.tr/files/oidb/icerik/sonn_2025_2026_onlisans_lisans_katki_payi_ogrenim_ucretleri.pdf" },
    { name: "Erciyes Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://ogrisl.erciyes.edu.tr/tr/katki-payiogrenim-ucretleri-2025-26" },
    { name: "Erzincan Binali Yıldırım Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://ogrenciisleri.ebyu.edu.tr/Dosyalar/Duyurular/2025/20252026HarcUcretleri.xlsx" },
    { name: "Eskişehir Osmangazi Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://student.ogu.edu.tr/Storage/student/Uploads/2025_2026_Ogrenim_ucretleri.pdf" },
    { name: "Fırat Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://iso.firat.edu.tr/subdomain_files/iso.firat.edu.tr/files/1972/d%C3%B6k%C3%BCmanlar/2025-2026%20yabanci%20uyruk%20ogrenci%20harc%20ucretleri.pdf" },
    { name: "Gazi Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://webupload.gazi.edu.tr/upload/12/2025/9/10/c0e17bd4-e091-49c5-822a-7baba795553e-katki-payi-ogrenim-ucretleri.pdf" },
    { name: "Gazi Üniversitesi (İngilizce)", type: "devlet", program: "Tıp Fakültesi", url: "https://webupload.gazi.edu.tr/upload/12/2025/9/10/c0e17bd4-e091-49c5-822a-7baba795553e-katki-payi-ogrenim-ucretleri.pdf" },
    { name: "Gaziantep İslam Bilim ve Teknoloji Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://www.gibtu.edu.tr/Medya/Birim/Dosya/20250808083434_c43ec35e.pdf" },
    { name: "Gaziantep Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://iso.gantep.edu.tr/upload/files/2025-2026%20%C3%9CCRET.pdf" },
    { name: "Giresun Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://fso.giresun.edu.tr/Files/ckFiles/fso-giresun-edu-tr/2024-2025%20%C3%96%C4%9Frenim_%C3%9Ccretleri_Tablosu.pdf" },
    { name: "Hacettepe Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://fs.hacettepe.edu.tr/fenbilimleri/dosyalar/basvuru_kontenjan_kesinkayit/ucrettablolari.pdf" },
    { name: "Hacettepe Üniversitesi (İngilizce)", type: "devlet", program: "Tıp Fakültesi", url: "https://fs.hacettepe.edu.tr/fenbilimleri/dosyalar/basvuru_kontenjan_kesinkayit/ucrettablolari.pdf" },
    { name: "Haliç Üniversitesi (Ücretli)", type: "vakif", program: "Tıp Fakültesi", url: "https://halic.edu.tr/tr/s-ogrencimiz/Documents/ogrucretleri/2025-2026-egitim-ogretim-yili-lisans-on-lisans-egitim-ucretleri.pdf" },
    { name: "Haliç Üniversitesi (Burslu)", type: "vakif", program: "Tıp Fakültesi", url: "https://halic.edu.tr/tr/s-ogrencimiz/Documents/ogrucretleri/2025-2026-egitim-ogretim-yili-lisans-on-lisans-egitim-ucretleri.pdf" },
    { name: "Haliç Üniversitesi (%25 İndirimli)", type: "vakif", program: "Tıp Fakültesi", url: "https://halic.edu.tr/tr/s-ogrencimiz/Documents/ogrucretleri/2025-2026-egitim-ogretim-yili-lisans-on-lisans-egitim-ucretleri.pdf" },
    { name: "Haliç Üniversitesi (İngilizce) (Burslu)", type: "vakif", program: "Tıp Fakültesi", url: "https://halic.edu.tr/tr/s-ogrencimiz/Documents/ogrucretleri/2025-2026-egitim-ogretim-yili-lisans-on-lisans-egitim-ucretleri.pdf" },
    { name: "Haliç Üniversitesi (İngilizce) (%50 İndirimli)", type: "vakif", program: "Tıp Fakültesi", url: "https://halic.edu.tr/tr/s-ogrencimiz/Documents/ogrucretleri/2025-2026-egitim-ogretim-yili-lisans-on-lisans-egitim-ucretleri.pdf" },
    { name: "Haliç Üniversitesi (İngilizce) (Ücretli)", type: "vakif", program: "Tıp Fakültesi", url: "https://halic.edu.tr/tr/s-ogrencimiz/Documents/ogrucretleri/2025-2026-egitim-ogretim-yili-lisans-on-lisans-egitim-ucretleri.pdf" },
    { name: "Harran Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://uok.harran.edu.tr/assets/uploads/other/files/uok/files/Harran_%C3%9Cniversitesi_Uluslararas%C4%B1_%C3%96%C4%9Frenci_katk%C4%B1_paylar%C4%B1_2023_2024_yeni.pdf" },
    { name: "Hatay Mustafa Kemal Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://website-admin.mku.edu.tr/files/74a2f233-6d51-4f0c-86d5-1f4c1bec564d.pdf" },
    { name: "Hitit Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://cdn.hitit.edu.tr/intoffice/files/27218_2508141412339.pdf" },
    { name: "İnönü Üniversitesi (İngilizce)", type: "devlet", program: "Tıp Fakültesi", url: "https://admin.inonu.edu.tr/application/ModuleAnnouncement/19425/20-08-2025_014923320.pdf" },
    { name: "İnönü Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://admin.inonu.edu.tr/application/ModuleAnnouncement/19425/20-08-2025_014923320.pdf" },
    { name: "İstanbul Arel Üniversitesi (Burslu)", type: "vakif", program: "Tıp Fakültesi", url: "https://www.basarisiralamalari.com/istanbul-arel-universitesi-egitim-ucretleri-ve-burslari/" },
    { name: "İstanbul Arel Üniversitesi (Ücretli)", type: "vakif", program: "Tıp Fakültesi", url: "https://www.basarisiralamalari.com/istanbul-arel-universitesi-egitim-ucretleri-ve-burslari/" },
    { name: "İstanbul Arel Üniversitesi (%50 İndirimli)", type: "vakif", program: "Tıp Fakültesi", url: "https://www.basarisiralamalari.com/istanbul-arel-universitesi-egitim-ucretleri-ve-burslari/" },
    { name: "İstanbul Atlas Üniversitesi (Burslu)", type: "vakif", program: "Tıp Fakültesi", url: "https://tercih.atlas.edu.tr/ogrenim-ucretleri" },
    { name: "İstanbul Atlas Üniversitesi (%50 İndirimli)", type: "vakif", program: "Tıp Fakültesi", url: "https://tercih.atlas.edu.tr/ogrenim-ucretleri" },
    { name: "İstanbul Atlas Üniversitesi (İngilizce) (%50 İndirimli)", type: "vakif", program: "Tıp Fakültesi", url: "https://tercih.atlas.edu.tr/ogrenim-ucretleri" },
    { name: "İstanbul Aydın Üniversitesi (Burslu)", type: "vakif", program: "Tıp Fakültesi", url: "https://aday.aydin.edu.tr/kontenjan-ve-puanlar/" },
    { name: "İstanbul Aydın Üniversitesi (İngilizce) (Burslu)", type: "vakif", program: "Tıp Fakültesi", url: "https://aday.aydin.edu.tr/kontenjan-ve-puanlar/" },
    { name: "İstanbul Aydın Üniversitesi (%50 İndirimli)", type: "vakif", program: "Tıp Fakültesi", url: "https://aday.aydin.edu.tr/kontenjan-ve-puanlar/" },
    { name: "İstanbul Aydın Üniversitesi (İngilizce) (%50 İndirimli)", type: "vakif", program: "Tıp Fakültesi", url: "https://aday.aydin.edu.tr/kontenjan-ve-puanlar/" },
    { name: "İstanbul Beykent Üniversitesi (Burslu)", type: "vakif", program: "Tıp Fakültesi", url: "https://www.beykent.edu.tr/aday-ogrenci/kayit-kabul/ucret-hesaplama-araci" },
    { name: "İstanbul Beykent Üniversitesi (%50 İndirimli)", type: "vakif", program: "Tıp Fakültesi", url: "https://www.beykent.edu.tr/aday-ogrenci/kayit-kabul/ucret-hesaplama-araci" },
    { name: "İstanbul Medeniyet Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://enstitu.medeniyet.edu.tr/tr/programlar/program-ucretleri" },
    { name: "İstanbul Medipol Üniversitesi (%50 İndirimli)", type: "vakif", program: "Tıp Fakültesi", url: "https://www.medipol.edu.tr/ogrenci/aday-ogrenci/puanlar-kontenjanlar-ve-ucretler/lisans" },
    { name: "İstanbul Medipol Üniversitesi (İngilizce) (Burslu)", type: "vakif", program: "Tıp Fakültesi", url: "https://www.medipol.edu.tr/ogrenci/aday-ogrenci/puanlar-kontenjanlar-ve-ucretler/lisans" },
    { name: "İstanbul Medipol Üniversitesi (İngilizce) (%50 İndirimli)", type: "vakif", program: "Tıp Fakültesi", url: "https://www.medipol.edu.tr/ogrenci/aday-ogrenci/puanlar-kontenjanlar-ve-ucretler/lisans" },
    { name: "İstanbul Medipol Üniversitesi (Burslu)", type: "vakif", program: "Tıp Fakültesi", url: "https://www.medipol.edu.tr/ogrenci/aday-ogrenci/puanlar-kontenjanlar-ve-ucretler/lisans" },
    { name: "İstanbul Medipol Üniversitesi (İngilizce) (Burslu) (Uluslararası)", type: "vakif", program: "Tıp Fakültesi", url: "https://www.medipol.edu.tr/ogrenci/aday-ogrenci/puanlar-kontenjanlar-ve-ucretler/lisans" },
    { name: "İstanbul Medipol Üniversitesi (%25 İndirimli)", type: "vakif", program: "Tıp Fakültesi", url: "https://www.medipol.edu.tr/ogrenci/aday-ogrenci/puanlar-kontenjanlar-ve-ucretler/lisans" },
    { name: "İstanbul Nişantaşı Üniversitesi (Burslu)", type: "vakif", program: "Tıp Fakültesi", url: "https://ats.nisantasi.edu.tr/basvuru-kosullari-2025-2026-guz-donem.pdf" },
    { name: "İstanbul Nişantaşı Üniversitesi (Ücretli)", type: "vakif", program: "Tıp Fakültesi", url: "https://ats.nisantasi.edu.tr/basvuru-kosullari-2025-2026-guz-donem.pdf" },
    { name: "İstanbul Okan Üniversitesi (İngilizce) (Ücretli)", type: "vakif", program: "Tıp Fakültesi", url: "https://www.okan.edu.tr/sayfa/8349/kayit-yenileme-odeme-planlari/" },
    { name: "İstanbul Okan Üniversitesi (İngilizce) (Burslu)", type: "vakif", program: "Tıp Fakültesi", url: "https://www.okan.edu.tr/sayfa/8349/kayit-yenileme-odeme-planlari/" },
    { name: "İstanbul Okan Üniversitesi (Burslu)", type: "vakif", program: "Tıp Fakültesi", url: "https://www.okan.edu.tr/sayfa/8349/kayit-yenileme-odeme-planlari/" },
    { name: "İstanbul Okan Üniversitesi (Ücretli)", type: "vakif", program: "Tıp Fakültesi", url: "https://www.okan.edu.tr/sayfa/8349/kayit-yenileme-odeme-planlari/" },
    { name: "İstanbul Okan Üniversitesi (İngilizce) (%50 İndirimli)", type: "vakif", program: "Tıp Fakültesi", url: "https://www.okan.edu.tr/sayfa/8349/kayit-yenileme-odeme-planlari/" },
    { name: "İstanbul Okan Üniversitesi (%50 İndirimli)", type: "vakif", program: "Tıp Fakültesi", url: "https://www.okan.edu.tr/sayfa/8349/kayit-yenileme-odeme-planlari/" },
    { name: "İstanbul Sağlık ve Teknoloji Üniversitesi (Burslu)", type: "vakif", program: "Tıp Fakültesi", url: "https://www.istun.edu.tr/tr/ogrenci-isleri/yatay-gecis/ucretler" },
    { name: "İstanbul Sağlık ve Teknoloji Üniversitesi (İngilizce) (Burslu)", type: "vakif", program: "Tıp Fakültesi", url: "https://www.istun.edu.tr/tr/ogrenci-isleri/yatay-gecis/ucretler" },
    { name: "İstanbul Sağlık ve Teknoloji Üniversitesi (%50 İndirimli)", type: "vakif", program: "Tıp Fakültesi", url: "https://www.istun.edu.tr/tr/ogrenci-isleri/yatay-gecis/ucretler" },
    { name: "İstanbul Sağlık ve Teknoloji Üniversitesi (İngilizce) (%50 İndirimli)", type: "vakif", program: "Tıp Fakültesi", url: "https://www.istun.edu.tr/tr/ogrenci-isleri/yatay-gecis/ucretler" },
    { name: "İstanbul Yeni Yüzyıl Üniversitesi (Burslu)", type: "vakif", program: "Tıp Fakültesi", url: "https://cmspanel.yeniyuzyil.edu.tr/uploaded/files/FAKuLTE-2.pdf?v=638895679953604199" },
    { name: "İstanbul Yeni Yüzyıl Üniversitesi (%25 İndirimli)", type: "vakif", program: "Tıp Fakültesi", url: "https://cmspanel.yeniyuzyil.edu.tr/uploaded/files/FAKuLTE-2.pdf?v=638895679953604199" },
    { name: "İstanbul Üniversitesi", type: "devlet", program: "Tıp Fakültesi (İstanbul)", url: "https://cdn.istanbul.edu.tr/FileHandler2.ashx?f=2024-2025-katki-payi-ogrenim-ucretleri-02082024-(1).pdf" },
    { name: "İstanbul Üniversitesi (İngilizce)", type: "devlet", program: "Tıp Fakültesi (İstanbul)", url: "https://cdn.istanbul.edu.tr/FileHandler2.ashx?f=2024-2025-katki-payi-ogrenim-ucretleri-02082024-(1).pdf" },
    { name: "İstanbul Üniversitesi-Cerrahpaşa", type: "devlet", program: "Cerrahpaşa Tıp Fakültesi", url: "https://cdn.istanbul.edu.tr/FileHandler2.ashx?f=2024-2025-katki-payi-ogrenim-ucretleri-02082024-(1).pdf" },
    { name: "İstanbul Üniversitesi-Cerrahpaşa (İngilizce)", type: "devlet", program: "Cerrahpaşa Tıp Fakültesi", url: "https://cdn.istanbul.edu.tr/FileHandler2.ashx?f=2024-2025-katki-payi-ogrenim-ucretleri-02082024-(1).pdf" },
    { name: "İstinye Üniversitesi (Burslu)", type: "vakif", program: "Tıp Fakültesi", url: "https://international.istinye.edu.tr/tr/ucretler-ve-kontenjanlar" },
    { name: "İstinye Üniversitesi (%50 İndirimli)", type: "vakif", program: "Tıp Fakültesi", url: "https://international.istinye.edu.tr/tr/ucretler-ve-kontenjanlar" },
    { name: "İstinye Üniversitesi (İngilizce) (Burslu)", type: "vakif", program: "Tıp Fakültesi", url: "https://international.istinye.edu.tr/tr/ucretler-ve-kontenjanlar" },
    { name: "İstinye Üniversitesi (İngilizce) (%50 İndirimli)", type: "vakif", program: "Tıp Fakültesi", url: "https://international.istinye.edu.tr/tr/ucretler-ve-kontenjanlar" },
    { name: "İzmir Bakırçay Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://uop.bakircay.edu.tr/Sayfalar/3088/egitim-ucretleri" },
    { name: "İzmir Demokrasi Üniversitesi (İngilizce)", type: "devlet", program: "Tıp Fakültesi", url: "https://www.idu.edu.tr" },
    { name: "İzmir Ekonomi Üniversitesi (İngilizce) (Burslu)", type: "vakif", program: "Tıp Fakültesi", url: "https://www.ieu.edu.tr/aday/tr/ucretler" },
    { name: "İzmir Ekonomi Üniversitesi (İngilizce) (%50 İndirimli)", type: "vakif", program: "Tıp Fakültesi", url: "https://www.ieu.edu.tr/aday/tr/ucretler" },
    { name: "İzmir Katip Çelebi Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://www.ikcu.edu.tr" },
    { name: "İzmir Tınaztepe Üniversitesi (Ücretli)", type: "vakif", program: "Tıp Fakültesi", url: "https://tinaztepe.edu.tr/uploads/tinaz_aday/footer/iztu-okul-ucretleri-2025-07-21.pdf" },
    { name: "İzmir Tınaztepe Üniversitesi (Burslu)", type: "vakif", program: "Tıp Fakültesi", url: "https://tinaztepe.edu.tr/uploads/tinaz_aday/footer/iztu-okul-ucretleri-2025-07-21.pdf" },
    { name: "İzmir Tınaztepe Üniversitesi (%50 İndirimli)", type: "vakif", program: "Tıp Fakültesi", url: "https://tinaztepe.edu.tr/uploads/tinaz_aday/footer/iztu-okul-ucretleri-2025-07-21.pdf" },
    { name: "Kafkas Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://www.kafkas.edu.tr/dosyalar/kktbmyo/file/1HAR%C3%87%20YABANCI%20UYRUKLU%20SON%2020-08-26.pdf" },
    { name: "Kahramanmaraş Sütçü İmam Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://sbe.ksu.edu.tr/depo/belgeler/2025-2026%20Ak.D%C3%B6n.%20%C3%96%C4%9Frenim%20%C3%9Ccretleri_2506111133013383.pdf" },
    { name: "Karabük Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://iso.karabuk.edu.tr/yuklenen/dosyalar/12622072025104003.pdf" },
    { name: "Karadeniz Teknik Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://www.ktu.edu.tr/dosyalar/oidb_62d5e.pdf" },
    { name: "Karamanoğlu Mehmetbey Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://dosya.kmu.edu.tr/ogris/userfiles/files/ucret/2025-2026_Katk%C4%B1_payi_ogrenim_ucretleri_v02.pdf" },
    { name: "Kastamonu Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://iso.kastamonu.edu.tr/index.php/yerlestirme/oegrenim-uecretleri" },
    { name: "Kırıkkale Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://panel.kku.edu.tr/Content/uluslararasiogrenci/29.08.2025%20Duyurular%C4%B1/2025-2026%20E%C4%9Fitim-%C3%96%C4%9Fretim%20Y%C4%B1l%C4%B1%20Katk%C4%B1%20Pay%C4%B1%20%C3%96%C4%9Frenim%20%C3%9Ccretleri.pdf" },
    { name: "Kırklareli Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://yuo.klu.edu.tr/dosyalar/birimler/yuo/dosyalar/dosya_ve_belgeler/2025_ilk_yerlestirme/klu_2025-2026_katki_paylari_ve_ogrenim_ucretleri__1_.pdf" },
    { name: "Kırşehir Ahi Evran Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://tip.ahievran.edu.tr/arsiv-ogrenci-duyurulari/6975-fakultemiz-2024-2025-egitim-ogretim-yili-ogrenim-katki-paylari-ve-ogrenim-ucretleri-miktarlari" },
    { name: "Kocaeli Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://api.kocaeli.edu.tr/api/FileOperation/OpenFile?filePath=1084/Document/Files/2025/07/20250718_810e1_ek-3-harc-ucretleri-2025-2026-1-b62.pdf" },
    { name: "Koç Üniversitesi (İngilizce) (Burslu)", type: "vakif", program: "Tıp Fakültesi", url: "https://www.ku.edu.tr" },
    { name: "Koç Üniversitesi (İngilizce) (%50 İndirimli)", type: "vakif", program: "Tıp Fakültesi", url: "https://www.ku.edu.tr" },
    { name: "KTO Karatay Üniversitesi (Ücretli)", type: "vakif", program: "Tıp Fakültesi", url: "https://aday.karatay.edu.tr/kontenjanveucretler.html" },
    { name: "KTO Karatay Üniversitesi (Burslu)", type: "vakif", program: "Tıp Fakültesi", url: "https://aday.karatay.edu.tr/kontenjanveucretler.html" },
    { name: "Kütahya Sağlık Bilimleri Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://iso.ksbu.edu.tr/defaultx/sayfa/8357/ogrenim-ucretleri" },
    { name: "Lokman Hekim Üniversitesi (Burslu)", type: "vakif", program: "Tıp Fakültesi", url: "https://www.lokmanhekim.edu.tr/akademik/enstituler-2/saglik-bilimleri-enstitusu/program-ucretleri" },
    { name: "Lokman Hekim Üniversitesi (%25 İndirimli)", type: "vakif", program: "Tıp Fakültesi", url: "https://www.lokmanhekim.edu.tr/akademik/enstituler-2/saglik-bilimleri-enstitusu/program-ucretleri" },
    { name: "Lokman Hekim Üniversitesi (İngilizce) (Burslu)", type: "vakif", program: "Tıp Fakültesi", url: "https://www.lokmanhekim.edu.tr/akademik/enstituler-2/saglik-bilimleri-enstitusu/program-ucretleri" },
    { name: "Lokman Hekim Üniversitesi (İngilizce) (%50 İndirimli)", type: "vakif", program: "Tıp Fakültesi", url: "https://www.lokmanhekim.edu.tr/akademik/enstituler-2/saglik-bilimleri-enstitusu/program-ucretleri" },
    { name: "Lokman Hekim Üniversitesi (İngilizce) (Ücretli)", type: "vakif", program: "Tıp Fakültesi", url: "https://www.lokmanhekim.edu.tr/akademik/enstituler-2/saglik-bilimleri-enstitusu/program-ucretleri" },
    { name: "Malatya Turgut Özal Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://mtuiso.ozal.edu.tr/en/page/7527" },
    { name: "Maltepe Üniversitesi (İngilizce) (Ücretli)", type: "vakif", program: "Tıp Fakültesi", url: "https://aday.maltepe.edu.tr/burslar-ve-ucretler/" },
    { name: "Maltepe Üniversitesi (Burslu)", type: "vakif", program: "Tıp Fakültesi", url: "https://aday.maltepe.edu.tr/burslar-ve-ucretler/" },
    { name: "Maltepe Üniversitesi (İngilizce) (Burslu)", type: "vakif", program: "Tıp Fakültesi", url: "https://aday.maltepe.edu.tr/burslar-ve-ucretler/" },
    { name: "Maltepe Üniversitesi (Ücretli)", type: "vakif", program: "Tıp Fakültesi", url: "https://aday.maltepe.edu.tr/burslar-ve-ucretler/" },
    { name: "Maltepe Üniversitesi (%50 İndirimli)", type: "vakif", program: "Tıp Fakültesi", url: "https://aday.maltepe.edu.tr/burslar-ve-ucretler/" },
    { name: "Maltepe Üniversitesi (İngilizce) (%50 İndirimli)", type: "vakif", program: "Tıp Fakültesi", url: "https://aday.maltepe.edu.tr/burslar-ve-ucretler/" },
    { name: "Manisa Celal Bayar Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://uzem.cbu.edu.tr/tr/ogrenim-ucretl" },
    { name: "Mardin Artuklu Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://www.artuklu.edu.tr/dosyalar/uluslararasi_ogrenci/%C3%96%C4%9EREN%C4%B0M%20%C3%9CCRETLER%C4%B0/2025-2026%20E%C4%9E%C4%B0T%C4%B0M-%C3%96%C4%9ERET%C4%B0M%20YILI%20YABANCI%20UYRUKLU%20%C3%96%C4%9ERENC%C4%B0LER%C4%B0N%20%C3%96%C4%9EREN%C4%B0M%20%C3%9CCRETLER%C4%B0.pdf" },
    { name: "Marmara Üniversitesi (İngilizce)", type: "devlet", program: "Tıp Fakültesi", url: "https://oidb.marmara.edu.tr/dosya/oidb/katkipayi/2025-2026/2025-2026%20Lisans%26%C3%96nlisans%20Yabanc%C4%B1%20Uyruklu%20%C3%96%C4%9Frenci%20%C3%9Ccret%20Tablosu%20%C3%9CYK%20EK-PDF.pdf" },
    { name: "Mersin Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://www.mersin.edu.tr/bulut/birim_594/Uluslararasi_Ogrenci_Ofisi/20252026/Orenim_Ucretleri/2025-2026_ETM-ORETM_YILI_ULUSLARARASI_ORENC_KONTENJAN_VE_UCRETLER.pdf" },
    { name: "Muğla Sıtkı Koçman Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://uik.mu.edu.tr/Newfiles/107/Content/T_C_%20uyruklu%20%C3%B6%C4%9Frencilerin%20katk%C4%B1%20pay%C4%B1%20ve%20%C3%B6%C4%9Frenim%20%C3%BCcretleri(2025-2026).pdf" },
    { name: "Muğla Sıtkı Koçman Üniversitesi (İngilizce)", type: "devlet", program: "Tıp Fakültesi", url: "https://uik.mu.edu.tr/Newfiles/107/Content/T_C_%20uyruklu%20%C3%B6%C4%9Frencilerin%20katk%C4%B1%20pay%C4%B1%20ve%20%C3%B6%C4%9Frenim%20%C3%BCcretleri(2025-2026).pdf" },
    { name: "Necmettin Erbakan Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://erbakan.edu.tr/storage/departments/files/99999991/2025-2026%20Y.U.%20Har%C3%A7lar/2025-2026%20Y_U%20%C3%96%C4%9Frenim%20%C3%9Ccretleri.pdf" },
    { name: "Niğde Ömer Halisdemir Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://static.ohu.edu.tr/uniweb/media/portallar/oidb//sayfalar/38741/zozbpkfn.pdf" },
    { name: "Ondokuz Mayıs Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://onlineiso.omu.edu.tr/pdf/U%C3%96%C3%96%C3%9C.pdf" },
    { name: "Ondokuz Mayıs Üniversitesi (İngilizce)", type: "devlet", program: "Tıp Fakültesi", url: "https://onlineiso.omu.edu.tr/pdf/U%C3%96%C3%96%C3%9C.pdf" },
    { name: "Ordu Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://uok.odu.edu.tr/files/other/Orenci_Katk_Pay_ve_Orenim_Ucretleri.pdf" },
    { name: "Pamukkale Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://d.pau.edu.tr/7f670f6f" },
    { name: "Recep Tayyip Erdoğan Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://oidb.erdogan.edu.tr/Files/ckFiles/oidb-erdogan-edu-tr/2024-2025%20KATKI%20PAYLARI%20%20VE%20%C3%96%C4%9EREN%C4%B0M%20%C3%9CCRETLER-%20web%20-%20Copy%202.pdf" },
    { name: "Sağlık Bilimleri Üniversitesi (Hamidiye)", type: "devlet", program: "Hamidiye Tıp Fakültesi", url: "https://oidb.sbu.edu.tr/uploads/dc554b13-f1de-8376-4627-3a0814c9416d/ogrenm_ucretler.pdf" },
    { name: "Sağlık Bilimleri Üniversitesi (Gülhane)", type: "devlet", program: "Gülhane Tıp Fakültesi", url: "https://oidb.sbu.edu.tr/uploads/dc554b13-f1de-8376-4627-3a0814c9416d/ogrenm_ucretler.pdf" },
    { name: "Sakarya Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://studyatsau.sakarya.edu.tr/wp-content/uploads/2025/07/2025-2026-OGRENIM-UCRETLERI.pdf" },
    { name: "Samsun Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://uluslararasi.samsun.edu.tr/wp-content/uploads/sites/10/2025/07/Uluslararasi-Ogrenci-Ogrenim-Ucretleri-2025-2026-Egitim-Ogretim-Yili.pdf" },
    { name: "Sanko Üniversitesi (Ücretli)", type: "vakif", program: "Tıp Fakültesi", url: "https://aday.sanko.edu.tr/ucretler-16-14" },
    { name: "Sanko Üniversitesi (Burslu)", type: "vakif", program: "Tıp Fakültesi", url: "https://aday.sanko.edu.tr/ucretler-16-14" },
    { name: "Sanko Üniversitesi (%25 İndirimli)", type: "vakif", program: "Tıp Fakültesi", url: "https://aday.sanko.edu.tr/ucretler-16-14" },
    { name: "Selçuk Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://www.selcuk.edu.tr" },
    { name: "Siirt Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://www.siirt.edu.tr" },
    { name: "Sivas Cumhuriyet Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://iso.cumhuriyet.edu.tr/userfiles/1/files/2025-2026%20E%C4%9Fitim%20%C3%96%C4%9Fretim%20Y%C4%B1l%C4%B1%20%C3%96%C4%9Frenim%20%C3%9Ccretleri.xlsx" },
    { name: "Tekirdağ Namık Kemal Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://euniversite.nku.edu.tr/kullanicidosyalari/4514/files/2025-2026%20E%C4%9Fitim%20%C3%96%C4%9Fretim%20Y%C4%B1l%C4%B1%20Uluslararas%C4%B1%20%C3%96%C4%9Frenci%20Har%C3%A7lar%C4%B1.pdf" },
    { name: "TOBB Ekonomi ve Teknoloji Üniversitesi (Burslu)", type: "vakif", program: "Tıp Fakültesi", url: "https://www.etu.edu.tr/tr/ucretler/2025-2026-lisans-programlari" },
    { name: "TOBB Ekonomi ve Teknoloji Üniversitesi (%50 İndirimli)", type: "vakif", program: "Tıp Fakültesi", url: "https://www.etu.edu.tr/tr/ucretler/2025-2026-lisans-programlari" },
    { name: "TOBB Ekonomi ve Teknoloji Üniversitesi (Ücretli)", type: "vakif", program: "Tıp Fakültesi", url: "https://www.etu.edu.tr/tr/ucretler/2025-2026-lisans-programlari" },
    { name: "Tokat Gaziosmanpaşa Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://ogr.gop.edu.tr/depo/menuler/birim_10307/harclar_383/html_icerik/files/2025_G%C3%BCz_tablo.pdf" },
    { name: "Trabzon Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://oidb.trabzon.edu.tr/S/5496/uluslararasi-ogrenci-harc-ucretleri" },
    { name: "Trakya Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://bys.trakya.edu.tr/file/open/26122639" },
    { name: "Ufuk Üniversitesi (Ücretli)", type: "vakif", program: "Tıp Fakültesi", url: "https://www.ufuk.edu.tr/uploads/ogrenci_isleri/2025_yks/2025_yks_kontenjanlar-ucretler-puan-basari_sirasi_burslarr.pdf" },
    { name: "Ufuk Üniversitesi (Burslu)", type: "vakif", program: "Tıp Fakültesi", url: "https://www.ufuk.edu.tr/uploads/ogrenci_isleri/2025_yks/2025_yks_kontenjanlar-ucretler-puan-basari_sirasi_burslarr.pdf" },
    { name: "Uşak Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://www.usak.edu.tr/UsersData/duyuru/13721/%C3%96%C4%9Frenim%20%C3%9Ccretleri.pdf" },
    { name: "Üsküdar Üniversitesi (%50 İndirimli)", type: "vakif", program: "Tıp Fakültesi", url: "https://uskudar.edu.tr/ek-kontenjan-ucret-hesaplama-araci" },
    { name: "Üsküdar Üniversitesi (Ücretli)", type: "vakif", program: "Tıp Fakültesi", url: "https://uskudar.edu.tr/ek-kontenjan-ucret-hesaplama-araci" },
    { name: "Üsküdar Üniversitesi (İngilizce) (Burslu)", type: "vakif", program: "Tıp Fakültesi", url: "https://uskudar.edu.tr/ek-kontenjan-ucret-hesaplama-araci" },
    { name: "Üsküdar Üniversitesi (İngilizce) (%50 İndirimli)", type: "vakif", program: "Tıp Fakültesi", url: "https://uskudar.edu.tr/ek-kontenjan-ucret-hesaplama-araci" },
    { name: "Üsküdar Üniversitesi (İngilizce) (Ücretli)", type: "vakif", program: "Tıp Fakültesi", url: "https://uskudar.edu.tr/ek-kontenjan-ucret-hesaplama-araci" },
    { name: "Van Yüzüncü Yıl Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://www.yyu.edu.tr/images/files/2025-2026_YO%CC%88S-TR(3).pdf" },
    { name: "Yalova Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://oidb.yalova.edu.tr/tr/Duyuru/DosyaIndir?dosyaUrl=%2FUploads%2F%C3%96%C4%9Frenci%20%C4%B0%C5%9Fleri%20Daire%20Ba%C5%9Fkanl%C4%B1%C4%9F%C4%B1%2FFILE_20250714_104116930_2025-2026-uluslararasi-ogreci-ogrenim-ucretleri.pdf&dosyaAd=2025-2026%20uluslararas%C4%B1%20%C3%B6%C4%9Freci%20%C3%96%C4%9Frenim%20%C3%9Ccretleri.pdf" },
    { name: "Yeditepe Üniversitesi (İngilizce) (Ücretli)", type: "vakif", program: "Tıp Fakültesi", url: "https://yeditepe.edu.tr/tr/aday-ogrenci/ucretler" },
    { name: "Yeditepe Üniversitesi (İngilizce) (Burslu)", type: "vakif", program: "Tıp Fakültesi", url: "https://yeditepe.edu.tr/tr/aday-ogrenci/ucretler" },
    { name: "Yeditepe Üniversitesi (İngilizce) (%50 İndirimli)", type: "vakif", program: "Tıp Fakültesi", url: "https://yeditepe.edu.tr/tr/aday-ogrenci/ucretler" },
    { name: "Yozgat Bozok Üniversitesi", type: "devlet", program: "Tıp Fakültesi", url: "https://bozok.edu.tr/Dosya/19db0fc9-2.pdf" },
    { name: "Yüksek İhtisas Üniversitesi (Burslu)", type: "vakif", program: "Tıp Fakültesi", url: "https://yuksekihtisasuniversitesi.edu.tr/Uploads/duyurular_view/5e9bd2c0d22f10aa5d13ffa31df11494.xlsx" },
    { name: "Yüksek İhtisas Üniversitesi (İngilizce) (Ücretli)", type: "vakif", program: "Tıp Fakültesi", url: "https://yuksekihtisasuniversitesi.edu.tr/Uploads/duyurular_view/5e9bd2c0d22f10aa5d13ffa31df11494.xlsx" },
    { name: "Yüksek İhtisas Üniversitesi (İngilizce) (Burslu)", type: "vakif", program: "Tıp Fakültesi", url: "https://yuksekihtisasuniversitesi.edu.tr/Uploads/duyurular_view/5e9bd2c0d22f10aa5d13ffa31df11494.xlsx" },
    { name: "Yüksek İhtisas Üniversitesi (%50 İndirimli)", type: "vakif", program: "Tıp Fakültesi", url: "https://yuksekihtisasuniversitesi.edu.tr/Uploads/duyurular_view/5e9bd2c0d22f10aa5d13ffa31df11494.xlsx" },
    { name: "Yüksek İhtisas Üniversitesi (İngilizce) (%50 İndirimli)", type: "vakif", program: "Tıp Fakültesi", url: "https://yuksekihtisasuniversitesi.edu.tr/Uploads/duyurular_view/5e9bd2c0d22f10aa5d13ffa31df11494.xlsx" },
    { name: "Doğu Akdeniz Üniversitesi (İngilizce)", type: "kktc", program: "Tıp Fakültesi", url: "https://www.emu.edu.tr" },
    { name: "Girne Üniversitesi (Burslu)", type: "kktc", program: "Tıp Fakültesi", url: "https://aday.kyrenia.edu.tr/wp-content/uploads/sites/55/2025/06/18/2025-2026-Akademik-Yili-Onlisans-Lisans-Programlari-ve-KKTC-Kontenjanlari-ve-Ogrenim-Ucretleri-18.06.2025.pdf" },
    { name: "Girne Üniversitesi (%50 İndirimli)", type: "kktc", program: "Tıp Fakültesi", url: "https://aday.kyrenia.edu.tr/wp-content/uploads/sites/55/2025/06/18/2025-2026-Akademik-Yili-Onlisans-Lisans-Programlari-ve-KKTC-Kontenjanlari-ve-Ogrenim-Ucretleri-18.06.2025.pdf" },
    { name: "Yakın Doğu Üniversitesi (İngilizce) (Burslu)", type: "kktc", program: "Tıp Fakültesi", url: "https://okuloncesi.ydi.k12.tr/kayit/okul-ucretleri/" },
    { name: "Yakın Doğu Üniversitesi (Burslu)", type: "kktc", program: "Tıp Fakültesi", url: "https://okuloncesi.ydi.k12.tr/kayit/okul-ucretleri/" },
    { name: "Yakın Doğu Üniversitesi (%50 İndirimli)", type: "kktc", program: "Tıp Fakültesi", url: "https://okuloncesi.ydi.k12.tr/kayit/okul-ucretleri/" },
    { name: "Yakın Doğu Üniversitesi (İngilizce) (%50 İndirimli)", type: "kktc", program: "Tıp Fakültesi", url: "https://okuloncesi.ydi.k12.tr/kayit/okul-ucretleri/" },
    { name: "Acıbadem Mehmet Ali Aydınlar Üniversitesi (Burslu)", type: "vakif", program: "Tıp Fakültesi", url: "https://www.acibadem.edu.tr/aday/ogrenci/egitim/lisans/lisans-ogrenim-ucretleri-2025-2026" },
    { name: "Acıbadem Mehmet Ali Aydınlar Üniversitesi (İngilizce) (Burslu)", type: "vakif", program: "Tıp Fakültesi", url: "https://www.acibadem.edu.tr/aday/ogrenci/egitim/lisans/lisans-ogrenim-ucretleri-2025-2026" },
    { name: "Altınbaş Üniversitesi (İngilizce) (Burslu)", type: "vakif", program: "Tıp Fakültesi", url: "https://yataygecis.altinbas.edu.tr/wp-content/uploads/2025/06/2025-2026-YatayGecisUcret.pdf" },
    { name: "Altınbaş Üniversitesi (İngilizce) (%50 İndirimli)", type: "vakif", program: "Tıp Fakültesi", url: "https://yataygecis.altinbas.edu.tr/wp-content/uploads/2025/06/2025-2026-YatayGecisUcret.pdf" }
];

// Function to create university cards
function createUniversityCard(university) {
    const card = document.createElement('div');
    card.className = 'university-card';
    card.setAttribute('data-type', university.type);
    
    let typeClass = '';
    let typeText = '';
    
    if (university.type === 'devlet') {
        typeClass = 'type-devlet';
        typeText = 'Devlet Üniversitesi';
    } else if (university.type === 'vakif') {
        typeClass = 'type-vakif';
        typeText = 'Vakıf Üniversitesi';
    } else if (university.type === 'kktc') {
        typeClass = 'type-kktc';
        typeText = 'KKTC Üniversitesi';
    }
    
    card.innerHTML = `
        <h3 class="university-name">${university.name}</h3>
        <span class="university-type ${typeClass}">${typeText}</span>
        <p class="university-program">${university.program}</p>
        <div class="university-link">
            <a href="${university.url}" target="_blank" rel="noopener noreferrer">Öğrenim Ucretleri</a>
        </div>
    `;
    
    return card;
}

// Function to display universities
function displayUniversities(universitiesToDisplay) {
    const grid = document.getElementById('universityGrid');
    grid.innerHTML = '';
    
    universitiesToDisplay.forEach(university => {
        const card = createUniversityCard(university);
        grid.appendChild(card);
    });
}

// Filter functionality
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterType = this.getAttribute('data-filter');
            
            if (filterType === 'all') {
                displayUniversities(universities);
            } else {
                const filtered = universities.filter(uni => uni.type === filterType);
                displayUniversities(filtered);
            }
            
            // Clear search
            document.getElementById('searchInput').value = '';
        });
    });
}

// Search functionality
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
            if (activeFilter === 'all') {
                displayUniversities(universities);
            } else {
                const filtered = universities.filter(uni => uni.type === activeFilter);
                displayUniversities(filtered);
            }
            return;
        }
        
        const filtered = universities.filter(uni => 
            uni.name.toLowerCase().includes(searchTerm)
        );
        
        displayUniversities(filtered);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayUniversities(universities);
    setupFilters();
    setupSearch();
});