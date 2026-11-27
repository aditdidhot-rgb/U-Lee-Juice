/* =========================================================
   U LEE JUICE — Konfigurasi Katalog & Interaksi Website
   =========================================================
   PANDUAN SINGKAT EDIT:
   1. Untuk mengubah nomor WhatsApp atau link Google Maps,
      edit bagian SITE_CONFIG di bawah ini.
   2. Untuk mengubah nama produk, kategori, atau foto produk,
      edit daftar di dalam array PRODUCTS.
   3. Untuk menambah menu baru, salin 1 baris di PRODUCTS lalu
      sesuaikan id, name, category, dan image.
   ========================================================= */

const SITE_CONFIG = {
  brandName: 'U LEE JUICE',
  whatsappNumber: '6285740602334',
  whatsappDisplay: '085740602334',
  mapsUrl: 'https://maps.app.goo.gl/xxgviFwp5TJLemdB6'
};

const CATEGORIES = [
  { id: 'all', label: 'All Menu' },
  { id: 'fresh-juice', label: 'Fresh Juice' },
  { id: 'fresh-juice-mix', label: 'Fresh Juice Mix' },
  { id: 'non-juice', label: 'Non Juice' },
  { id: 'cemilan', label: 'Cemilan' },
  { id: 'seblak', label: 'Seblak' },
  { id: 'topping', label: 'Topping' }
];

