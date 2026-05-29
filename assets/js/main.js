const NAV_CONFIG = [
  {
    section: '入门',
    items: [
      { label: '入门概览', href: 'overview.html', icon: 'home' },
      { label: '开发环境搭建', href: 'setup.html', icon: 'wrench' },
      { label: '构建系统与配置', href: 'build-system.html', icon: 'cubes' }
    ]
  },
  {
    section: '核心',
    items: [
      { label: '内核核心', href: 'kernel.html', icon: 'cpu' },
      { label: '设备驱动模型', href: 'drivers.html', icon: 'chip' }
    ]
  },
  {
    section: '进阶',
    items: [
      { label: '网络与通信', href: 'networking.html', icon: 'globe' },
      { label: '高级特性', href: 'advanced.html', icon: 'rocket' }
    ]
  },
  {
    section: '实战',
    items: [
      { label: '实战项目', href: 'projects.html', icon: 'flask' }
    ]
  }
];

const ICONS = {
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  wrench: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  cubes: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>',
  cpu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>',
  chip: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  rocket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',
  flask: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 3h6"/><path d="M10 9V3h4v6l5 8.5a2 2 0 0 1-1.7 3H6.7a2 2 0 0 1-1.7-3L10 9z"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
  zephyr: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7v10l10 5 10-5V7L12 2z"/><path d="M12 22V12"/><path d="M22 7L12 12 2 7"/></svg>'
};

function getCurrentPage() {
  const path = window.location.pathname;
  if (path.endsWith('index.html') || path === '/' || path.endsWith('/')) return 'home';
  const match = path.match(/\/pages\/(.+)\.html/);
  return match ? match[1] : 'home';
}

function getPagePrefix() {
  return getCurrentPage() === 'home' ? 'pages/' : '';
}

function renderNavbar() {
  const navbar = document.createElement('nav');
  navbar.className = 'navbar';
  const indexHref = getCurrentPage() === 'home' ? 'index.html' : '../index.html';
  navbar.innerHTML = `
    <button class="mobile-menu-btn" onclick="toggleSidebar()">
      ${ICONS.menu}
    </button>
    <a href="${indexHref}" class="navbar-brand">
      ${ICONS.zephyr}
      <span>Zephyr 知识库</span>
    </a>
    <div class="navbar-search">
      ${ICONS.search}
      <input type="text" id="search-input" placeholder="搜索知识点..." autocomplete="off">
      <div class="search-results" id="search-results"></div>
    </div>
  `;
  document.body.prepend(navbar);
}

function renderSidebar() {
  const currentPage = getCurrentPage();
  const prefix = getPagePrefix();
  const sidebar = document.createElement('aside');
  sidebar.className = 'sidebar';
  sidebar.id = 'sidebar';

  let html = '';
  NAV_CONFIG.forEach(section => {
    html += `<div class="sidebar-section">`;
    html += `<div class="sidebar-section-title">${section.section}</div>`;
    section.items.forEach(item => {
      const isActive = currentPage === item.href.replace('.html', '');
      html += `<a href="${prefix}${item.href}" class="sidebar-link${isActive ? ' active' : ''}">
        ${ICONS[item.icon]}
        <span>${item.label}</span>
      </a>`;
    });
    html += `</div>`;
  });
  sidebar.innerHTML = html;

  const overlay = document.createElement('div');
  overlay.className = 'sidebar-overlay';
  overlay.id = 'sidebar-overlay';
  overlay.onclick = toggleSidebar;

  document.body.appendChild(sidebar);
  document.body.appendChild(overlay);
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('active');
}

function initCodeCopy() {
  document.querySelectorAll('.code-block-copy').forEach(btn => {
    btn.addEventListener('click', () => {
      const code = btn.closest('.code-block').querySelector('code');
      navigator.clipboard.writeText(code.textContent).then(() => {
        btn.textContent = '已复制';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.textContent = '复制';
          btn.classList.remove('copied');
        }, 2000);
      });
    });
  });
}

function initToc() {
  const toc = document.querySelector('.toc');
  if (!toc) return;

  const headings = document.querySelectorAll('.content h2, .content h3');
  if (headings.length === 0) {
    toc.remove();
    return;
  }

  let html = '<div class="toc-title">目录</div>';
  headings.forEach((h, i) => {
    const id = h.id || `heading-${i}`;
    h.id = id;
    const indent = h.tagName === 'H3' ? 'padding-left: 12px;' : '';
    html += `<a href="#${id}" class="toc-link" style="${indent}">${h.textContent}</a>`;
  });
  toc.innerHTML = html;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        toc.querySelectorAll('.toc-link').forEach(l => l.classList.remove('active'));
        const link = toc.querySelector(`a[href="#${entry.target.id}"]`);
        if (link) link.classList.add('active');
      }
    });
  }, { rootMargin: '-80px 0px -70% 0px' });

  headings.forEach(h => observer.observe(h));
}

function initSearch() {
  const input = document.getElementById('search-input');
  const results = document.getElementById('search-results');
  if (!input || !results) return;

  if (typeof SEARCH_INDEX === 'undefined') return;

  const prefix = getPagePrefix();

  input.addEventListener('input', () => {
    const query = input.value.trim().toLowerCase();
    if (query.length < 2) {
      results.classList.remove('active');
      return;
    }

    const matches = SEARCH_INDEX.filter(item =>
      item.title.toLowerCase().includes(query) ||
      item.keywords.toLowerCase().includes(query)
    ).slice(0, 8);

    if (matches.length === 0) {
      results.classList.remove('active');
      return;
    }

    results.innerHTML = matches.map(m => `
      <a href="${prefix}${m.href}" class="search-result-item">
        <div class="search-result-title">${m.title}</div>
        <div class="search-result-context">${m.section}</div>
      </a>
    `).join('');
    results.classList.add('active');
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.navbar-search')) {
      results.classList.remove('active');
    }
  });
}

function init() {
  renderNavbar();
  renderSidebar();
  initCodeCopy();
  initToc();
  initSearch();
}

document.addEventListener('DOMContentLoaded', init);
