
//  Merkezi Footer Yükleyici ve Yerel Saat Fonksiyonları
// ===================================================

function loadFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    
    // footerContent değişkeni footer.js dosyasından gelmektedir
    if (footerPlaceholder && typeof footerContent !== 'undefined') {
        let content = footerContent;

        // EĞER alt klasörlerdeysek linkleri düzelt
        const isSubfolder = window.location.pathname.includes('index_sayfasi') || 
                            window.location.pathname.includes('hakkimda_sayfasi') ||
                            window.location.pathname.includes('blog_sayfasi') ||
                            window.location.pathname.includes('projelerim_sayfasi');

        if (isSubfolder) {
            // index_sayfasi linkini düzelt
            if (window.location.pathname.includes('index_sayfasi')) {
                content = content.replace(/href="index_sayfasi\/index.html"/g, 'href="index.html"');
            } else {
                content = content.replace(/href="index_sayfasi\/index.html"/g, 'href="../index_sayfasi/index.html"');
            }

            // hakkimda_sayfasi linkini düzelt
            if (window.location.pathname.includes('hakkimda_sayfasi')) {
                content = content.replace(/href="hakkimda_sayfasi\/hakkimda.html"/g, 'href="hakkimda.html"');
            } else {
                content = content.replace(/href="hakkimda_sayfasi\/hakkimda.html"/g, 'href="../hakkimda_sayfasi/hakkimda.html"');
            }

            // blog_sayfasi linkini düzelt
            if (window.location.pathname.includes('blog_sayfasi')) {
                content = content.replace(/href="blog_sayfasi\/blog.html"/g, 'href="blog.html"');
            } else {
                content = content.replace(/href="blog_sayfasi\/blog.html"/g, 'href="../blog_sayfasi/blog.html"');
            }

            // projelerim_sayfasi linkini düzelt
            if (window.location.pathname.includes('projelerim_sayfasi')) {
                content = content.replace(/href="projelerim_sayfasi\/projelerim.html"/g, 'href="projelerim.html"');
            } else {
                content = content.replace(/href="projelerim_sayfasi\/projelerim.html"/g, 'href="../projelerim_sayfasi/projelerim.html"');
            }
            
            // Diğer linkleri üst klasöre çıkacak şekilde düzelt (iletisim.html henüz dışarıda)
            content = content.replace(/href="iletisim.html"/g, 'href="../iletisim.html"');
        }

        footerPlaceholder.innerHTML = content;
        
        // Footer yüklendikten sonra saati başlat
        updateTime();
        setInterval(updateTime, 1000);
    } else {
        console.warn('Footer içeriği (footerContent) veya yer tutucu (#footer-placeholder) bulunamadı.');
    }
}

function updateTime() {
    const timeEl = document.getElementById('local-time-footer');
    if (timeEl) {
        const now = new Date();
        const timeStr = now.toLocaleTimeString('tr-TR', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        timeEl.textContent = timeStr;
    }
}

// Sayfa içeriği yüklendiğinde footer'ı otomatik olarak yerleştir
document.addEventListener('DOMContentLoaded', loadFooter);