const PRODUCTS = [
  // ================= FRESH JUICE (16) =================
  { id: 'jus-lemon', name: 'Jus Lemon', category: 'fresh-juice', image: 'images/products/jus-lemon.jpg' },
  { id: 'jus-apel', name: 'Jus Apel', category: 'fresh-juice', image: 'images/products/jus-apel.jpg' },
  { id: 'jus-alpukat', name: 'Jus Alpukat', category: 'fresh-juice', image: 'images/products/jus-alpukat.jpg' },
  { id: 'jus-sirsat', name: 'Jus Sirsat', category: 'fresh-juice', image: 'images/products/jus-sirsat.jpg' },
  { id: 'jus-jambu', name: 'Jus Jambu', category: 'fresh-juice', image: 'images/products/jus-jambu.jpg' },
  { id: 'jus-buah-nanas', name: 'Jus Buah Nanas', category: 'fresh-juice', image: 'images/products/jus-buah-nanas.jpg' },
  { id: 'jus-naga', name: 'Jus Naga', category: 'fresh-juice', image: 'images/products/jus-naga.jpg' },
  { id: 'jus-melon', name: 'Jus Melon', category: 'fresh-juice', image: 'images/products/jus-melon.jpg' },
  { id: 'jus-jeruk', name: 'Jus Jeruk', category: 'fresh-juice', image: 'images/products/jus-jeruk.jpg' },
  { id: 'jus-mangga', name: 'Jus Mangga', category: 'fresh-juice', image: 'images/products/jus-mangga.jpg' },
  { id: 'jus-tomat', name: 'Jus Tomat', category: 'fresh-juice', image: 'images/products/jus-tomat.jpg' },
  { id: 'jus-nangka', name: 'Jus Nangka', category: 'fresh-juice', image: 'images/products/jus-nangka.jpg' },
  { id: 'jus-semangka', name: 'Jus Semangka', category: 'fresh-juice', image: 'images/products/jus-semangka.jpg' },
  { id: 'jus-stroberi', name: 'Jus Stroberi', category: 'fresh-juice', image: 'images/products/jus-stroberi.jpg' },
  { id: 'jus-durian', name: 'Jus Durian', category: 'fresh-juice', image: 'images/products/jus-durian.jpg' },
  { id: 'jus-pisang', name: 'Jus Pisang', category: 'fresh-juice', image: 'images/products/jus-pisang.jpg' },

  // ================= FRESH JUICE MIX (6) =================
  { id: 'wortel-susu', name: 'Wortel Susu', category: 'fresh-juice-mix', image: 'images/products/wortel-susu.jpg' },
  { id: 'wortel-jeruk', name: 'Wortel Jeruk', category: 'fresh-juice-mix', image: 'images/products/wortel-jeruk.jpg' },
  { id: 'wortel-tomat', name: 'Wortel Tomat', category: 'fresh-juice-mix', image: 'images/products/wortel-tomat.jpg' },
  { id: 'pisang-stroberi', name: 'Pisang Stroberi', category: 'fresh-juice-mix', image: 'images/products/pisang-stroberi.jpg' },
  { id: 'alpukat-wortel', name: 'Alpukat Wortel', category: 'fresh-juice-mix', image: 'images/products/alpukat-wortel.jpg' },
  { id: 'alpukat-tomat', name: 'Alpukat Tomat', category: 'fresh-juice-mix', image: 'images/products/alpukat-tomat.jpg' },

  // ================= NON JUICE (8) =================
  { id: 'alpukat-kocok', name: 'Alpukat Kocok', category: 'non-juice', image: 'images/products/alpukat-kocok.jpg' },
  { id: 'es-teler', name: 'Es Teler', category: 'non-juice', image: 'images/products/es-teler.jpg' },
  { id: 'sop-buah', name: 'Sop Buah', category: 'non-juice', image: 'images/products/sop-buah.jpg' },
  { id: 'es-capcin', name: 'Es Capcin', category: 'non-juice', image: 'images/products/es-capcin.jpg' },
  { id: 'milkshake', name: 'Milkshake', category: 'non-juice', image: 'images/products/milkshake.jpg' },
  { id: 'es-coklat-keju', name: 'Es Coklat Keju', category: 'non-juice', image: 'images/products/es-coklat-keju.jpg' },
  { id: 'semangka-kocok', name: 'Semangka Kocok', category: 'non-juice', image: 'images/products/semangka-kocok.jpg' },
  { id: 'mangga-kocok', name: 'Mangga Kocok', category: 'non-juice', image: 'images/products/mangga-kocok.jpg' },

  // ================= CEMILAN (4) =================
  { id: 'gronthol-londho-jasuke', name: 'Gronthol Londho (Jasuke)', category: 'cemilan', image: 'images/products/gronthol-londho-jasuke.jpg' },
  { id: 'indomie-telur', name: 'Indomie Telur', category: 'cemilan', image: 'images/products/indomie-telur.jpg' },
  { id: 'penthol-ngosos', name: 'Penthol Ngosos', category: 'cemilan', image: 'images/products/penthol-ngosos.jpg' },
  { id: 'baso-seafood-suki-suki', name: 'Baso Seafood / Suki-Suki', category: 'cemilan', image: 'images/products/baso-seafood-suki-suki.jpg' },

  // ================= SEBLAK (5) =================
  { id: 'seblak-biasa', name: 'Seblak Biasa', category: 'seblak', image: 'images/products/seblak-biasa.jpg' },
  { id: 'seblak-komplit', name: 'Seblak Komplit', category: 'seblak', image: 'images/products/seblak-komplit.jpg' },
  { id: 'seblak-goreng', name: 'Seblak Goreng', category: 'seblak', image: 'images/products/seblak-goreng.jpg' },
  { id: 'seblak-asam-manis', name: 'Seblak Asam Manis', category: 'seblak', image: 'images/products/seblak-asam-manis.jpg' },
  { id: 'seblak-sayur', name: 'Seblak Sayur', category: 'seblak', image: 'images/products/seblak-sayur.jpg' },

  // ================= TOPPING (3) =================
  { id: 'cuanki', name: 'Cuanki', category: 'topping', image: 'images/products/cuanki.jpg' },
  { id: 'chikuwa', name: 'Chikuwa', category: 'topping', image: 'images/products/chikuwa.jpg' },
  { id: 'dumpling', name: 'Dumpling', category: 'topping', image: 'images/products/dumpling.jpg' }
];

/* =========================================================
   STATE & FALLBACK GAMBAR
   ========================================================= */
let activeCategory = 'all';

