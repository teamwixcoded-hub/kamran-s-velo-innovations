(function () {
  'use strict';
  var D = window.VELO;

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  var ICONS = {
    web: '<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 9h18M8 21h8M12 18v3"/>',
    code: '<path d="M8 8l-5 4 5 4M16 8l5 4-5 4M14 5l-4 14"/>',
    plug: '<path d="M9 2v6M15 2v6M6 8h12v3a6 6 0 0 1-12 0V8zM12 17v5"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
    pin: '<path d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    tag: '<path d="M3 12V4h8l10 10-8 8L3 12z"/><circle cx="7.5" cy="8.5" r="1"/>',
    eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    key: '<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M16 7l3 3M14 9l2 2"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-5-5"/>',
    zap: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
    pages: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M12 12v5M9.500 14.500h5"/>',
    refresh: '<path d="M20 11a8 8 0 0 0-14-4L4 9M4 4v5h5M4 13a8 8 0 0 0 14 4l2-2M20 20v-5h-5"/>',
    card: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',
    chat: '<path d="M21 12a8 8 0 0 1-11.500 7.200L4 20l1-4.200A8 8 0 1 1 21 12z"/><path d="M9 11h6M9 14h3"/>',
    map: '<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2zM9 4v14M15 6v14"/>',
    build: '<path d="M14.700 6.300a4 4 0 0 0-5.400 5.100L3 17.700 6.300 21l6.300-6.300a4 4 0 0 0 5.100-5.400l-2.600 2.600-2.400-.6-.6-2.400z"/>',
    rocket: '<path d="M5 15c-1.500 1.300-2 4-2 4s2.700-.5 4-2M12 15l-3-3a22 22 0 0 1 2-4 10 10 0 0 1 9-4 10 10 0 0 1-4 9 22 22 0 0 1-4 2zM9 12H4s.6-3 2-4c1.600-1 5 0 5 0M12 15v5s3-.6 4-2c1-1.600 0-5 0-5"/><circle cx="15" cy="9" r="1"/>',
    building: '<path d="M4 21V5l8-2v18M12 9h8v12M8 8h1M8 12h1M8 16h1M15 13h1M15 17h1M3 21h18"/>'
  };
  function icon(name) {
    return '<span class="icon" aria-hidden="true"><svg viewBox="0 0 24 24">' + ICONS[name] + '</svg></span>';
  }
  window.veloIcon = icon;

  /* ---------- header ---------- */
  var NAV = [
    ['home', 'Home', 'index.html'],
    ['services', 'Services', 'services.html'],
    ['work', 'Work', 'work.html'],
    ['about', 'About', 'about.html'],
    ['contact', 'Contact', 'contact.html']
  ];

  class VeloHeader extends HTMLElement {
    connectedCallback() {
      var active = this.getAttribute('active');
      var links = NAV.map(function (n) {
        return '<a href="' + n[2] + '"' + (n[0] === active ? ' aria-current="page"' : '') + '>' + n[1] + '</a>';
      }).join('');
      this.innerHTML =
        '<header class="site-header"><div class="container">' +
        '<a class="logo" href="index.html" aria-label="Kamran’s Velo Innovations home"><img class="logo-img" src="assets/logo.png" width="190" height="40" alt="Kamran’s Velo Innovations"></a>' +
        '<nav class="nav" id="site-nav" aria-label="Main">' + links + '</nav>' +
        '<div class="header-cta">' +
        '<a class="btn btn-primary btn-sm" href="contact.html">Start a Project</a>' +
        '<button class="menu-btn" type="button" aria-label="Menu" aria-expanded="false" aria-controls="site-nav">' +
        '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>' +
        '</div></div></header>';
      var btn = this.querySelector('.menu-btn');
      var nav = this.querySelector('.nav');
      btn.addEventListener('click', function () {
        var open = nav.classList.toggle('open');
        btn.setAttribute('aria-expanded', open);
      });
      var self = this;
      function onScroll() { self.classList.toggle('scrolled', window.scrollY > 20); }
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }
  }

  /* ---------- footer ---------- */
  class VeloFooter extends HTMLElement {
    connectedCallback() {
      var social = Object.keys(D.social).map(function (k) {
        return '<a href="' + esc(D.social[k]) + '" target="_blank" rel="noopener">' + esc(k) + '</a>';
      }).join('');
      this.innerHTML =
        '<footer class="site-footer"><div class="container">' +
        '<div class="foot-grid">' +
        '<div><a class="logo" href="index.html"><img class="logo-img" src="assets/logo.png" width="190" height="40" alt="Kamran’s Velo Innovations"></a>' +
        '<p style="margin-top:16px;max-width:300px">Custom Wix Studio websites and Velo solutions for growing businesses.</p></div>' +
        '<div><h4>Explore</h4><ul>' +
        NAV.map(function (n) { return '<li><a href="' + n[2] + '">' + n[1] + '</a></li>'; }).join('') +
        '</ul></div>' +
        '<div><h4>Legal</h4><ul>' +
        '<li><a href="terms.html">Terms of Service</a></li>' +
        '<li><a href="refund.html">Refund &amp; Cancellation</a></li>' +
        '<li><a href="privacy.html">Privacy Policy</a></li></ul></div>' +
        '<div><h4>Get in touch</h4><ul>' +
        '<li><a href="mailto:' + D.email + '">' + D.email + '</a></li>' +
        '<li><a href="tel:' + D.phoneHref + '">' + D.phone + '</a></li>' +
        '<li>Albuquerque, NM, USA</li>' +
        '</ul></div>' +
        '</div>' +
        '<div class="socials">' + social + '</div>' +
        '<div class="legal-line">&copy; 2026 Kamran’s Velo Innovations LLC, a New Mexico limited liability company, ' +
        '1209 Mountain Road Pl NE, Ste R, Albuquerque, NM 87110, USA.</div>' +
        '</div></footer>';
    }
  }

  /* ---------- shared CTA band ---------- */
  class VeloCta extends HTMLElement {
    connectedCallback() {
      this.innerHTML =
        '<section class="cta-band"><div class="container"><div class="cta-inner reveal">' +
        '<h2>Got a project in mind?</h2>' +
        '<p>Tell us what you’re trying to build. A real person will reply within one business day.</p>' +
        '<a class="btn btn-primary" href="contact.html">Book a discovery call</a>' +
        '</div></div></section>';
    }
  }

  customElements.define('velo-header', VeloHeader);
  customElements.define('velo-footer', VeloFooter);
  customElements.define('velo-cta', VeloCta);

  /* ---------- data-driven sections ---------- */
  function projectCard(p) {
    var shot = p.image
      ? '<img src="' + esc(p.image) + '" alt="' + esc(p.name) + ' screenshot" loading="lazy">'
      : '<div class="ph">Screenshot</div>';
    return '<article class="card project reveal" data-cat="' + esc(p.categories.join('|')) + '">' +
      '<div class="shot">' + shot + '</div><div class="body">' +
      '<span class="tag">' + esc(p.categories.join(' · ')) + '</span><h3>' + esc(p.name) + '</h3>' +
      '<p>' + esc(p.result) + '</p></div></article>';
  }
  function reviewCard(r) {
    var client = D.clients.filter(function (c) { return c.name === r.name; })[0];
    var mark = client
      ? '<span class="who-logo" style="background:' + esc(client.bg) + '"><img src="' + esc(client.logo) + '" alt="" loading="lazy"></span>'
      : '<span class="avatar" aria-hidden="true">' + esc(r.name.charAt(0)) + '</span>';
    return '<figure class="card review reveal" style="margin:0"><blockquote>“' + esc(r.quote) + '”</blockquote>' +
      (r.placeholder ? '<span class="sample">Sample review</span>' : '') + '<figcaption class="who">' + mark +
      '<span><strong>' + esc(r.name) + '</strong><span>' + (r.company ? esc(r.company) + ' &middot; ' : '') + esc(r.project) + '</span></span></figcaption></figure>';
  }
  document.querySelectorAll('[data-render]').forEach(function (el) {
    var kind = el.getAttribute('data-render');
    var limit = parseInt(el.getAttribute('data-limit'), 10) || 99;
    if (kind === 'clients') el.innerHTML = D.clients.map(function (c) {
      return '<li class="client reveal" style="background:' + esc(c.bg) + '"><img ' + (c.multiply ? 'style="mix-blend-mode:multiply" ' : '') + 'src="' + esc(c.logo) + '" alt="' + esc(c.name) + '" loading="lazy"></li>';
    }).join('');
    if (kind === 'projects') el.innerHTML = D.projects.filter(function (p) { return !el.hasAttribute('data-featured') || p.featured; }).slice(0, limit).map(projectCard).join('');
    if (kind === 'reviews') {
      if (!D.reviews.length) { var sec = el.closest('section'); if (sec) sec.hidden = true; return; }
      if (D.reviews.some(function (r) { return r.draft; })) console.warn('Kamran’s Velo Innovations: some reviews are still drafts awaiting client approval.');
      var cards = D.reviews.slice(0, limit).map(reviewCard).join('');
      el.innerHTML = '<div class="review-track">' + cards + '<div class="review-dup" aria-hidden="true">' + cards + '</div></div>';
    }
  });

  document.querySelectorAll('[data-icon]').forEach(function (el) {
    if (!el.classList.contains('node')) el.className = 'icon';
    el.setAttribute('aria-hidden', 'true');
    el.innerHTML = '<svg viewBox="0 0 24 24">' + ICONS[el.getAttribute('data-icon')] + '</svg>';
  });

  /* ---------- work filter ---------- */
  document.querySelectorAll('.filters').forEach(function (bar) {
    var chips = bar.querySelectorAll('.chip');
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        chips.forEach(function (c) { c.setAttribute('aria-pressed', c === chip); });
        var cat = chip.getAttribute('data-filter');
        document.querySelectorAll('.project').forEach(function (p) {
          p.hidden = cat !== 'all' && p.getAttribute('data-cat').split('|').indexOf(cat) === -1;
        });
      });
    });
  });

  /* ---------- contact form ---------- */
  var form = document.getElementById('enquiry-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = true;
      form.querySelectorAll('[required]').forEach(function (inp) {
        var valid = inp.value.trim() !== '' && (inp.type !== 'email' || /^\S+@\S+\.\S+$/.test(inp.value));
        inp.closest('.field').classList.toggle('invalid', !valid);
        if (!valid) ok = false;
      });
      if (!ok) return;
      var f = new FormData(form);
      var body = 'Name: ' + f.get('name') + '\nEmail: ' + f.get('email') + '\nService: ' + f.get('service') + '\n\n' + f.get('message');
      // No backend yet: hand the enquiry to the visitor's mail app. Swap for a Velo/Wix endpoint when available.
      window.location.href = 'mailto:' + D.email + '?subject=' + encodeURIComponent('Enquiry: ' + f.get('service')) + '&body=' + encodeURIComponent(body);
      form.querySelector('.form-ok').classList.add('show');
    });
  }

  /* ---------- design effects ---------- */
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // scroll progress bar
  var bar = document.createElement('div');
  bar.className = 'progress';
  document.body.appendChild(bar);
  function progress() {
    var h = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = 'scaleX(' + (h > 0 ? Math.min(1, scrollY / h) : 0) + ')';
  }
  addEventListener('scroll', progress, { passive: true });
  progress();

  // card spotlight follows the cursor
  document.addEventListener('pointermove', function (e) {
    var card = e.target.closest && e.target.closest('.card');
    if (!card) return;
    var r = card.getBoundingClientRect();
    card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    card.style.setProperty('--my', (e.clientY - r.top) + 'px');
  });

  // rotating headline word
  var rot = document.querySelector('.rotator');
  if (rot && !reduce) {
    var words = rot.getAttribute('data-words').split('|'), wi = 0;
    setInterval(function () {
      rot.classList.add('out');
      setTimeout(function () {
        wi = (wi + 1) % words.length;
        rot.textContent = words[wi];
        rot.classList.remove('out');
      }, 350);
    }, 2600);
  }

  // hero parallax tilt
  var hv = document.querySelector('.hero-visual');
  if (hv && !reduce && matchMedia('(hover: hover)').matches) {
    document.querySelector('.hero').addEventListener('pointermove', function (e) {
      var r = hv.getBoundingClientRect();
      var x = (e.clientX - (r.left + r.width / 2)) / r.width;
      var y = (e.clientY - (r.top + r.height / 2)) / r.height;
      hv.style.setProperty('--rx', (-y * 6).toFixed(2) + 'deg');
      hv.style.setProperty('--ry', (x * 8).toFixed(2) + 'deg');
      hv.style.setProperty('--tx', (x * 14).toFixed(1) + 'px');
      hv.style.setProperty('--ty', (y * 10).toFixed(1) + 'px');
    });
  }

  // animated counters
  function countUp(el) {
    var to = +el.getAttribute('data-count'), from = +(el.getAttribute('data-from') || 0);
    var suffix = el.getAttribute('data-suffix') || '', t0 = null;
    function step(t) {
      if (t0 === null) t0 = t;
      var p = Math.min(1, (t - t0) / 1400), e = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(from + (to - from) * e) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window && !reduce) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { countUp(en.target); co.unobserve(en.target); } });
    }, { threshold: 0.6 });
    counters.forEach(function (c) { co.observe(c); });
  }

  // stagger siblings
  document.querySelectorAll('.grid, .clients').forEach(function (g) {
    Array.prototype.forEach.call(g.children, function (c, i) { c.style.transitionDelay = (i * 80) + 'ms'; });
  });

  /* ---------- scroll reveal ---------- */
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); setTimeout(function () { en.target.style.transitionDelay = ''; }, 1400); }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }
})();
