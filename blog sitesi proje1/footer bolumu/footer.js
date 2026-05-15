const footerContent = `
<footer class="site-footer">
    <div class="footer-container">
        <!-- Sütun 1: Marka -->
        <div class="footer-col about-col">
            <div class="footer-logo">Recep Onur<span>.</span></div>
            <p class="footer-motto">
                Teknolojinin sınırlarını birlikte keşfediyoruz. Modern ve kullanıcı odaklı dijital deneyimler
                geliştiriyorum.
            </p>
            <div class="footer-socials">
                <a href="https://github.com/recep-onur" target="_blank" rel="noopener noreferrer"
                    aria-label="GitHub Profilim" title="GitHub">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <path
                            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                        </path>
                    </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profilim"
                    title="LinkedIn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                </a>
                <a href="mailto:recep07onur@gmail.com" aria-label="E-posta Gönder" title="Email">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                </a>
            </div>
        </div>

        <!-- Sütun 2: Hızlı Menü -->
        <div class="footer-col links-col">
            <h3>Menü</h3>
            <ul>
                <li><a href="index_sayfasi/index.html">Ana Sayfa</a></li>
                <li><a href="hakkimda_sayfasi/hakkimda.html">Hakkımda</a></li>
                <li><a href="projelerim_sayfasi/projelerim.html">Projelerim</a></li>
                <li><a href="blog_sayfasi/blog.html">Blog</a></li>
                <li><a href="iletisim.html">İletişim</a></li>
            </ul>
        </div>

        <!-- Sütun 3: İletişim -->
        <div class="footer-col contact-col">
            <h3>İletişim</h3>
            <ul>
                <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <path
                            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                        </path>
                    </svg>
                    <a href="tel:+905531676207">+905531676207</a>
                </li>
                <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <a href="mailto:recep07onur@gmail.com">recep07onur@gmail.com</a>
                </li>
                <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    Bursa, Türkiye
                </li>
            </ul>
        </div>

        <!-- Sütun 4: Durum -->
        <div class="footer-col extra-col">
            <h3>Durum</h3>
            <div class="status-card">
                <div class="status-dot"></div>
                <span>Yeni projeler için müsait</span>
            </div>
            <p class="footer-time">Yerel Saat: <span id="local-time-footer">--:--</span></p>
        </div>
    </div>

    <div class="footer-bottom">
        <p>&copy; 2026 Recep Onur. Tüm hakları saklıdır.</p>
    </div>
</footer>
`;
