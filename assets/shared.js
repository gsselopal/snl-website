/**
 * SNL Shared Nav + Footer
 * Include this script before </body> on every page.
 * Placeholders needed in HTML:
 *   <div id="snl-nav"></div>
 *   <div id="snl-supporters"></div>
 *   <div id="snl-footer"></div>
 */
(function () {
  /* ── Active page detection ─────────────────────────────────────── */
  var path = window.location.pathname.replace(/\/$/, '') || '/';
  var pageMap = {
    '':               'home',
    '/':              'home',
    '/research':      'research',
    '/publications':  'publications',
    '/team':          'team',
    '/news':          'news',
    '/media':         'media',
    '/opportunities': 'opportunities',
    '/contact':       'contact'
  };
  var active = pageMap[path] || '';

  function a(page, href, label) {
    return '<li><a href="' + href + '"' + (active === page ? ' class="active"' : '') + '>' + label + '</a></li>';
  }

  /* ── Shared mobile CSS ─────────────────────────────────────────── */
  var sharedCSS = [
    '<style id="snl-shared-css">',
    /* ── Hamburger button ── */
    '.snl-hamburger { display:none; flex-direction:column; justify-content:center; gap:5px; background:none; border:none; cursor:pointer; padding:0.4rem; z-index:1100; }',
    '.snl-hamburger span { display:block; width:24px; height:2px; background:#0f172a; border-radius:2px; transition:all 0.3s; }',
    '.snl-hamburger.open span:nth-child(1) { transform:translateY(7px) rotate(45deg); }',
    '.snl-hamburger.open span:nth-child(2) { opacity:0; }',
    '.snl-hamburger.open span:nth-child(3) { transform:translateY(-7px) rotate(-45deg); }',
    /* ── Mobile nav ── */
    /* nav wrapper needs to be a positioning context for the dropdown */
    'nav { position:sticky !important; top:0; }',
    '.nav-container { position:relative; }',
    '@media (max-width:900px) {',
    '  .snl-hamburger { display:flex; }',
    '  .nav-links {',
    '    display:none !important; flex-direction:column; gap:0 !important;',
    '    position:absolute; top:100%; left:-2rem; right:-2rem;',
    '    background:rgba(255,255,255,0.99); backdrop-filter:blur(20px);',
    '    border-bottom:1px solid #e2e8f0;',
    '    box-shadow:0 8px 24px rgba(0,0,0,0.1);',
    '    padding:0.5rem 0 1rem; z-index:9999;',
    '    margin-top:0;',
    '  }',
    '  .nav-links.snl-open { display:flex !important; }',
    '  .nav-links li { width:100%; }',
    '  .nav-links a { display:block !important; padding:0.85rem 2rem; font-size:1rem !important; border-bottom:1px solid #f1f5f9; color:#475569 !important; }',
    '  .nav-links a.active { color:#0ea5e9 !important; }',
    '  .nav-links a:hover { color:#0ea5e9 !important; background:#f8fafc; }',
    '  .nav-logo span { font-size:0.78rem !important; }',
    '}',
    /* ── Supporters bar mobile ── */
    '@media (max-width:600px) {',
    '  .supporters-section { padding:1.5rem 1rem 1rem; }',
    '  .supporter-card { min-width:100px; max-width:140px; min-height:64px; padding:0.75rem 1rem; }',
    '  .supporter-card img { max-width:90px; max-height:42px; }',
    '}',
    /* ── Footer mobile ── */
    '@media (max-width:600px) {',
    '  footer { padding:1.5rem 1rem; font-size:0.78rem; }',
    '  footer img { height:28px !important; }',
    '}',
    '</style>'
  ].join('\n');

  /* ── Nav HTML ──────────────────────────────────────────────────── */
  var navHTML = [
    '<nav>',
    '  <div class="nav-container">',
    '    <a href="/" class="nav-logo">',
    '      <img src="/assets/images/snl-logo.png" alt="SNL" style="height:38px;width:auto;">',
    '      <span>Sustainable Nanoengineering Lab</span>',
    '    </a>',
    '    <button class="snl-hamburger" id="snl-hamburger" aria-label="Toggle navigation" aria-expanded="false">',
    '      <span></span><span></span><span></span>',
    '    </button>',
    '    <ul class="nav-links" id="snl-nav-links">',
         a('home',          '/',              'Home'),
         a('research',      '/research',      'Research'),
         a('publications',  '/publications',  'Publications'),
         a('team',          '/team',          'Team'),
         a('news',          '/news',          'News'),
         a('opportunities', '/opportunities', 'Opportunities'),
         a('contact',       '/contact',       'Contact'),
    '    </ul>',
    '  </div>',
    '</nav>'
  ].join('\n');

  /* ── Supporters bar ────────────────────────────────────────────── */
  var supportersHTML = [
    '<section class="supporters-section">',
    '  <div class="supporters-container">',
    '    <p class="supporters-label">Supported By</p>',
    '    <div class="supporters-grid">',
    '      <a class="supporter-card" href="https://www.nserc-crsng.gc.ca" target="_blank" rel="noopener">',
    '        <img src="/assets/images/funder-nserc.png" alt="NSERC">',
    '      </a>',
    '      <a class="supporter-card" href="https://www.mitacs.ca" target="_blank" rel="noopener">',
    '        <img src="/assets/images/funder-mitacs.png" alt="Mitacs">',
    '      </a>',
    '      <a class="supporter-card" href="https://www.innovation.ca" target="_blank" rel="noopener">',
    '        <img src="/assets/images/funder-cfi.jpg" alt="Canada Foundation for Innovation">',
    '      </a>',
    '      <a class="supporter-card" href="https://www.agr.gc.ca/eng/agriculture-and-agri-food-canada/scap/" target="_blank" rel="noopener">',
    '        <img src="/assets/images/funder-nrc.jpg" alt="Sustainable Canadian Agricultural Partnership">',
    '      </a>',
    '      <a class="supporter-card" href="https://investnovascotia.ca" target="_blank" rel="noopener">',
    '        <img src="/assets/images/funder-novaScotia.png" alt="Invest Nova Scotia">',
    '      </a>',
    '      <a class="supporter-card" href="https://novascotia.ca/aginnovation/" target="_blank" rel="noopener">',
    '        <img src="/assets/images/funder-nsfc.png" alt="Nova Scotia Agriculture">',
    '      </a>',
    '      <a class="supporter-card" href="https://www2.gnb.ca/content/gnb/en/departments/10.html" target="_blank" rel="noopener">',
    '        <img src="/assets/images/funder-dal.png" alt="New Brunswick, Canada">',
    '      </a>',
    '      <a class="supporter-card" href="https://www.dal.ca" target="_blank" rel="noopener">',
    '        <img src="/assets/images/funder-dal.svg" alt="Dalhousie University">',
    '      </a>',
    '    </div>',
    '  </div>',
    '</section>'
  ].join('\n');

  /* ── Footer ────────────────────────────────────────────────────── */
  var footerHTML = [
    '<footer>',
    '  <div style="display:flex;align-items:center;justify-content:center;gap:1.5rem;margin-bottom:1rem;flex-wrap:wrap;">',
    '    <img src="/assets/images/funder-dal.svg" alt="Dalhousie University" style="height:36px;width:auto;opacity:0.75;">',
    '  </div>',
    '  <p style="color:#94a3b8;font-size:0.82rem;">&copy; 2025 Sustainable Nanoengineering Lab &middot; Faculty of Agriculture, Dalhousie University &middot; Truro, Nova Scotia</p>',
    '  <a href="/admin" style="display:inline-flex;align-items:center;gap:0.4rem;margin-top:0.75rem;padding:0.4rem 0.9rem;border-radius:8px;border:1.5px solid #e2e8f0;background:#fff;color:#94a3b8;font-size:0.78rem;font-weight:600;text-decoration:none;transition:all 0.2s;" onmouseover="this.style.borderColor=\'#7c3aed\';this.style.color=\'#7c3aed\'" onmouseout="this.style.borderColor=\'#e2e8f0\';this.style.color=\'#94a3b8\'">&#128272; Admin Portal</a>',
    '</footer>'
  ].join('\n');

  /* ── Inject ────────────────────────────────────────────────────── */
  function inject(id, html) {
    var el = document.getElementById(id);
    if (el) el.outerHTML = html;
  }

  // Inject shared CSS into <head>
  document.head.insertAdjacentHTML('beforeend', sharedCSS);

  inject('snl-nav',        navHTML);
  inject('snl-supporters', supportersHTML);
  inject('snl-footer',     footerHTML);

  /* ── Hamburger toggle ──────────────────────────────────────────── */
  var burger = document.getElementById('snl-hamburger');
  var links  = document.getElementById('snl-nav-links');
  if (burger && links) {
    burger.addEventListener('click', function () {
      var isOpen = links.classList.toggle('snl-open');
      burger.classList.toggle('open', isOpen);
      burger.setAttribute('aria-expanded', isOpen);
    });
    // Close menu when a nav link is clicked
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        links.classList.remove('snl-open');
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!burger.contains(e.target) && !links.contains(e.target)) {
        links.classList.remove('snl-open');
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }
})();
