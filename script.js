/* ============================================================
   TechNote · 博客脚本
   - 文章数据
   - 前端路由（data-page 切换）
   - 分类 / 标签筛选
   - 文章列表 & 详情渲染
   ============================================================ */

/* ---------- 文章数据 ---------- */
const articles = [
  {
    id: 'getting-started-with-vite',
    title: '从 0 到 1：用 Vite 搭建一个现代化前端项目',
    date: '2026-10-15',
    category: '工程化',
    tags: ['Vite', 'JavaScript'],
    excerpt: 'Vite 以极快的冷启动速度和热更新著称。本文带你从零创建一个 Vite + 原生 JS 项目，了解它的核心概念和配置方式。',
    content: `
      <p>Vite 是由尤雨溪开发的新一代前端构建工具，它基于浏览器原生 ES modules，在开发阶段不需要打包，因此启动速度极快。</p>

      <h2>安装与初始化</h2>
      <p>创建一个 Vite 项目非常简单，只需一行命令：</p>
      <pre><code>npm create vite@latest my-app -- --template vanilla
cd my-app
npm install
npm run dev</code></pre>

      <h2>核心特性</h2>
      <ul>
        <li><strong>极速冷启动</strong> — 基于 ESM，无需打包即可启动</li>
        <li><strong>闪电般的 HMR</strong> — 热更新速度与项目规模无关</li>
        <li><strong>丰富的插件生态</strong> — 兼容 Rollup 插件</li>
      </ul>

      <h2>生产构建</h2>
      <p>执行 <code>npm run build</code> 后，Vite 会使用 Rollup 将代码打包，生成可部署到任意静态服务器的产物。</p>

      <blockquote>提示：Vite 的开发体验非常出色，强烈推荐给所有前端开发者。</blockquote>
    `
  },
  {
    id: 'css-variables-guide',
    title: 'CSS 自定义属性实战：让你的主题切换变得优雅',
    date: '2026-09-28',
    category: '前端',
    tags: ['CSS'],
    excerpt: 'CSS Variables（自定义属性）已成为现代前端的标配。本文分享如何用它实现一套简洁的主题系统。',
    content: `
      <p>CSS 自定义属性让我们可以在 CSS 中定义可复用的值，并且通过 JavaScript 动态修改，这为主题切换提供了一种优雅的方案。</p>

      <h2>基本用法</h2>
      <pre><code>:root {
  --primary: #3b82f6;
  --bg: #ffffff;
}

.button {
  background: var(--primary);
}</code></pre>

      <h2>主题切换</h2>
      <p>只需给 <code>body</code> 切换不同的 class，CSS 变量会自动生效：</p>
      <pre><code>document.body.classList.toggle('dark');</code></pre>

      <h2>优势</h2>
      <ul>
        <li>动态修改，无需重新加载样式表</li>
        <li>作用域灵活，可以在任意选择器下覆写</li>
        <li>与 CSS 原生特性完美融合</li>
      </ul>
    `
  },
  {
    id: 'javascript-closure',
    title: '图解 JavaScript 闭包：一篇文章彻底搞懂',
    date: '2026-09-10',
    category: '前端',
    tags: ['JavaScript'],
    excerpt: '闭包是 JavaScript 最核心也最容易混淆的概念。本文用图解的方式，帮你建立清晰的认知模型。',
    content: `
      <p>闭包（Closure）是指一个函数能够访问其词法作用域之外的变量，即使这个函数在其词法作用域之外执行。</p>

      <h2>一个经典例子</h2>
      <pre><code>function makeCounter() {
  let count = 0;
  return function() {
    return ++count;
  };
}

const counter = makeCounter();
counter(); // 1
counter(); // 2</code></pre>

      <h2>为什么会这样？</h2>
      <p>当 <code>makeCounter</code> 执行完毕后，它的作用域按理应该被销毁。但因为返回的内部函数引用了 <code>count</code> 变量，所以 JavaScript 引擎保留了这个变量。</p>

      <h2>闭包的用途</h2>
      <ul>
        <li>数据私有化（模拟私有变量）</li>
        <li>柯里化与偏函数</li>
        <li>模块模式</li>
      </ul>

      <blockquote>闭包的本质是：函数 + 它被创建时的词法环境。</blockquote>
    `
  },
  {
    id: 'build-this-blog',
    title: '从零搭建一个纯静态博客，为什么我选择了原生 HTML',
    date: '2026-08-22',
    category: '随笔',
    tags: ['随笔'],
    excerpt: '面对 Next.js、Astro、Hexo 等众多博客方案，我最终选择了最朴素的 HTML + CSS + JS。这背后是一种克制。',
    content: `
      <p>在这个框架满天飞的时代，用纯 HTML 搭建博客似乎成了一种"复古"行为。但我想说：合适的才是最好的。</p>

      <h2>为什么不用框架？</h2>
      <ul>
        <li>博客页面简单，不需要复杂的组件化</li>
        <li>原生性能更好，加载更快</li>
        <li>零构建步骤，打开浏览器就能改</li>
      </ul>

      <h2>但也不是无结构</h2>
      <p>我仍然使用了数据驱动的方式：文章存放在 JS 数组里，页面通过渲染函数生成。这样扩展起来并不麻烦。</p>

      <h2>写在最后</h2>
      <p>工具是手段，表达才是目的。愿我们都能找到最适合自己的方式，把想法写下来。</p>
    `
  },
  {
    id: 'node-streams',
    title: 'Node.js Stream 深入理解：从 pipe 到自定义流',
    date: '2026-08-05',
    category: '工程化',
    tags: ['Node'],
    excerpt: 'Stream 是 Node.js 的核心概念之一。本文从基础 API 讲到自定义 Transform 流，帮你真正掌握它。',
    content: `
      <p>Stream 是 Node.js 中处理流式数据的抽象接口。它让我们可以高效地处理大文件，而不需要一次性加载到内存中。</p>

      <h2>四种流类型</h2>
      <ul>
        <li><strong>Readable</strong> — 可读流</li>
        <li><strong>Writable</strong> — 可写流</li>
        <li><strong>Duplex</strong> — 双工流</li>
        <li><strong>Transform</strong> — 转换流</li>
      </ul>

      <h2>简单示例</h2>
      <pre><code>const fs = require('fs');

fs.createReadStream('input.txt')
  .pipe(fs.createWriteStream('output.txt'));</code></pre>

      <p><code>pipe</code> 会自动处理背压，是最常用的方式。</p>
    `
  }
];

