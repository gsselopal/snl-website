/**
 * SNL Shared Nav + Footer
 * Include this script before </body> on every page.
 * Add these placeholder divs in your HTML:
 *   <div id="snl-nav"></div>        ← replaces <nav>
 *   <div id="snl-supporters"></div> ← replaces supporters section
 *   <div id="snl-footer"></div>     ← replaces <footer>
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

  /* ── Nav ───────────────────────────────────────────────────────── */
  var navHTML = [
    '<nav>',
    '  <div class="nav-container">',
    '    <a href="/" class="nav-logo">',
    '      <img src="/assets/images/snl-logo.png" alt="SNL" style="height:38px;width:auto;">',
    '      <span>Sustainable Nanoengineering Lab</span>',
    '    </a>',
    '    <ul class="nav-links">',
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

  inject('snl-nav',        navHTML);
  inject('snl-supporters', supportersHTML);
  inject('snl-footer',     footerHTML);
})();
