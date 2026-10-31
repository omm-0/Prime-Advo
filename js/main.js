/* Prime Advo - site scripts. No dependencies. */
(function () {
  'use strict';
  var doc = document, root = doc.documentElement;
  root.classList.remove('no-js');

  var SITE = 'https://www.primeadvo.com';
  var EMAIL = 'info@primeadvo.site';
  var FORM_ENDPOINT = 'https://formsubmit.co/ajax/' + EMAIL;
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function $(s, c) { return (c || doc).querySelector(s); }
  function $$(s, c) { return Array.prototype.slice.call((c || doc).querySelectorAll(s)); }
  function esc(t) { return String(t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  /* ---------- Blog data ---------- */
  var ARROW = '<svg class="icon" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  var U = function (id) { return 'https://images.unsplash.com/photo-' + id + '?auto=format&fit=crop&w=1400&q=80'; };
  var POSTS = {
    'digital-marketing-budget-india': {
      title: 'How much should a small Indian business spend on digital marketing?',
      cat: 'Advertising', date: '2026-09-02', read: 6, img: U('1554224155-6726b3ff858f'),
      excerpt: 'A practical way to set a monthly budget based on your margins, your goal and the stage your business is at, instead of copying what a competitor spends.',
      body: [
        'Almost every new client asks the same first question: how much should we spend? The honest answer is that there is no universal figure. There is a method, though, and it starts with your numbers rather than someone else\'s.',
        '## Start from the sale, not the platform',
        'Work backwards. Decide how many new customers you want each month, then estimate how many enquiries it takes to win one, and what you can afford to pay for an enquiry while staying profitable. If an average sale leaves you Rs 4,000 in margin and one in five enquiries converts, you can pay up to roughly Rs 800 per enquiry before the maths stops working. That number, not a round figure, is the real ceiling on your budget.',
        '## Split the budget into two parts',
        'Digital marketing money goes to two places. The first is the work: strategy, content, design and management. The second is ad spend, which is paid directly to Meta or Google. Many owners budget only for one and are surprised by the other. Plan both from day one, and keep ad spend in your own account so you can see every rupee.',
        '## A sensible way to stage it',
        '- Months 1 to 3: invest in a clean profile, a clear offer and a steady content rhythm, with a small test budget on ads to learn what works.',
        '- Months 4 to 6: move budget toward the campaigns and audiences that produced qualified enquiries, and pause the rest.',
        '- After six months: scale what is proven, and reinvest part of the return rather than increasing spend all at once.',
        '## Avoid the two common mistakes',
        'The first is spending too little to learn anything. A campaign that runs for three days on a very small budget produces noise, not insight. The second is spending a lot before the basics are ready. Ads sent to a weak profile or a slow website waste money no matter how well they are targeted.',
        'If you are unsure where to begin, a short strategy call is usually enough to put a realistic range on paper. We are happy to give you an honest view, even if the answer is that you should wait a month.'
      ]
    },
    'reels-vs-posters': {
      title: 'Reels or posters: what should your brand post more of?',
      cat: 'Social Media', date: '2026-08-19', read: 5, img: U('1611162617213-7d7a39e9b1d7'),
      excerpt: 'Short videos reach new people, and static posts build trust with the people who already follow you. Here is how to balance the two.',
      body: [
        'Ask ten marketers whether reels beat posters and you will get ten confident answers. The useful answer is that they do different jobs, and a healthy content plan needs both.',
        '## What reels are good at',
        'Reels are shown to people who do not follow you yet. That makes them the best format for discovery: a new audience meeting your brand for the first time. They work especially well for showing a product in use, explaining something in under half a minute, or giving a look behind the scenes.',
        '## What posters and carousels are good at',
        'Static posts and carousels are where existing followers go to learn more. A carousel can explain a process, compare options or answer common questions in a format people can save and return to. Posters are also the cleanest way to announce offers, festivals and events with consistent branding.',
        '## A balance that tends to work',
        '- Use reels to attract: aim for them to be the larger share of your reach-focused content.',
        '- Use carousels to educate: one clear idea per slide, with a simple closing line.',
        '- Use posters to inform: offers, announcements and dates, always in your brand style.',
        '- Use stories to stay close: polls, replies and day-to-day moments.',
        '## Judge them by the right result',
        'Reach tells you a reel was seen. Saves, shares, profile visits and messages tell you it mattered. Review these monthly, keep the formats that bring enquiries, and quietly retire the ones that only bring views.'
      ]
    },
    'meta-vs-google-ads': {
      title: 'Meta ads or Google ads: which one should you start with?',
      cat: 'Advertising', date: '2026-08-05', read: 6, img: U('1551288049-bebda4e38f71'),
      excerpt: 'One platform finds people who might want what you sell. The other finds people already searching for it. Choosing well depends on your business.',
      body: [
        'Both platforms can bring customers, but they work in opposite ways. Understanding the difference saves months of trial and error.',
        '## Google reaches people who are already searching',
        'When someone types a search such as "dentist near me" or "interior designer in Bhopal", they have a need right now. Google Search ads put your business in front of that person at that moment. Intent is high, so leads tend to be closer to a decision, but each click can cost more and the number of searches for your service sets a natural limit.',
        '## Meta reaches people before they start searching',
        'Facebook and Instagram let you show your business to people who match an audience and might be interested. Nobody is searching yet, so the job of the creative is to earn attention. Meta is strong for visual products, local offers, events and brands that need to be discovered.',
        '## How to choose',
        '- If customers already search for what you sell, start with Google Search.',
        '- If your product is visual or people do not yet know to look for it, start with Meta.',
        '- If you have enough budget, run both: Meta builds awareness and Google captures the demand it creates.',
        '## Whichever you pick, set it up properly',
        'Install conversion tracking before spending, send traffic to a page that loads quickly on mobile, and give every campaign a single clear goal. Most disappointing ad results trace back to one of these three, not to the platform itself.'
      ]
    },
    'local-seo-checklist': {
      title: 'A local SEO checklist for businesses that serve one city',
      cat: 'SEO', date: '2026-07-22', read: 5, img: U('1432888498266-38ffec3eaf0a'),
      excerpt: 'If your customers live within a few kilometres of you, these are the steps that matter most for showing up on the map and in nearby searches.',
      body: [
        'Local SEO is about being found by people close to you at the moment they need you. For a clinic, restaurant, coaching centre or shop, it is often the most cost-effective marketing there is.',
        '## 1. Claim and complete your Google Business Profile',
        'This is the single biggest lever. Verify the listing, choose the most accurate main category, add your hours, phone number, website and a clear description of what you offer.',
        '## 2. Keep your name, address and phone number identical everywhere',
        'Your details should read the same on your website, social profiles and any directory listings. Small differences confuse search engines about which business is which.',
        '## 3. Add real photos and update them',
        'Photos of your premises, team and work build trust and tend to improve how often people contact you from the listing. Add new ones regularly.',
        '## 4. Ask happy customers for reviews',
        'Reviews are both a ranking signal and a trust signal. Make it easy: share a direct review link, ask in person, and reply to every review, including the critical ones, politely.',
        '## 5. Make your website match the way people search',
        '- Put your city or area in page titles and headings where it reads naturally.',
        '- Create a page for each main service you offer.',
        '- Make sure the site loads quickly and is easy to use on a phone.',
        '## 6. Be patient and measure',
        'Local results usually build over a few months. Track calls, direction requests and website visits from your profile each month, and keep improving the basics.'
      ]
    },
    'premium-brand-design': {
      title: 'What makes a brand look premium (and what does not)',
      cat: 'Branding', date: '2026-07-08', read: 5, img: U('1561070791-2526d30994b5'),
      excerpt: 'A premium look rarely comes from expensive effects. It comes from restraint, consistency and a few careful decisions repeated everywhere.',
      body: [
        'When people describe a brand as premium, they are rarely reacting to a single feature. They are reacting to the feeling that every detail was decided on purpose.',
        '## Restraint beats decoration',
        'Premium brands usually use fewer colours, fewer fonts and more empty space than ordinary ones. White space tells the viewer there is nothing to hide. Crowded layouts do the opposite.',
        '## Consistency builds trust',
        'The same logo, colours, typography and tone of voice on your signboard, social media, invoices and website tell people you are established. Inconsistency, even small, makes a business feel temporary.',
        '## Typography does more than you expect',
        'A well-chosen typeface set at a comfortable size, with generous spacing, quietly signals quality. Mixing many fonts, or using very tight text, signals the reverse.',
        '## Photography and video should look real',
        'Natural light, honest framing and well-edited images feel more credible than heavily filtered ones. Show your actual work, people and place whenever you can.',
        '## Where to start',
        '- Choose one primary and one supporting colour, plus a neutral.',
        '- Pick two typefaces at most and use them the same way everywhere.',
        '- Write a short brand guideline so everyone who touches your marketing follows it.',
        'A strong identity is built once and then protected. The payoff is that every future piece of marketing becomes easier, faster and more recognisable.'
      ]
    }
  };
  var ORDER = ['digital-marketing-budget-india', 'reels-vs-posters', 'meta-vs-google-ads', 'local-seo-checklist', 'premium-brand-design'];

  function fmtDate(d) {
    try { return new Date(d + 'T00:00:00').toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }); } catch (e) { return d; }
  }
  function card(slug, feature) {
    var p = POSTS[slug];
    return '<a class="post-card' + (feature ? ' feature' : '') + '" href="blog-post.html?post=' + slug + '" data-cat="' + esc(p.cat) + '">' +
      '<div class="photo"><img src="' + p.img + '" alt="" width="1400" height="933" loading="' + (feature ? 'eager' : 'lazy') + '"></div>' +
      '<div><div class="meta"><span class="cat">' + esc(p.cat) + '</span><span>' + fmtDate(p.date) + '</span><span>' + p.read + ' min read</span></div>' +
      '<h3>' + esc(p.title) + '</h3><p>' + esc(p.excerpt) + '</p></div></a>';
  }

  /* ---------- Header and mobile menu ---------- */
  var header = $('.site-header'), menu = $('.mobile-menu'), scrim = $('.scrim'), menuBtn = $('.menu-btn');
  function onScroll() { if (header) header.classList.toggle('scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  function setMenu(open) {
    if (!menu) return;
    menu.classList.toggle('open', open); scrim.classList.toggle('open', open);
    doc.body.classList.toggle('menu-open', open);
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) { var c = $('.close-btn', menu); if (c) c.focus(); } else if (doc.activeElement && menu.contains(doc.activeElement)) { menuBtn.focus(); }
  }
  if (menuBtn && menu) {
    menuBtn.addEventListener('click', function () { setMenu(true); });
    $('.close-btn', menu).addEventListener('click', function () { setMenu(false); });
    scrim.addEventListener('click', function () { setMenu(false); });
    $$('a', menu).forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
    doc.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
    window.addEventListener('resize', function () { if (window.innerWidth >= 960) setMenu(false); });
  }

  /* ---------- FAQ accordion ---------- */
  $$('.faq-q').forEach(function (b) {
    b.addEventListener('click', function () { b.setAttribute('aria-expanded', b.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'); });
  });

  /* ---------- Blog list ---------- */
  var grid = $('#post-grid');
  if (grid) {
    grid.innerHTML = ORDER.map(function (s, i) { return card(s, i === 0); }).join('');
    var chips = $$('.chip'), none = $('#no-posts');
    chips.forEach(function (c) {
      c.addEventListener('click', function () {
        var f = c.getAttribute('data-filter'), shown = 0;
        chips.forEach(function (x) { x.setAttribute('aria-pressed', x === c ? 'true' : 'false'); });
        $$('.post-card', grid).forEach(function (el, i) {
          var ok = f === 'All' || el.getAttribute('data-cat') === f;
          el.hidden = !ok; if (ok) { shown++; el.classList.toggle('feature', shown === 1 && f === 'All'); }
        });
        if (none) none.hidden = shown > 0;
      });
    });
  }

  /* ---------- Single article ---------- */
  var postRoot = $('#post-root');
  if (postRoot) {
    var slug = new URLSearchParams(location.search).get('post'), p = POSTS[slug];
    if (!p) {
      doc.title = 'Article not found | Prime Advo';
      postRoot.innerHTML = '<div class="article"><h1>Article not found</h1><p>We could not find that article. It may have moved.</p><p><a class="btn" href="blog.html">Back to the blog</a></p></div>';
    } else {
      var url = SITE + '/blog-post.html?post=' + slug;
      doc.title = p.title + ' | Prime Advo';
      function setMeta(sel, val) { var m = $(sel); if (m) m.setAttribute('content', val); }
      setMeta('meta[name="description"]', p.excerpt); setMeta('meta[property="og:title"]', p.title);
      setMeta('meta[property="og:description"]', p.excerpt); setMeta('meta[property="og:image"]', p.img);
      var can = doc.createElement('link'); can.rel = 'canonical'; can.href = url; doc.head.appendChild(can);
      var ld = doc.createElement('script'); ld.type = 'application/ld+json';
      ld.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: p.title, datePublished: p.date, image: p.img, author: { '@type': 'Organization', name: 'Prime Advo' }, publisher: { '@type': 'Organization', name: 'Prime Advo' }, mainEntityOfPage: url });
      doc.head.appendChild(ld);
      var html = '', inList = false;
      p.body.forEach(function (line) {
        var li = line.indexOf('- ') === 0, h = line.indexOf('## ') === 0;
        if (inList && !li) { html += '</ul>'; inList = false; }
        if (li) { if (!inList) { html += '<ul>'; inList = true; } html += '<li>' + esc(line.slice(2)) + '</li>'; }
        else if (h) html += '<h2>' + esc(line.slice(3)) + '</h2>';
        else html += '<p>' + esc(line) + '</p>';
      });
      if (inList) html += '</ul>';
      var rel = ORDER.filter(function (s) { return s !== slug; }).slice(0, 2).map(function (s) { return card(s, false); }).join('');
      postRoot.innerHTML = '<div class="article-wrap"><article class="article">' +
        '<a class="back-link" href="blog.html">' + ARROW + ' All articles</a>' +
        '<div class="meta" style="margin-top:28px"><span class="cat">' + esc(p.cat) + '</span><span>' + fmtDate(p.date) + '</span><span>' + p.read + ' min read</span></div>' +
        '<h1>' + esc(p.title) + '</h1><p class="lead">' + esc(p.excerpt) + '</p>' +
        '<div class="photo"><img src="' + p.img + '" alt="" width="1400" height="788"></div>' +
        '<div class="body">' + html + '</div>' +
        '<div class="cta-box"><h3>Want this applied to your business?</h3><p>Book a free 30-minute strategy call. We will give you an honest view of what to do first.</p><a class="btn btn-light" href="contact.html">Book a Free Strategy Call</a></div>' +
        '<div class="related"><h2>Keep reading</h2><div class="post-grid">' + rel + '</div></div></article></div>';
    }
  }

  /* ---------- Contact form ---------- */
  var form = $('#contact-form');
  if (form) {
    var plan = new URLSearchParams(location.search).get('plan'), pk = $('#package');
    if (plan && pk && $('option[value="' + plan.replace(/[^a-z-]/g, '') + '"]', pk)) pk.value = plan.replace(/[^a-z-]/g, '');
    var rules = {
      name: function (v) { return v.trim().length >= 2 ? '' : 'Please enter your full name.'; },
      email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? '' : 'Please enter a valid email address.'; },
      phone: function (v) { return v.replace(/\D/g, '').length >= 10 ? '' : 'Please enter a phone number with at least 10 digits.'; },
      service: function (v) { return v ? '' : 'Please choose a service.'; },
      budget: function (v) { return v ? '' : 'Please choose a monthly budget range.'; },
      message: function (v) { return v.trim().length >= 10 ? '' : 'Please tell us a little about your goals (at least 10 characters).'; }
    };
    function check(id) {
      var el = $('#' + id), err = $('#' + id + '-err'), box = el.closest('.field'), msg = rules[id](el.value);
      box.classList.toggle('invalid', !!msg); if (err) err.textContent = msg; el.setAttribute('aria-invalid', msg ? 'true' : 'false'); return !msg;
    }
    Object.keys(rules).forEach(function (id) {
      var el = $('#' + id); el.addEventListener('blur', function () { check(id); });
      el.addEventListener('input', function () { if (el.closest('.field').classList.contains('invalid')) check(id); });
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var bad = Object.keys(rules).filter(function (id) { return !check(id); });
      if (bad.length) { $('#' + bad[0]).focus(); return; }
      var data = {}; new FormData(form).forEach(function (v, k) { data[k] = v; });
      var ok = $('#form-success'), btn = $('button[type=submit]', form), label = btn.textContent;
      function done(msg) { form.style.display = 'none'; if (msg) $('p', ok).textContent = msg; ok.classList.add('show'); ok.setAttribute('tabindex', '-1'); ok.focus(); ok.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' }); }
      if (data._honey) { done(); return; }
      function viaMail() {
        var body = 'Name: ' + data.name + '\nEmail: ' + data.email + '\nPhone: ' + data.phone + '\nBusiness: ' + (data.business || '-') + '\nService: ' + data.service + '\nPackage: ' + (data.package || '-') + '\nBudget: ' + data.budget + '\n\n' + data.message;
        location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent('Website enquiry from ' + data.name) + '&body=' + encodeURIComponent(body);
        done('Your email app has opened with your details. Please press send there, or message us on WhatsApp if it did not open.');
      }
      btn.disabled = true; btn.textContent = 'Sending...';
      delete data._honey; data._subject = 'New website enquiry: ' + data.name; data._template = 'table'; data._captcha = 'false';
      fetch(FORM_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) })
        .then(function (r) { return r.json(); })
        .then(function (j) { if (j && (j.success === true || j.success === 'true')) done(); else throw new Error('fail'); })
        .catch(function () { btn.disabled = false; btn.textContent = label; viaMail(); });
    });
  }

  /* ---------- Reveal on scroll ---------- */
  var rev = $$('.reveal');
  if (rev.length) {
    if (!('IntersectionObserver' in window) || reduceMotion) { rev.forEach(function (n) { n.classList.add('in'); }); }
    else {
      var io = new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }); }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
      rev.forEach(function (n) { io.observe(n); });
    }
  }

  /* ---------- Stat counters ---------- */
  var counters = $$('[data-count]');
  if (counters.length && 'IntersectionObserver' in window && !reduceMotion) {
    var co = new IntersectionObserver(function (es) {
      es.forEach(function (en) {
        if (!en.isIntersecting) return; co.unobserve(en.target);
        var el = en.target, end = +el.getAttribute('data-count'), suf = el.getAttribute('data-suffix') || '', t0 = null;
        (function step(t) { if (!t0) t0 = t; var k = Math.min((t - t0) / 1200, 1), v = Math.round(end * (1 - Math.pow(1 - k, 3))); el.textContent = v + suf; if (k < 1) requestAnimationFrame(step); })(performance.now());
      });
    }, { threshold: 0.5 });
    counters.forEach(function (c) { c.textContent = '0' + (c.getAttribute('data-suffix') || ''); co.observe(c); });
  }

  /* ---------- Image fallback ---------- */
  function fail(img) { var ph = img.closest('.photo'); if (ph) ph.classList.add('img-fail'); }
  $$('img').forEach(function (img) {
    if (img.complete && img.naturalWidth === 0 && img.getAttribute('src')) fail(img);
    img.addEventListener('error', function () { fail(img); });
  });
  var mo = new MutationObserver(function (ms) { ms.forEach(function (m) { m.addedNodes.forEach(function (n) { if (n.querySelectorAll) $$('img', n).forEach(function (img) { img.addEventListener('error', function () { fail(img); }); }); }); }); });
  mo.observe(doc.body, { childList: true, subtree: true });
})();