function buildFallbackSvgUri(title) {
  const safeTitle = String(title).replace(/[<>&"']/g, '');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800">
    <rect width="800" height="800" fill="#FFF9EC"/>
    <circle cx="400" cy="360" r="190" fill="#F4EFE0"/>
    <circle cx="400" cy="360" r="130" fill="#568B43" opacity="0.14"/>
    <text x="400" y="355" text-anchor="middle" font-family="Georgia, serif" font-weight="bold" font-size="30" fill="#204B25">U LEE JUICE</text>
    <text x="400" y="395" text-anchor="middle" font-family="sans-serif" font-size="16" letter-spacing="4" fill="#568B43">FRESH HEALTHY HAPPIER</text>
    <text x="400" y="650" text-anchor="middle" font-family="sans-serif" font-weight="600" font-size="28" fill="#204B25">${safeTitle}</text>
  </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function handleProductImageError(imgEl, productName) {
  if (imgEl.dataset.fallbackApplied === '1') return;
  imgEl.dataset.fallbackApplied = '1';
  imgEl.src = buildFallbackSvgUri(productName);
}

/* =========================================================
   RENDER KATALOG PRODUK (HANYA FOTO & NAMA PRODUK)
   ========================================================= */
function renderProducts() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  // Jika kartu sudah dirender statis (versi portable), cukup pasang event lightbox
  const existingCards = grid.querySelectorAll('.product-card');
  if (existingCards.length > 0) {
    existingCards.forEach((card) => {
      const id = card.dataset.id;
      const product = PRODUCTS.find((item) => item.id === id);
      if (!product || card.dataset.bound === '1') return;
      card.dataset.bound = '1';
      card.addEventListener('click', () => openLightbox(product));
      card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openLightbox(product);
        }
      });
    });
    return;
  }

  grid.innerHTML = '';
  const fragment = document.createDocumentFragment();

  PRODUCTS.forEach((product, index) => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.dataset.id = product.id;
    card.dataset.category = product.category;
    card.style.animationDelay = `${Math.min(index * 18, 220)}ms`;
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', product.name);

    const media = document.createElement('div');
    media.className = 'product-media';

    const img = document.createElement('img');
    img.className = 'product-img';
    img.src = product.image;
    img.alt = product.name;
    img.loading = 'lazy';
    img.width = 400;
    img.height = 400;
    img.addEventListener('error', () => handleProductImageError(img, product.name));

    const nameEl = document.createElement('h3');
    nameEl.className = 'product-name';
    nameEl.textContent = product.name;

    media.appendChild(img);
    card.appendChild(media);
    card.appendChild(nameEl);

    card.addEventListener('click', () => openLightbox(product));
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openLightbox(product);
      }
    });

    fragment.appendChild(card);
  });

  grid.appendChild(fragment);
}

function setupCategoryFilters() {
  const tabsContainer = document.getElementById('categoryTabs');
  const grid = document.getElementById('productGrid');
  if (!tabsContainer) return;

  tabsContainer.addEventListener('click', (event) => {
    const tab = event.target.closest('.category-tab');
    if (!tab) return;

    const nextCategory = tab.dataset.category || 'all';
    activeCategory = nextCategory;

    if (typeof tab.scrollIntoView === 'function') {
      tab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }

    if (grid) {
      const visibleCards = Array.from(grid.querySelectorAll('.product-card')).filter(
        (card) => nextCategory === 'all' || card.dataset.category === nextCategory
      );
      visibleCards.forEach((card, idx) => {
        card.style.animation = 'none';
        void card.offsetWidth;
        card.style.animation = '';
        card.style.animationDelay = `${Math.min(idx * 24, 240)}ms`;
      });
    }
  });

  tabsContainer.querySelectorAll('.category-tab').forEach((tab) => {
    tab.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        tab.click();
      }
    });
  });
}

/* =========================================================
   LIGHTBOX PREVIEW FOTO PRODUK
   ========================================================= */