/* ---------- 筛选状态 ---------- */
const filterState = {
  category: 'all',
  tag: 'all'
};

/* ---------- 分类 emoji 映射 ---------- */
const categoryEmoji = {
  '前端': '🎨',
  '工程化': '⚙️',
  '随笔': '📝'
};

/* ---------- 工具函数 ---------- */
function $(selector, root = document) {
  return root.querySelector(selector);
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

/* ---------- 路由：切换页面 ---------- */
function showPage(pageName, params = {}) {
  // 隐藏所有页面
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  // 显示目标页面
  const targetPage = document.getElementById(`page-${pageName}`);
  if (targetPage) {
    targetPage.classList.add('active');
  }

  // 根据页面类型执行渲染
  if (pageName === 'home') {
    renderArticleList();
  } else if (pageName === 'detail' && params.id) {
    renderArticleDetail(params.id);
  } else if (pageName === 'archive') {
    renderArchive();
  } else if (pageName === 'tags') {
    renderTagsPage();
  }

  // 滚动到顶部
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ---------- 渲染：文章列表 ---------- */
function getFilteredArticles() {
  return articles.filter(article => {
    const matchCategory = filterState.category === 'all' || article.category === filterState.category;
    const matchTag = filterState.tag === 'all' || article.tags.includes(filterState.tag);
    return matchCategory && matchTag;
  });
}

function renderArticleList() {
  const listEl = $('#article-list');
  const filtered = getFilteredArticles();

  if (filtered.length === 0) {
    listEl.innerHTML = '<div class="empty-hint">没有找到匹配的文章</div>';
    return;
  }

  listEl.innerHTML = filtered.map((article, i) => `
    <article class="article-item" data-id="${article.id}" style="animation-delay: ${Math.min(i * 50, 300)}ms">
      <div class="article-meta">
        <span>${formatDate(article.date)}</span>
        <span>· ${categoryEmoji[article.category] || '📄'} ${article.category}</span>
      </div>
      <h2 class="article-title">${article.title}</h2>
      <p class="article-excerpt">${article.excerpt}</p>
      <div class="article-tags">
        ${article.tags.map(t => `<span class="tag">#${t}</span>`).join('')}
      </div>
    </article>
  `).join('');

  // 绑定点击事件
  listEl.querySelectorAll('.article-item').forEach(item => {
    item.addEventListener('click', () => {
      showPage('detail', { id: item.dataset.id });
    });
  });
}

/* ---------- 渲染：文章详情 ---------- */
function renderArticleDetail(id) {
  const article = articles.find(a => a.id === id);
  const detailEl = $('#article-detail');

  if (!article) {
    detailEl.innerHTML = '<p class="empty-hint">文章不存在</p>';
    return;
  }

  detailEl.innerHTML = `
    <header>
      <h1>${article.title}</h1>
      <div class="meta">
        ${formatDate(article.date)} · ${article.category}
        ${article.tags.map(t => `<span class="tag">#${t}</span>`).join('')}
      </div>
    </header>
    <div class="content">${article.content}</div>
  `;
}

/* ---------- 事件绑定 ---------- */
function bindEvents() {
  // 导航路由
  document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-page]');
    if (target) {
      e.preventDefault();
      showPage(target.dataset.page);
    }
  });

  // 筛选按钮
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const filterType = btn.dataset.filterType;
      const filterValue = btn.dataset.filter;

      // 更新状态
      filterState[filterType] = filterValue;

      // 更新 UI：同一类型的按钮切换 active
      document.querySelectorAll(`.filter-btn[data-filter-type="${filterType}"]`).forEach(b => {
        b.classList.toggle('active', b === btn);
      });

      // 重新渲染列表
      renderArticleList();
    });
  });

  // 侧栏：标签 chip / 最新文章 点击（事件委托）
  document.querySelector('.sidebar').addEventListener('click', (e) => {
    const chip = e.target.closest('.chip');
    if (chip) {
      applyTagFilter(chip.dataset.tag);
      return;
    }
    const latestItem = e.target.closest('li[data-id]');
    if (latestItem) {
      showPage('detail', { id: latestItem.dataset.id });
    }
  });

  // 标签页：chip 点击
  $('#page-tags').addEventListener('click', (e) => {
    const chip = e.target.closest('.chip');
    if (chip) applyTagFilter(chip.dataset.tag);
  });
}

/* ---------- 渲染：归档页 ---------- */
function renderArchive() {
  const groups = {};
  articles.forEach(a => {
    const year = a.date.slice(0, 4);
    (groups[year] = groups[year] || []).push(a);
  });

  $('#archive-list').innerHTML = Object.keys(groups).sort((a, b) => b - a).map(year => `
    <div class="archive-year">
      <h2 class="archive-year-title">📅 ${year}<span class="archive-count">${groups[year].length} 篇</span></h2>
      <ul class="archive-items">
        ${groups[year].map(a => `
          <li class="archive-item" data-id="${a.id}">
            <span class="archive-date">${a.date.slice(5)}</span>
            <span class="archive-title">${a.title}</span>
            <span class="archive-arrow">→</span>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');

  $('#archive-list').querySelectorAll('.archive-item').forEach(item => {
    item.addEventListener('click', () => showPage('detail', { id: item.dataset.id }));
  });
}

/* ---------- 渲染：标签页 ---------- */
function renderTagsPage() {
  const counts = {};
  articles.forEach(a => a.tags.forEach(t => counts[t] = (counts[t] || 0) + 1));

  $('#tag-cloud').innerHTML = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .map(([t, n], i) =>
      `<span class="chip chip-color-${i % 6}" data-tag="${t}">${t}<span class="chip-count">${n}</span></span>`
    ).join('');
}

/* ---------- 渲染：右侧栏 ---------- */
const friendList = [
  { name: '尤雨溪的 Vue',  initial: 'Y' },
  { name: '阮一峰的网络日志', initial: 'R' },
  { name: '张鑫旭的 CSS',   initial: 'Z' },
  { name: '菜鸟教程',       initial: 'C' }
];

const quoteList = [
  '今天也要元气满满呀 🌱',
  '写代码的你，超好看！',
  'Bug 是成长的阶梯 🐛→✨',
  '深呼吸，然后继续加油！',
  '你已经很棒了，别给自己太大压力。',
  '一杯咖啡，一行代码，美好一天 ☕',
  '前端这条路，我们一起走～'
];

function renderSidebar() {
  const tagSet = new Set();
  articles.forEach(a => a.tags.forEach(t => tagSet.add(t)));

  $('#profile-stats').textContent = `📝 ${articles.length} 篇文章 · 🏷️ ${tagSet.size} 个标签`;

  $('#side-tags').innerHTML = [...tagSet].map((t, i) =>
    `<span class="chip chip-color-${i % 6}" data-tag="${t}">${t}</span>`
  ).join('');

  $('#side-latest').innerHTML = articles.slice(0, 3).map(a =>
    `<li data-id="${a.id}" title="${a.title}">${a.title}</li>`
  ).join('');

  // 友链
  $('#side-friends').innerHTML = friendList.map(f =>
    `<li><span class="friend-avatar">${f.initial}</span>${f.name}</li>`
  ).join('');

  // 打气文案（工具卡片默认随机一条）
  $('#tool-quote').textContent = quoteList[Math.floor(Math.random() * quoteList.length)];
}

/* ---------- 跳转标签筛选（侧栏 / 标签页共用） ---------- */
function applyTagFilter(tag) {
  filterState.tag = tag;
  document.querySelectorAll('.filter-btn[data-filter-type="tag"]').forEach(b => {
    b.classList.toggle('active', b.dataset.filter === tag);
  });
  showPage('home');
}

/* ---------- 阅读进度条 + 回到顶部 ---------- */
function initScrollFx() {
  const bar = $('#progress-bar');
  const btn = $('#to-top');

  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
    btn.classList.toggle('show', h.scrollTop > 300);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ---------- 鼠标跟随光晕 ---------- */
function initCursorGlow() {
  // 触屏设备不启用
  if (!window.matchMedia('(pointer: fine)').matches) return;

  const glow = document.createElement('div');
  glow.className = 'cursor-glow';
  document.body.appendChild(glow);

  let x = -400, y = -400, tx = x, ty = y;
  let scale = 1, tScale = 1;

  window.addEventListener('mousemove', (e) => {
    tx = e.clientX;
    ty = e.clientY;
    // 悬停在可交互元素上时光晕放大
    tScale = e.target.closest('a, button, .article-item, .tag') ? 1.5 : 1;
    glow.style.opacity = '1';
  });

  document.addEventListener('mouseleave', () => {
    glow.style.opacity = '0';
  });

  // requestAnimationFrame 平滑跟随（缓动系数 0.12）
  (function tick() {
    x += (tx - x) * 0.12;
    y += (ty - y) * 0.12;
    scale += (tScale - scale) * 0.12;
    glow.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) scale(${scale})`;
    requestAnimationFrame(tick);
  })();
}

/* ---------- Hero 动态数字 ---------- */
function animateHeroStats() {
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = parseInt(el.dataset.target, 10);
    const duration = target > 500 ? 1400 : 900;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * ease);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

/* ---------- Canvas 背景：鼠标跟随光斑（薄荷绿+鹅黄） ---------- */
function initAurora() {
  const c = document.getElementById('aurora');
  if (!c) return;
  const ctx = c.getContext('2d');
  let w = 0, h = 0, x = -400, y = -400, tx = x, ty = y;
  function resize() { w = c.width = window.innerWidth; h = c.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; }, { passive: true });
  function loop() {
    ctx.clearRect(0, 0, w, h);
    x += (tx - x) * 0.08;
    y += (ty - y) * 0.08;
    const grd = ctx.createRadialGradient(x, y, 0, x, y, 280);
    grd.addColorStop(0,   'rgba(94, 234, 212, 0.32)');
    grd.addColorStop(0.5, 'rgba(20, 184, 166, 0.1)');
    grd.addColorStop(1,   'rgba(20, 184, 166, 0)');
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, w, h);
    ctx.beginPath();
    ctx.arc(x, y, 90, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(253, 230, 138, 0.2)';
    ctx.fill();
    requestAnimationFrame(loop);
  }
  loop();
}

/* ---------- Canvas 背景：气泡（薄荷绿 + 浅绿 + 鹅黄） ---------- */
function initBubbles() {
  const c = document.getElementById('bubbles');
  if (!c) return;
  const ctx = c.getContext('2d');
  let w = 0, h = 0;
  const bubbles = [];
  function resize() { w = c.width = window.innerWidth; h = c.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);

  class Bubble {
    constructor() { this.reset(true); }
    reset(initial) {
      this.x = Math.random() * w;
      this.y = initial ? Math.random() * h : h + 20;
      this.r = 4 + Math.random() * 16;
      this.speed = 0.5 + Math.random() * 1.2;
      this.sway = Math.random() * Math.PI * 2;
      this.swaySpeed = 0.01 + Math.random() * 0.02;
      this.op = 0.15 + Math.random() * 0.22;
      const palette = ['#2dd4bf', '#5eead4', '#99f6e4', '#86efac', '#fde68a'];
      this.color = palette[Math.floor(Math.random() * palette.length)];
    }
    update() {
      this.sway += this.swaySpeed;
      this.y -= this.speed;
      this.x += Math.sin(this.sway) * 0.4;
      if (this.y < -20) this.reset(false);
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.op;
      ctx.strokeStyle = this.color;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.stroke();
      ctx.globalAlpha = this.op * 0.7;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x - this.r * 0.35, this.y - this.r * 0.35, this.r * 0.18, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  const count = Math.min(28, Math.floor(window.innerWidth / 35));
  for (let i = 0; i < count; i++) bubbles.push(new Bubble());

  function loop() {
    ctx.clearRect(0, 0, w, h);
    bubbles.forEach(b => { b.update(); b.draw(); });
    requestAnimationFrame(loop);
  }
  loop();
}

/* ---------- 初始化 ---------- */
document.addEventListener('DOMContentLoaded', () => {
  bindEvents();
  renderSidebar();
  initCursorGlow();
  initScrollFx();
  initAurora();
  initBubbles();
  showPage('home');
  animateHeroStats();

  // 打气卡片点击 → 随机换一句
  document.querySelector('.tool-card')?.addEventListener('click', () => {
    document.getElementById('tool-quote').textContent =
      quoteList[Math.floor(Math.random() * quoteList.length)];
  });
});
