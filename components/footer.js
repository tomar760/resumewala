/* ============================================================
   ResumeWala — components/footer.js
   Auto-inject footer on every page
   Usage: <script src="../components/footer.js"></script>
          or <script src="components/footer.js"></script>
   ============================================================ */

(function () {
  const year = new Date().getFullYear();

  const footerHTML = `
  <footer id="footer">

    <!-- Top grid -->
    <div class="footer-top">

      <!-- Brand col -->
      <div>
        <div class="footer-brand-logo">
          <div class="footer-brand-icon">R</div>
          <span class="footer-brand-name">Resume<span>Wala</span></span>
        </div>
        <p class="footer-tagline">
          India ka apna AI Resume Builder — Hindi mein bolo,
          professional English mein resume banega. 2 minute mein.
        </p>
        <div class="footer-socials">
          <a href="#" class="footer-social" aria-label="Instagram">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="#" class="footer-social" aria-label="Twitter / X">
            <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="#" class="footer-social" aria-label="LinkedIn">
            <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="#" class="footer-social" aria-label="YouTube">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Product -->
      <div>
        <p class="footer-col-title">Product</p>
        <nav class="footer-links">
          <a href="templates.html" class="footer-link">Templates</a>
          <a href="editor.html"    class="footer-link">Resume Editor</a>
          <a href="pricing.html"   class="footer-link">Pricing</a>
          <a href="#"              class="footer-link">AI Resume Builder</a>
          <a href="#"              class="footer-link">ATS Score Checker</a>
          <a href="#"              class="footer-link">Cover Letter</a>
        </nav>
      </div>

      <!-- Resources -->
      <div>
        <p class="footer-col-title">Resources</p>
        <nav class="footer-links">
          <a href="#" class="footer-link">Resume Tips</a>
          <a href="#" class="footer-link">Interview Guide</a>
          <a href="#" class="footer-link">Salary Guide India</a>
          <a href="#" class="footer-link">Job Search Tips</a>
          <a href="#" class="footer-link">Blog</a>
          <a href="#" class="footer-link">FAQ</a>
        </nav>
      </div>

      <!-- Company -->
      <div>
        <p class="footer-col-title">Company</p>
        <nav class="footer-links">
          <a href="#" class="footer-link">About Us</a>
          <a href="#" class="footer-link">Contact</a>
          <a href="#" class="footer-link">Careers</a>
          <a href="#" class="footer-link">Press</a>
          <a href="#" class="footer-link">Affiliates</a>
        </nav>

        <p class="footer-col-title" style="margin-top:24px">Support</p>
        <nav class="footer-links">
          <a href="mailto:support@resumewala.in" class="footer-link">support@resumewala.in</a>
          <a href="#" class="footer-link">Help Center</a>
        </nav>
      </div>

    </div>

    <!-- Bottom bar -->
    <div class="footer-bottom">
      <p class="footer-copy">
        © ${year} ResumeWala. Sab rights reserved. Made with ❤️ in India 🇮🇳
      </p>
      <div class="footer-bottom-links">
        <a href="#" class="footer-bottom-link">Privacy Policy</a>
        <a href="#" class="footer-bottom-link">Terms of Service</a>
        <a href="#" class="footer-bottom-link">Refund Policy</a>
      </div>
    </div>

    <!-- Back to top -->
    <button id="back-to-top"
      style="
        position:fixed; bottom:24px; right:24px; z-index:500;
        width:44px; height:44px; border-radius:50%;
        background:var(--brand); color:white;
        display:flex; align-items:center; justify-content:center;
        box-shadow:var(--shadow-md); cursor:pointer; border:none;
        opacity:0; transform:translateY(20px); pointer-events:none;
        transition: opacity 0.3s ease, transform 0.3s ease;
        font-size:1.1rem;
      "
      aria-label="Back to top"
    >↑</button>

  </footer>
  `;

  document.body.insertAdjacentHTML('beforeend', footerHTML);
})();