function openLightbox(product) {
  const backdrop = document.getElementById('lightboxBackdrop');
  const imgEl = document.getElementById('lightboxImage');
  const titleEl = document.getElementById('lightboxTitle');
  if (!backdrop || !product) return;

  imgEl.dataset.fallbackApplied = '0';
  imgEl.src = product.image;
  imgEl.alt = product.name;
  imgEl.onerror = () => handleProductImageError(imgEl, product.name);

  titleEl.textContent = product.name;
  backdrop.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const backdrop = document.getElementById('lightboxBackdrop');
  if (!backdrop || backdrop.hidden) return;
  backdrop.hidden = true;
  document.body.style.overflow = '';
}

function setupLightbox() {
  const backdrop = document.getElementById('lightboxBackdrop');
  const closeBtn = document.getElementById('closeLightboxBtn');

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (backdrop) {
    backdrop.addEventListener('click', (event) => {
      if (event.target === backdrop) closeLightbox();
    });
  }
}

/* =========================================================
   NAVBAR, HAMBURGER MENU & SCROLL SPY
   ========================================================= */
function setupNavigation() {
  const navbar = document.getElementById('navbar');
  const toggleCheck = document.getElementById('navToggleCheck');
  const toggleBtn = document.getElementById('navToggleBtn');
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));
  const sections = navLinks
    .map((link) => {
      const targetId = link.getAttribute('href');
      return targetId ? document.querySelector(targetId) : null;
    })
    .filter(Boolean);

  function closeMobileMenu() {
    if (toggleCheck) toggleCheck.checked = false;
  }

  if (toggleBtn && toggleCheck) {
    toggleBtn.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleCheck.checked = !toggleCheck.checked;
      }
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMobileMenu();
      navLinks.forEach((l) => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  function updateOnScroll() {
    const scrollY = window.scrollY;
    if (navbar) {
      navbar.classList.toggle('scrolled', scrollY > 20);
    }

    const scrollBottom = window.innerHeight + scrollY >= document.documentElement.scrollHeight - 40;
    let currentSectionId = sections[0]?.id || 'home';

    if (scrollBottom && sections.length > 0) {
      currentSectionId = sections[sections.length - 1].id;
    } else {
      const offset = scrollY + 140;
      sections.forEach((section) => {
        if (offset >= section.offsetTop) {
          currentSectionId = section.id;
        }
      });
    }

    navLinks.forEach((link) => {
      const isMatch = link.getAttribute('href') === `#${currentSectionId}`;
      link.classList.toggle('active', isMatch);
    });
  }

  window.addEventListener('scroll', updateOnScroll, { passive: true });
  updateOnScroll();

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMobileMenu();
      closeLightbox();
    }
  });
}

/* =========================================================
   SCROLL REVEAL ANIMATION
   ========================================================= */
function setupScrollAnimations() {
  const elements = Array.from(document.querySelectorAll('.reveal'));
  if (!('IntersectionObserver' in window)) {
    elements.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  document.documentElement.classList.add('js-animate');

  function revealVisibleInViewport() {
    const triggerBottom = window.innerHeight * 1.05;
    elements.forEach((el) => {
      if (!el.classList.contains('is-visible')) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerBottom) {
          el.classList.add('is-visible');
        }
      }
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.04, rootMargin: '0px 0px -16px 0px' }
  );

  elements.forEach((el) => observer.observe(el));
  revealVisibleInViewport();

  const heroImage = document.querySelector('.hero-image');
  const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let ticking = false;

  window.addEventListener(
    'scroll',
    () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        revealVisibleInViewport();
        if (heroImage && !reducedMotion) {
          const offset = Math.min(window.scrollY * 0.08, 28);
          heroImage.style.transform = `translateY(${offset}px) scale(1.03)`;
        }
        ticking = false;
      });
    },
    { passive: true }
  );
}

/* =========================================================
   INIT
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  setupNavigation();
  setupCategoryFilters();
  setupLightbox();
  renderProducts();
  setupScrollAnimations();
});
