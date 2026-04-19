// ========== DATA ==========

const defaultNewsArticles = [
  { id: 1, title: 'לנובו מרעננת את סדרת ניידי ה-ThinkPad עם חמישה דגמים חדשים', image: 'https://images.unsplash.com/photo-1531297122539-5692f69f1092?auto=format&fit=crop&q=80&w=800', category: 'מחשבים', isTop: 1, author: 'מערכת החדשות', time: 'היום, 18:30' },
  { id: 2, title: 'גוגל מציגה: תהליך אבטחה חדש להתקנת אפליקציות באנדרואיד', image: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&q=80&w=800', category: 'אבטחה', isTop: 2, author: 'מערכת החדשות', time: 'היום, 17:00' },
  { id: 3, title: 'הוכרז: Xiaomi Watch S5 - מסך גדול יותר, ועד 21 ימי סוללה', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800', category: 'שעונים חכמים', isTop: 3, author: 'מערכת החדשות', time: 'היום, 16:00' },
  { id: 4, title: 'גוגל משדרגת את מנוי ה-Google AI Pro ל-5TB, ללא תוספת תשלום', image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800', author: 'מערכת החדשות', time: 'היום, 16:45', snippet: 'נקודת עיקריות גוגל משדרגת את נפח אחסון מ-2TB ל-5TB. הגדלת הנפח מתבצעת ללא שינוי במחיר, שעומד על 74.90 שקלים בישראל. המהלך נועד להפוך את התוכנית לאטרקטיבית יותר עבור משתמשים הדורשים שטח רב עבור תוצרי בינה מלאכותית...', category: 'גוגל' },
  { id: 5, title: 'וואטסאפ מזהירה: כ-200 משתמשים הורידו גרסה מזויפת עם תוכנת ריגול', image: 'https://images.unsplash.com/photo-1614064641913-6b7140414f70?auto=format&fit=crop&q=80&w=800', author: 'מערכת החדשות', time: 'היום, 15:45', snippet: 'חוקרי אבטחה מזהירים כי גרסה מזויפת של וואטסאפ עוקפת את מנגנוני ההגנה של חנות האפליקציות, במטרה לאסוף מידע אישי על המשתמשים...', category: 'אבטחה' },
  { id: 6, title: 'גוגל מכריזה על Wear OS 6.1: זיהוי מיקום עצמאי ושדרוג חשבונות ילדים', image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&q=80&w=800', author: 'מערכת החדשות', time: 'היום, 12:12', snippet: 'העדכון משפר את יכולות השעונים החכמים, במטרה להתחרות ראש בראש עם שעוני אפל בגרסאותיהם החדשות.', category: 'גוגל' },
  { id: 7, title: 'אנבידיה מציגה את טכנולוגיית ה-Auto Shader Compilation לקיצור זמני טעינה במשחקים', image: 'https://images.unsplash.com/photo-1598550487031-0898b4852123?auto=format&fit=crop&q=80&w=800', author: 'מערכת החדשות', time: 'היום, 10:40', snippet: 'הטכנולוגיה החדשה צפויה לחסוך שניות יקרות בעת טעינת המשחק הראשונית, ומונעת כליל את צורך בדימוי גרפי מיותר מראש.', category: 'חומרה' },
  { id: 8, title: 'טלגרם מציגה: עורך טקסט מבוסס AI, שדרוג לסקרים ותמיכה בתמונות חיים', image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800', author: 'מערכת החדשות', time: 'היום, 09:19', snippet: 'גרסת טלגרם החדשה כוללת חידושים בולטים הנוגעים לכלי הבינה המלאכותית ולנוחות השיתוף בפלטפורמה.', category: 'אפליקציות' }
];

const defaultPdfStoreItems = [];





let storedPdfItems = localStorage.getItem('pdfStoreItems');
if (!storedPdfItems || JSON.parse(storedPdfItems).length === 0) {
  localStorage.setItem('pdfStoreItems', JSON.stringify(defaultPdfStoreItems));
}

const SERVER_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
  ? 'http://localhost:4242' 
  : window.location.origin;

let storedArticles = localStorage.getItem('newsArticles');
let newsArticles = storedArticles ? JSON.parse(storedArticles) : [...defaultNewsArticles];
if (!storedArticles) {
  localStorage.setItem('newsArticles', JSON.stringify(newsArticles));
}

let nextId = newsArticles.length ? Math.max(...newsArticles.map(a => a.id)) + 1 : 1;
let isAdmin = localStorage.getItem('isAdmin') === 'true';
// Cleanup obsolete data
if (localStorage.getItem('viewerPhotos')) localStorage.removeItem('viewerPhotos');
if (localStorage.getItem('comicsStore')) localStorage.removeItem('comicsStore');

let previousPage = 'home';

// ========== SOCIAL LINKS LOGIC ==========
const defaultSocialLinks = {
  x: 'https://x.com',
  fb: 'https://facebook.com',
  ig: 'https://instagram.com',
  yt: 'https://youtube.com'
};

function loadSocialLinks() {
  const links = JSON.parse(localStorage.getItem('siteSocialLinks') || JSON.stringify(defaultSocialLinks));
  applySocialLinksToUI(links);
  return links;
}

function applySocialLinksToUI(links) {
  const ids = { x: 'footer-link-x', fb: 'footer-link-fb', ig: 'footer-link-ig', yt: 'footer-link-yt' };
  for (const [key, id] of Object.entries(ids)) {
    const el = document.getElementById(id);
    if (el) el.href = links[key] || '#';
  }
}

function saveSocialLinks() {
  if (!isAdmin) {
    showToast('❌ אין לך הרשאות לבצע פעולה זו');
    return;
  }
  const links = {
    x: document.getElementById('admin-social-x').value,
    fb: document.getElementById('admin-social-fb').value,
    ig: document.getElementById('admin-social-ig').value,
    yt: document.getElementById('admin-social-yt').value
  };
  localStorage.setItem('siteSocialLinks', JSON.stringify(links));
  applySocialLinksToUI(links);
  showToast('✅ הקישורים עודכנו בהצלחה');
}

function openCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  if (modal) {
    modal.classList.add('active');
    showToast('טוען מערכת תשלום מאובטחת...');
  }
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  if (modal) modal.classList.remove('active');
}

// ========== NAVIGATION ==========
function showPage(page) {
  if (page === 'checkout') {
    openCheckoutModal();
    return;
  }
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const targetPage = document.getElementById(`page-${page}`);
  if (targetPage) targetPage.classList.add('active');

  if (page === 'home') renderNewsLayout();
  if (page === 'pdf-store') renderPdfStoreGrid();
  if (page === 'subscription') window.scrollTo({ top: 0, behavior: 'smooth' });
  if (page === 'join') {
    if (currentUser) {
      document.getElementById('join-name').value = currentUser.name;
      document.getElementById('join-password').value = '';
      document.getElementById('btn-logout').style.display = 'block';
    } else {
      document.getElementById('join-name').value = '';
      document.getElementById('join-password').value = '';
      document.getElementById('btn-logout').style.display = 'none';
    }
  }
  if (page === 'admin') {
    if (!isAdmin) {
      showPage('admin-login');
      return;
    }
    initAdminDashboard();
  }
}




function openCheckoutModal() {
  console.log('Opening checkout modal...');
  const modal = document.getElementById('checkout-modal');
  if (modal) {
    modal.classList.add('active');
    showToast('טוען מערכת תשלום מאובטחת...');
  } else {
    console.error('Checkout modal not found!');
  }
}

function closeCheckoutModal() {
  document.getElementById('checkout-modal').classList.remove('active');
}




// ========== ADMIN CALENDAR ==========


function goBack() {
  showPage(previousPage);
}

// ========== RENDER NEWS ==========
let currentPage = 1;
const ARTICLES_PER_PAGE = 10;

function renderNewsLayout(page = 1) {
  currentPage = page;
  const topGrid = document.getElementById('top-news-grid');
  const feedList = document.getElementById('news-feed-list');
  const paginationEl = document.getElementById('news-pagination');
  if(!topGrid || !feedList) return;

  // Top 3 hero cards only on first page
  const topArticles = newsArticles.filter(x => x.isTop).sort((a,b) => a.isTop - b.isTop);
  if (page === 1) {
    topGrid.innerHTML = topArticles.map(a => `
      <div class="top-news-card" onclick="showArticle(${a.id})">
        <div class="top-news-bg" style="background-image: url('${a.image}')"></div>
        <div class="top-news-overlay">
          <h3>${escHtml(a.title)}</h3>
        </div>
      </div>
    `).join('');
  }

  const feedArticles = newsArticles.filter(x => !x.isTop);
  const totalPages = Math.max(1, Math.ceil(feedArticles.length / ARTICLES_PER_PAGE));
  const start = (page - 1) * ARTICLES_PER_PAGE;
  const pageArticles = feedArticles.slice(start, start + ARTICLES_PER_PAGE);

  feedList.innerHTML = pageArticles.map(a => `
    <div class="feed-item" onclick="showArticle(${a.id})">
      <div class="feed-image" style="background-image: url('${a.image}')"></div>
      <div class="feed-content">
        <h2 class="feed-title">${escHtml(a.title)}</h2>
        <div class="feed-meta"><span class="author-name">${escHtml(a.author)}</span> <span class="meta-sep">|</span> <span class="meta-date">${escHtml(a.time)}</span></div>
        ${a.snippet ? `<p class="feed-snippet">${escHtml(a.snippet)}</p>` : ''}
      </div>
    </div>
  `).join('');

  // Render pagination buttons
  if (paginationEl) {
    if (totalPages <= 1) {
      paginationEl.innerHTML = '';
    } else {
      paginationEl.innerHTML = Array.from({ length: totalPages }, (_, i) => i + 1).map(p => `
        <button onclick="renderNewsLayout(${p}); window.scrollTo({top:0,behavior:'smooth'});"
          style="padding: 8px 16px; border-radius: 980px; border: 1px solid ${p === page ? '#0071e3' : '#ccc'};
          background: ${p === page ? '#0071e3' : '#fff'}; color: ${p === page ? '#fff' : '#1d1d1f'};
          font-weight: 600; font-size: 0.9rem; cursor: pointer; transition: all 0.2s;">
          ${p}
        </button>
      `).join('');
    }
  }
}

function filterCategory(cat) {
  // Logic not fully implemented since this is a UI prototype
  alert('Filtering by: ' + cat);
}

function showArticle(id) {
  currentArticleId = id;
  previousPage = document.querySelector('.page.active')?.id?.replace('page-', '') || 'home';
  const a = newsArticles.find(x => x.id === id);
  if (!a) return;

  document.getElementById('article-content').innerHTML = `
    <header class="article-header">
      <div class="article-category">${escHtml(a.category)}</div>
      <h1 class="article-title-main" id="inline-title">${escHtml(a.title)}</h1>
      <div class="article-meta-main">
        מאת <span id="inline-author" class="author-name" style="font-weight:700;">${escHtml(a.author)}</span>
        <span class="meta-sep">|</span> 
        <span id="inline-time" class="meta-date">${escHtml(a.time)}</span>
      </div>
    </header>
    <div class="article-hero-img" id="inline-hero-img" style="background-image: url('${a.image}'); position: relative;">
    </div>
      <div class="article-body" style="position:relative;">
        ${(a.isPremium && !isAdmin) ? `
        <div id="inline-content" style="filter: blur(6px); user-select: none; pointer-events: none; opacity: 0.5;">
          ${a.content ? a.content.substring(0, 300) + '... (המשך הכתבה חסומה)' : `<p>זהו טקסט דמה להמחשת הכתבה. במערכת החדשות המלאה...</p>`}
        </div>
        <div style="position: absolute; top: 30%; left: 50%; transform: translate(-50%, -50%); text-align: center; background: rgba(255,255,255,0.9); padding: 40px; border-radius: 20px; box-shadow: 0 10px 40px rgba(0,0,0,0.1); width: 85%; max-width: 400px; border: 1px solid var(--border-subtle); backdrop-filter: blur(10px);">
          <div style="font-size: 3.5rem; margin-bottom: 16px;">💎</div>
          <h3 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 8px; color: #1d1d1f;">תוכן פרימיום</h3>
          <p style="color: #86868b; margin-bottom: 24px; font-size: 1.05rem;">סיפור זה זמין למנויים בלבד. הצטרף עכשיו כדי לקבל גישה מלאה לכל הכתבות שלנו.</p>
          <button class="btn-primary" onclick="showPage('subscription')" style="width: 100%; font-size: 1.1rem; padding: 14px;">לרכישת מנוי שבועי/חודשי</button>
        </div>
        ` : `
        <div id="inline-content">
          ${a.content ? a.content : `
          <p>זהו טקסט דמה להמחשת הכתבה. במערכת החדשות המלאה, אזור זה יישאב ממסד הנתונים ויכיל פסקאות, ציטוטים מורחבים, גלריות תמונות ואפשרויות לשיתוף ברשתות חברתיות.</p>
          <p>חברת הטכנולוגיה המובילה חשפה לאחרונה את כל העדכונים של המערכת המיוחלת החדשה. באירוע שערכה, השתתפו אלפי עיתונאי טכנולוגיה מכל העולם, שזכו לראות את כלי התוכנה המתקדמים ואת החומרה.</p>
          <p>בנוסף, הושם דגש מיוחד על יכולות בינה מלאכותית, פרטיות ואבטחת מידע, עם שיפורים שיהפכו כל פעולה ליעילה, נוחה ומאובטחת יותר מתמיד.</p>
          `}
        </div>
        `}
      </div>
      
      <!-- Recommended Articles Section -->
      <div class="recommendations-wrapper">
        <h3 class="recommendations-title">אולי יעניין אותך גם</h3>
        <div class="recommendations-grid">
          ${renderRecommendations(a.id, a.category)}
        </div>
      </div>
    </div>
  `;

  showPage('article');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}



function renderRecommendations(currentId, category) {
  // Find articles in the same category, excluding current
  let recs = newsArticles.filter(art => art.id !== currentId && art.category === category);
  
  // If not enough, fill with others
  if (recs.length < 4) {
    const others = newsArticles.filter(art => art.id !== currentId && art.category !== category);
    recs = [...recs, ...others].slice(0, 4);
  } else {
    recs = recs.slice(0, 4);
  }

  return recs.map(r => `
    <div class="rec-card" onclick="showArticle(${r.id})">
      <div class="rec-image" style="background-image: url('${r.image}')"></div>
      <div class="rec-meta">${escHtml(r.category)}</div>
      <div class="rec-title">${escHtml(r.title)}</div>
    </div>
  `).join('');
}

// ========== ADMIN DASHBOARD ==========
function adminLogin() {
  const user = document.getElementById('admin-user')?.value;
  const pass = document.getElementById('admin-pass')?.value;
  if (user === '1' && pass === '1') {
    localStorage.setItem('isAdmin', 'true');
    isAdmin = true;
    showToast('✅ מנהל התחבר בהצלחה');
    showPage('admin');
  } else {
    showToast('❌ שם משתמש או סיסמה שגויים');
  }
}

function initAdminDashboard() {
  // Populate stats
  const statTotal = document.getElementById('stat-total');
  const statToday = document.getElementById('stat-today');
  const statArticles = document.getElementById('stat-articles');
  const statMessages = document.getElementById('stat-messages');

  let msgs = JSON.parse(localStorage.getItem('contactMessages') || '[]');
  if (statTotal) statTotal.textContent = localStorage.getItem('visitTotal') || '0';
  if (statToday) statToday.textContent = localStorage.getItem('visitToday') || '0';
  if (statArticles) statArticles.textContent = newsArticles.length;
  if (statMessages) statMessages.textContent = msgs.length;

  const msgList = document.getElementById('admin-messages-list');
  const navMsgCount = document.getElementById('nav-msg-count');
  if (navMsgCount) navMsgCount.textContent = msgs.length;

  if (msgList) {
    if (msgs.length === 0) {
      msgList.innerHTML = '<tr><td colspan="4" style="text-align:center; padding: 20px; color:#86868b;">אין הודעות חדשות</td></tr>';
    } else {
      msgList.innerHTML = msgs.map((m, i) => `
        <tr class="hover-row" style="transition: background 0.2s; cursor: pointer;" onclick="viewMessage(${i})" onmouseover="this.style.background='#f5f5f7'" onmouseout="this.style.background='transparent'">
          <td style="white-space: nowrap;">${escHtml(m.date)}</td>
          <td><strong>${escHtml(m.name)}</strong></td>
          <td style="white-space: pre-wrap;">${escHtml(m.body).substring(0, 60)}${m.body.length > 60 ? '...' : ''}</td>
          <td onclick="event.stopPropagation()">
            <button class="remove-btn" style="padding: 4px 12px; font-size: 0.85rem; border: none; background: transparent;" onclick="deleteMessage(${i})">מחק</button>
          </td>
        </tr>
      `).join('');
    }
  }


  const list = document.getElementById('admin-articles-list');
  if (!list) return;

  list.innerHTML = newsArticles.map(a => `
    <tr>
      <td>${a.id}</td>
      <td><strong>${escHtml(a.title)}</strong> ${a.isTop ? '🌟' : ''} ${a.isPremium ? '💎' : ''}</td>
      <td>${escHtml(a.category)}</td>
      <td>${escHtml(a.author)}</td>
      <td style="display:flex; gap:8px;">
        <button class="remove-btn" style="padding: 4px 12px; font-size: 0.85rem; border: none; background: #0071e3; color: white; border-radius: 6px; cursor: pointer;" onclick="editArticle(${a.id})">ערוך</button>
        <button class="remove-btn" style="padding: 4px 12px; font-size: 0.85rem; border: none; background: transparent;" onclick="deleteArticle(${a.id})">מחק</button>
      </td>
    </tr>
  `).join('');


  // Populate Social Links inside Admin
  const sl = loadSocialLinks();
  if (document.getElementById('admin-social-x')) {
    document.getElementById('admin-social-x').value = sl.x || '';
    document.getElementById('admin-social-fb').value = sl.fb || '';
    document.getElementById('admin-social-ig').value = sl.ig || '';
    document.getElementById('admin-social-yt').value = sl.yt || '';
  }
}

function switchAdminTab(tabId, btnEl) {
  document.querySelectorAll('.admin-section').forEach(el => el.style.display = 'none');
  const target = document.getElementById('admin-section-' + tabId);
  if (target) target.style.display = 'block';
  
  if (btnEl) {
    document.querySelectorAll('.admin-nav-btn').forEach(btn => btn.classList.remove('active'));
    btnEl.classList.add('active');
  }
  if (tabId === 'pdfstore') renderPdfAdminList();

}



function deleteMessage(index) {
  if (confirm('האם אתה בטוח שברצונך למחוק הודעה זו?')) {
    let msgs = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    msgs.splice(index, 1);
    localStorage.setItem('contactMessages', JSON.stringify(msgs));
    initAdminDashboard();
    showToast('ההודעה נמחקה');
  }
}

let currentViewMessageIndex = -1;

function viewMessage(index) {
  let msgs = JSON.parse(localStorage.getItem('contactMessages') || '[]');
  const m = msgs[index];
  if (!m) return;
  currentViewMessageIndex = index;
  document.getElementById('view-msg-name').textContent = m.name;
  document.getElementById('view-msg-phone').textContent = 'טלפון: ' + (m.phone || 'לא הוזן');
  document.getElementById('view-msg-date').textContent = m.date;
  document.getElementById('view-msg-body').textContent = m.body;
  document.getElementById('message-view-modal').classList.add('active');
}

function closeMessageViewModal() {
  document.getElementById('message-view-modal').classList.remove('show');
  currentViewMessageIndex = -1;
}

function deleteMessageFromModal() {
  if (currentViewMessageIndex >= 0) {
    if (confirm('האם אתה בטוח שברצונך למחוק הודעה זו?')) {
      let msgs = JSON.parse(localStorage.getItem('contactMessages') || '[]');
      msgs.splice(currentViewMessageIndex, 1);
      localStorage.setItem('contactMessages', JSON.stringify(msgs));
      initAdminDashboard();
      closeMessageViewModal();
      showToast('ההודעה נמחקה');
    }
  }
}

function deleteArticle(id) {
  if (confirm('האם אתה בטוח שברצונך למחוק כתבה זו?')) {
    newsArticles = newsArticles.filter(a => a.id !== id);
    localStorage.setItem('newsArticles', JSON.stringify(newsArticles));
    initAdminDashboard();
    renderNewsLayout();
    showToast('נמחק בהצלחה');
  }
}

function editArticle(id) {
  const article = newsArticles.find(a => a.id === id);
  if (!article) return;
  document.getElementById('admin-editor').classList.remove('hidden');
  const editorTitle = document.getElementById('admin-editor').querySelector('h3');
  
  editorTitle.textContent = 'עריכת כתבה';
  document.getElementById('edit-id').value = article.id;
  document.getElementById('edit-title').value = article.title;
  document.getElementById('edit-category').value = article.category;
  document.getElementById('edit-author').value = article.author;
  document.getElementById('edit-time').value = article.time;
  document.getElementById('edit-image').value = article.image;
  document.getElementById('edit-snippet').value = article.snippet;
  document.getElementById('edit-content').value = article.content;
  document.getElementById('edit-isTop').checked = !!article.isTop;
  document.getElementById('edit-isPremium').checked = !!article.isPremium;
  
  document.getElementById('admin-editor').scrollIntoView({ behavior: 'smooth' });
}

function openArticleEditor() {
  document.getElementById('admin-editor').classList.remove('hidden');
  const editorTitle = document.getElementById('admin-editor').querySelector('h3');
  
  editorTitle.textContent = 'יצירת כתבה חדשה';
  document.getElementById('edit-id').value = '';
  document.getElementById('edit-title').value = '';
  document.getElementById('edit-category').value = '';
  document.getElementById('edit-author').value = 'מערכת החדשות';
  document.getElementById('edit-time').value = 'היום, 12:00';
  document.getElementById('edit-image').value = 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format\u0026fit=crop\u0026q=80\u0026w=800';
  document.getElementById('edit-snippet').value = '';
  document.getElementById('edit-content').value = '';
  document.getElementById('edit-isTop').checked = false;
  document.getElementById('edit-isPremium').checked = false;
  
  document.getElementById('admin-editor').scrollIntoView({ behavior: 'smooth' });
}

function saveAdminArticle() {
  const idValue = document.getElementById('edit-id').value;
  const isTop = document.getElementById('edit-isTop').checked;
  const isPremium = document.getElementById('edit-isPremium').checked;
  
  const articleObj = {
    id: idValue ? Number(idValue) : nextId++,
    title: document.getElementById('edit-title').value,
    category: document.getElementById('edit-category').value,
    author: document.getElementById('edit-author').value,
    time: document.getElementById('edit-time').value,
    image: document.getElementById('edit-image').value,
    snippet: document.getElementById('edit-snippet').value,
    content: document.getElementById('edit-content').value,
    isTop: isTop ? (newsArticles.filter(a => a.isTop).length + 1) : false,
    isPremium: isPremium
  };

  if(!articleObj.title) {
    showToast('יש למלא כותרת');
    return;
  }

  if (idValue) {
    const idx = newsArticles.findIndex(a => a.id == idValue);
    if (idx !== -1) newsArticles[idx] = articleObj;
    else newsArticles.unshift(articleObj);
    showToast('עודכן בהצלחה');
  } else {
    newsArticles.unshift(articleObj);
    showToast('נוצר בהצלחה');
  }

  if (isTop) {
     const topArts = newsArticles.filter(a => a.isTop).sort((a,b) => a.isTop - b.isTop);
     if(topArts.length > 3) {
        topArts[topArts.length-1].isTop = false; 
     }
  }

  localStorage.setItem('newsArticles', JSON.stringify(newsArticles));
  document.getElementById('admin-editor').classList.add('hidden');
  initAdminDashboard();
  renderNewsLayout();
}

// ========== UTILS ==========
function showToast(msg, type = '') {
  const toast = document.getElementById('toast');
  if (!toast) {
    alert(msg);
    return;
  }
  toast.textContent = msg;
  toast.className = 'toast show'; // Reset and show
  if (type) toast.classList.add(type);
  
  setTimeout(() => toast.classList.remove('show'), 3000);
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function handleImageUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  // Show a loading toast
  showToast('מעבד תמונה...');

  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      const canvas = document.createElement('canvas');
      const MAX_WIDTH = 800; // compress dimension
      let width = img.width;
      let height = img.height;

      if (width > MAX_WIDTH) {
        height = Math.round(height * (MAX_WIDTH / width));
        width = MAX_WIDTH;
      }

      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      
      // Compress to 70% quality JPEG => Greatly saves LocalStorage space
      const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.7);
      document.getElementById('edit-image').value = compressedDataUrl;
      showToast('התמונה מוכנה! ✅');
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

// ========== STORE MANAGEMENT ==========






// ========== PDF STORE ==========
const typeEmoji = { 'PDF': '📄', 'תוכנה': '🖥️', 'סרטון': '📹', 'קובץ': '📁', 'מדריך': '📚' };

function getPdfItems() {
  return JSON.parse(localStorage.getItem('pdfStoreItems') || '[]');
}

function savePdfItems(items) {
  localStorage.setItem('pdfStoreItems', JSON.stringify(items));
}

function renderPdfStoreGrid() {
  const grid = document.getElementById('pdf-store-grid');
  if (!grid) return;
  const items = getPdfItems();
  if (items.length === 0) {
    grid.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:80px; color:#86868b; font-size:1.1rem;">אין פריטים בחנות עדיין. המנהל יוסיף בקרוב!</div>';
    return;
  }
  grid.innerHTML = items.map((item, i) => {
    const icon = typeEmoji[item.type] || '📄';
    const mainImg = (item.images && item.images.length > 0) ? item.images[0] : '';
    
    return `
      <div class="pdf-card" onclick="showProductDetail(${i})">
        ${mainImg ? `<img src="${mainImg}" style="width:100%; height:160px; object-fit:cover; border-radius:12px; margin-bottom:12px;" />` : 
                    `<div class="pdf-card-icon">${icon}</div>`}
        <div class="pdf-card-type">${escHtml(item.type)}</div>
        <div class="pdf-card-title">${escHtml(item.title)}</div>
        ${item.desc ? `<div class="pdf-card-desc">${escHtml(item.desc)}</div>` : ''}
        
        <div class="pdf-card-price" style="font-size: 0.85rem; color: #86868b; text-align: center; width: 100%;">
          ${item.type === 'תוכן גולשים' ? 
            `<div style="display:flex; flex-direction:column; gap:4px;">
               <span style="color:var(--primary); font-weight:700;">${escHtml(item.date)}</span>
               <span style="font-size:0.8rem;">${escHtml(item.contact || '')}</span>
             </div>` : 
            escHtml(item.price || 'חינם')}
        </div>
      </div>
    `;
  }).join('');
}


function showProductDetail(index) {
  const items = getPdfItems();
  const item = items[index];
  if (!item) return;
  
  document.getElementById('pdp-title').textContent = item.title;
  let metadataHtml = '';
  if (item.age) metadataHtml += `<span style="background:#f5f5f7; padding:4px 12px; border-radius:980px; font-size:0.85rem;">גיל: ${escHtml(item.age)}</span>`;
  if (item.location) metadataHtml += `<span style="background:#f5f5f7; padding:4px 12px; border-radius:980px; font-size:0.85rem;">מיקום: ${escHtml(item.location)}</span>`;
  if (item.contact) {
    metadataHtml += `<div style="margin-top:8px; color:var(--primary); font-weight:600; cursor:pointer;" onclick="showUserProfile('${escHtml(item.contact)}')">איש קשר: <span style="text-decoration:underline;">${escHtml(item.contact)}</span></div>`;
    metadataHtml += `<div style="margin-top:8px;"><button onclick="openChatWith('${escHtml(item.contact)}')" style="background:none; border:1px solid var(--primary); color:var(--primary); border-radius:980px; padding:4px 12px; cursor:pointer; font-size:0.85rem; font-weight:600; display:inline-flex; align-items:center; gap:6px;"><i class="fa-regular fa-comment"></i> שלח הודעה לאיש קשר</button></div>`;
  }
  
  const descEl = document.getElementById('pdp-desc');
  descEl.innerHTML = metadataHtml + `<div style="margin-top:16px;">${escHtml(item.desc || '')}</div>`;
  
  // Gallery Logic
  const images = item.images || [];
  const mainImg = document.getElementById('pdp-main-image');
  const thumbList = document.getElementById('pdp-thumbnails');
  
  if (images.length > 0) {
    mainImg.src = images[0];
    thumbList.innerHTML = images.map((img, i) => `
      <div class="pdp-thumb ${i === 0 ? 'active' : ''}" onclick="changePdpImage(this, '${img}')">
        <img src="${img}" alt="Thumbnail ${i+1}">
      </div>
    `).join('');
  } else {
    const cidMap = { 'PDF': '1544716278-ca5e3f4abd8c', 'תוכנה': '1517694712202-14dd9538aa97', 'סרטון': '1492724441997-5dc865305da7', 'קובץ': '1544391490-01c6db9f5a70', 'מדריך': '1497633762265-9d179a990aa6' };
    const cid = cidMap[item.type] || cidMap['PDF'];
    const fallback = `https://images.unsplash.com/photo-${cid}?auto=format&fit=crop&q=80&w=800`;
    mainImg.src = fallback;
    thumbList.innerHTML = `<div class="pdp-thumb active"><img src="${fallback}"></div>`;
  }
  

  
  renderProductRecommendations(index);
  showPage('product-detail');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderProductRecommendations(currentIndex) {
  const grid = document.getElementById('product-recommendations-grid');
  if (!grid) return;
  
  const allItems = getPdfItems();
  // Filter out the current product and show up to 6 others randomly
  const recommendations = allItems
    .map((item, originalIndex) => ({ ...item, originalIndex }))
    .filter(item => item.originalIndex !== currentIndex)
    .sort(() => 0.5 - Math.random())
    .slice(0, 6);
    
  if (recommendations.length === 0) {
    document.getElementById('product-recommendations-wrapper').style.display = 'none';
    return;
  }
  
  document.getElementById('product-recommendations-wrapper').style.display = 'block';
  
  grid.innerHTML = recommendations.map(item => {
    const mainImg = (item.images && item.images.length > 0) ? item.images[0] : '';
    const icon = typeEmoji[item.type] || '📄';
    
    return `
      <div class="rec-card" onclick="showProductDetail(${item.originalIndex})">
        ${mainImg ? `<div class="rec-image" style="background-image: url('${mainImg}')"></div>` : 
                    `<div class="rec-image" style="display:flex; align-items:center; justify-content:center; font-size:3rem; background:#f5f5f7;">${icon}</div>`}
        <div class="rec-meta">${escHtml(item.type)}</div>
        <div class="rec-title">${escHtml(item.title)}</div>
      </div>
    `;
  }).join('');
}


function changePdpImage(el, src) {
  document.getElementById('pdp-main-image').src = src;
  document.querySelectorAll('.pdp-thumb').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}



function renderPdfAdminList() {
  const list = document.getElementById('pdf-admin-list');
  if (!list) return;
  const items = getPdfItems();
  if (items.length === 0) {
    list.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:32px; color:#86868b;">אין פריטים עדיין. לחץ "הוסף פריט".</div>';
    return;
  }
  list.innerHTML = items.map((item, i) => `
    <div style="background:#f5f5f7; border-radius:12px; padding:16px; display:flex; flex-direction:column; gap:8px; position:relative;">
      <div style="font-size:2rem; text-align:center;">${typeEmoji[item.type] || '📄'}</div>
      <div style="font-weight:700; font-size:0.9rem; text-align:center; color:#1d1d1f;">${escHtml(item.title)}</div>
      <div style="font-size:0.8rem; color:#86868b; text-align:center;">${escHtml(item.type)} · ${escHtml(item.price || 'חינם')}</div>
      <div style="display:flex; gap:6px; justify-content:center; margin-top:4px;">
        <button class="btn-primary" style="padding:4px 10px; font-size:0.78rem;" onclick="editPdfItem(${i})">ערוך</button>
        <button class="remove-btn" style="padding:4px 10px; font-size:0.78rem; border:none; background:transparent;" onclick="deletePdfItem(${i})">מחק</button>
      </div>
    </div>
  `).join('');
}

function openPdfItemEditor(index = null) {
  document.getElementById('pdf-item-editor').classList.remove('hidden');
  if (index !== null) {
    const items = getPdfItems();
    const item = items[index];
    document.getElementById('pdf-edit-id').value = index;
    document.getElementById('pdf-edit-title').value = item.title || '';
    document.getElementById('pdf-edit-desc').value = item.desc || '';
    document.getElementById('pdf-edit-type').value = item.type || 'PDF';
    document.getElementById('pdf-edit-price').value = item.price || '';
    document.getElementById('pdf-edit-link').value = item.link || '';
    
    // Load images
    for (let i = 1; i <= 4; i++) {
       const img = (item.images && item.images[i-1]) ? item.images[i-1] : '';
       document.getElementById(`pdf-edit-img${i}`).value = img;
    }
  } else {
    document.getElementById('pdf-edit-id').value = '';
    document.getElementById('pdf-edit-title').value = '';
    document.getElementById('pdf-edit-desc').value = '';
    document.getElementById('pdf-edit-type').value = 'PDF';
    document.getElementById('pdf-edit-price').value = '';
    document.getElementById('pdf-edit-link').value = '';
    for (let i = 1; i <= 4; i++) {
       document.getElementById(`pdf-edit-img${i}`).value = '';
    }
  }
  const statusEl = document.getElementById('pdf-upload-status');
  if (statusEl) statusEl.style.display = 'none';
  document.getElementById('pdf-item-editor').scrollIntoView({ behavior: 'smooth' });
}

function handlePdfFileUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const MAX_SIZE_MB = 5;
  const statusEl = document.getElementById('pdf-upload-status');

  if (file.size > MAX_SIZE_MB * 1024 * 1024) {
    statusEl.textContent = `❌ הקובץ גדול מדי (${(file.size / 1024 / 1024).toFixed(1)}MB). יש להשתמש בקישור חיצוני לקבצים מעל 5MB.`;
    statusEl.style.color = '#ef4444';
    statusEl.style.display = 'block';
    return;
  }

  statusEl.textContent = '⏳ טוען קובץ...';
  statusEl.style.color = '#0071e3';
  statusEl.style.display = 'block';

  const reader = new FileReader();
  reader.onload = function(e) {
    document.getElementById('pdf-edit-link').value = e.target.result;
    statusEl.textContent = `✅ הקובץ "${file.name}" הועלה בהצלחה! (${(file.size / 1024).toFixed(0)}KB)`;
    statusEl.style.color = '#22c55e';
    showToast('הקובץ מוכן! אל תשכח לשמור.');
  };
  reader.onerror = function() {
    statusEl.textContent = '❌ שגיאה בטעינת הקובץ. נסה שוב.';
    statusEl.style.color = '#ef4444';
  };
  reader.readAsDataURL(file);
}

function editPdfItem(index) { openPdfItemEditor(index); }

function savePdfItem() {
  const title = document.getElementById('pdf-edit-title').value.trim();
  if (!title) { showToast('יש להזין שם פריט'); return; }
  
  const idVal = document.getElementById('pdf-edit-id').value;
  const item = {
    title,
    desc: document.getElementById('pdf-edit-desc').value,
    type: document.getElementById('pdf-edit-type').value,
    price: document.getElementById('pdf-edit-price').value,
    link: document.getElementById('pdf-edit-link').value,
    images: []
  };

  for (let i = 1; i <= 4; i++) {
    const img = document.getElementById(`pdf-edit-img${i}`).value;
    if (img) item.images.push(img);
  }

  const items = getPdfItems();
  if (idVal !== '') {
    items[parseInt(idVal)] = item;
    showToast('המוצר עודכן בהצלחה');
  } else {
    items.unshift(item);
    showToast('המוצר נוסף בהצלחה');
  }

  savePdfItems(items);
  renderPdfAdminList();
  renderPdfStoreGrid();
  document.getElementById('pdf-item-editor').classList.add('hidden');
}

let activeImgSlot = 1;
function triggerImgUpload(slot) {
  activeImgSlot = slot;
  document.getElementById('pdf-image-upload-hidden').click();
}

function handleProductImageUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  showToast('מעבד תמונה...');
  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      const canvas = document.createElement('canvas');
      const MAX_WIDTH = 800;
      let width = img.width;
      let height = img.height;
      if (width > MAX_WIDTH) {
        height *= MAX_WIDTH / width;
        width = MAX_WIDTH;
      }
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      const dataUri = canvas.toDataURL('image/jpeg', 0.8);
      document.getElementById(`pdf-edit-img${activeImgSlot}`).value = dataUri;
      showToast(`תמונה ${activeImgSlot} עלתה בהצלחה!`);
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}


function deletePdfItem(index) {
  if (confirm('למחוק פריט זה?')) {
    const items = getPdfItems();
    items.splice(index, 1);
    savePdfItems(items);
    renderPdfAdminList();
    renderPdfStoreGrid();
    showToast('הפריט נמחק');
  }
}


function trackVisit() {
  // Total visits
  const total = parseInt(localStorage.getItem('visitTotal') || '0') + 1;
  localStorage.setItem('visitTotal', total);

  // Today's visits
  const today = new Date().toDateString();
  const lastDay = localStorage.getItem('visitDay');
  let todayCount = parseInt(localStorage.getItem('visitToday') || '0');
  if (lastDay !== today) {
    todayCount = 0;
    localStorage.setItem('visitDay', today);
  }
  todayCount++;
  localStorage.setItem('visitToday', todayCount);
}

trackVisit();

// ========== CONTACT MODAL ==========
function openContactModal() {
  document.getElementById('contact-modal').classList.add('show');
}

function closeContactModal() {
  document.getElementById('contact-modal').classList.remove('show');
}

function submitContactForm(e) {
  e.preventDefault();
  const name = document.getElementById('contact-name').value;
  const phone = document.getElementById('contact-phone').value;
  const body = document.getElementById('contact-body').value;
  
  // Save message to localStorage
  let msgs = JSON.parse(localStorage.getItem('contactMessages') || '[]');
  const now = new Date();
  const dateStr = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
  
  msgs.unshift({ name, phone, body, date: dateStr });
  localStorage.setItem('contactMessages', JSON.stringify(msgs));
  
  // Close modal and show toast
  closeContactModal();
  showToast('ההודעה נשלחה בהצלחה למערכת! ✅');
  
  // Clear form
  e.target.reset();
  
  // Update admin dash if it's currently open
  if (document.getElementById('page-admin').classList.contains('active')) {
    initAdminDashboard();
  }
}

// ========== THEME LOGIC ==========
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }
}

function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark-theme');
  const isDark = body.classList.contains('dark-theme');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  showToast(isDark ? '🌙 מצב כהה הופעל' : '☀️ מצב בהיר הופעל');
}

// ========== INIT ==========
initTheme();
showPage('pdf-store');





// ========== USER & COMMENTS LOGIC ==========
let currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');


function handleProfilePicUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  showToast('מעבד תמונה...');
  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      const canvas = document.createElement('canvas');
      const MAX_SIZE = 200;
      let width = img.width;
      let height = img.height;
      
      if (width > height) {
        if (width > MAX_SIZE) {
          height *= MAX_SIZE / width;
          width = MAX_SIZE;
        }
      } else {
        if (height > MAX_SIZE) {
          width *= MAX_SIZE / height;
          height = MAX_SIZE;
        }
      }
      
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      
      const b64 = canvas.toDataURL('image/jpeg', 0.8);
      document.getElementById('register-avatar-preview').src = b64;
      document.getElementById('join-profile-pic').value = b64;
      showToast('✅ התמונה עלתה בהצלחה!');
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

const randomAvatars = [
  'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200&h=200',
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200&h=200',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200',
  'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=200&h=200',
  'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=200&h=200',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200'
];

function setRandomProfilePic() {
  const current = document.getElementById('join-profile-pic').value;
  let next = randomAvatars[Math.floor(Math.random() * randomAvatars.length)];
  while (next === current) {
    next = randomAvatars[Math.floor(Math.random() * randomAvatars.length)];
  }
  document.getElementById('register-avatar-preview').src = next;
  document.getElementById('join-profile-pic').value = next;
  showToast('🎲 תמונה רנדומלית נבחרה');
}

function saveUserProfile() {
  const name = document.getElementById('join-name').value.trim();
  const password = document.getElementById('join-password').value.trim();
  const profilePic = document.getElementById('join-profile-pic').value;
  
  if (!name || !password) {
    showToast('❌ נא להזין שם וסיסמה כדי להמשיך');
    return;
  }
  
  let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '{}');
  
  if (registeredUsers[name]) {
    // User exists, check password
    if (registeredUsers[name].password === password) {
      currentUser = { name, avatar: registeredUsers[name].avatar };
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      updateUserUI();
      goBack();
      showToast(`👋 ברוך שובך, ${name}!`, 'success');
    } else {
      showToast('❌ סיסמה שגויה לשם משתמש זה', 'error');
    }
  } else {
    // New user, register
    registeredUsers[name] = { password, avatar: profilePic };
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
    
    currentUser = { name, avatar: profilePic };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    updateUserUI();
    
    showToast('✨ ההרשמה בוצעה בהצלחה!', 'success');
    
    setTimeout(() => {
      goBack();
    }, 1500); 
  }
}

function logoutUser() {
  if (confirm('בטוח שברצונך להתנתק?')) {
    currentUser = null;
    isAdmin = false;
    localStorage.removeItem('currentUser');
    localStorage.removeItem('isAdmin');
    updateUserUI();
    showPage('home');
    showToast('👋 התנתקת בהצלחה');
  }
}

function updateUserUI() {
  const btnJoin = document.getElementById('btn-join');
  const profileBadge = document.getElementById('user-profile-badge');
  const btnLogoutNav = document.getElementById('btn-logout-nav');
  const btnInboxNav = document.getElementById('btn-inbox-nav');
  
  if (!btnJoin || !profileBadge || !btnLogoutNav) return;

  const isUserLoggedIn = !!currentUser;
  const isAdminLoggedIn = !!isAdmin;

  if (isUserLoggedIn || isAdminLoggedIn) {
    btnJoin.style.display = 'none';
    profileBadge.style.display = 'flex';
    btnLogoutNav.style.display = 'block';
    if(btnInboxNav && isUserLoggedIn) btnInboxNav.style.display = 'flex';

    if (isAdminLoggedIn && !isUserLoggedIn) {
      document.getElementById('user-badge-avatar').style.display = 'none';
      const badgeEmoji = document.getElementById('user-badge-name').previousElementSibling; // This is the img
      if (badgeEmoji && badgeEmoji.id === 'user-badge-avatar') badgeEmoji.style.display = 'none';
      
      // Since it's admin, we can show a special icon or just the text
      document.getElementById('user-badge-name').textContent = '🛡️ מנהל מערכת';
    } else if (isUserLoggedIn) {
      const avatarImg = document.getElementById('user-badge-avatar');
      avatarImg.style.display = 'block';
      avatarImg.src = currentUser.avatar || 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=200&h=200';
      document.getElementById('user-badge-name').textContent = currentUser.name;
    }
    
    // Update comment inputs for users
    if (isUserLoggedIn) {
      document.querySelectorAll('[id$="-comment-input-area"]').forEach(el => el.style.display = 'block');
      document.querySelectorAll('[id$="-comment-join-prompt"]').forEach(el => el.style.display = 'none');
      document.querySelectorAll('[id$="-comment-user-name"]').forEach(el => el.textContent = currentUser.name);
    }
  } else {
    btnJoin.style.display = 'block';
    profileBadge.style.display = 'none';
    btnLogoutNav.style.display = 'none';
    if(btnInboxNav) btnInboxNav.style.display = 'none';
    
    document.querySelectorAll('[id$="-comment-input-area"]').forEach(el => el.style.display = 'none');
    document.querySelectorAll('[id$="-comment-join-prompt"]').forEach(el => el.style.display = 'block');
  }
}

function submitComment(type) {
  const textarea = document.getElementById(`${type}-new-comment`);
  const text = textarea.value.trim();
  
  if (!text) {
    showToast('❌ אי אפשר לפרסם תגובה ריקה');
    return;
  }
  
  const targetId = type === 'article' ? currentArticleId : activeComicIndex;
  const comments = JSON.parse(localStorage.getItem(`comments_${type}_${targetId}`) || '[]');
  
  const newComment = {
    userName: currentUser.name,
    userAvatar: currentUser.avatar,
    text: text,
    date: new Date().toLocaleString('he-IL', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit' })
  };
  
  comments.push(newComment);
  localStorage.setItem(`comments_${type}_${targetId}`, JSON.stringify(comments));
  
  textarea.value = '';
  renderComments(type, targetId);
  showToast('✅ התגובה פורסמה!');
}

function renderComments(type, targetId) {
  const list = document.getElementById(`${type}-comments-list`);
  if (!list) return;
  
  if (targetId === null || targetId === undefined) {
    list.innerHTML = '';
    return;
  }

  const comments = JSON.parse(localStorage.getItem(`comments_${type}_${targetId}`) || '[]');
  
  if (comments.length === 0) {
    list.innerHTML = `<div style="text-align:center; color:#86868b; padding:20px;">עוד אין תגובות. תהיו הראשונים להגיב!</div>`;
    return;
  }
  
  list.innerHTML = comments.map(c => `
    <div class="comment-card">
      <div class="comment-avatar">
        <img src="${c.userAvatar || 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=200&h=200'}" alt="${escHtml(c.userName)}">
      </div>
      <div class="comment-body">
        <div class="comment-header" style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
          <div>
            <span class="comment-author" style="margin-left: 8px;">${escHtml(c.userName)}</span>
            <span class="comment-date">${c.date}</span>
          </div>
          ${currentUser && currentUser.name !== c.userName ? 
            `<button onclick="openChatWith('${escHtml(c.userName)}')" style="background:none; border:none; color:var(--primary); cursor:pointer; font-size:0.9rem; font-weight:600;"><i class="fa-regular fa-comment"></i> שלח הודעה</button>` 
            : ''}
        </div>
        <div class="comment-text">${escHtml(c.text)}</div>
      </div>
    </div>
  `).join('');
}

// Global variable for current article
let currentArticleId = null;

// Initial call
setTimeout(updateUserUI, 100);
// ========== USER PDF UPLOADS ==========
let selectedUserPdfImages = [];

function handleUserPdfFileSelection(event) {
  const files = Array.from(event.target.files);
  const previewContainer = document.getElementById('user-pdf-image-preview');
  
  // Limit to 4 images
  const remaining = 4 - selectedUserPdfImages.length;
  const toProcess = files.slice(0, remaining);
  
  toProcess.forEach(file => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const b64 = e.target.result;
      selectedUserPdfImages.push(b64);
      renderUserPdfPreviews();
    };
    reader.readAsDataURL(file);
  });
  
  // Clear input so same file can be picked again if removed
  event.target.value = '';
}

function renderUserPdfPreviews() {
  const container = document.getElementById('user-pdf-image-preview');
  if (!container) return;
  
  container.innerHTML = selectedUserPdfImages.map((img, i) => `
    <div class="preview-item">
      <img src="${img}" alt="Preview ${i}" />
      <button class="remove-img-btn" onclick="removeUserPdfImage(${i})">✕</button>
    </div>
  `).join('');
}

function removeUserPdfImage(index) {
  selectedUserPdfImages.splice(index, 1);
  renderUserPdfPreviews();
}

function toggleScheduleSection() {
  const section = document.getElementById('schedule-section');
  if (section.style.display === 'none') {
    section.style.display = 'block';
    
    const now = new Date();
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 1);
    
    const toLocalISO = (d) => {
      const tzOffset = d.getTimezoneOffset() * 60000; 
      return (new Date(d - tzOffset)).toISOString().slice(0, 16);
    };

    const scheduleInput = document.getElementById('user-pdf-schedule');
    scheduleInput.min = toLocalISO(now);
    scheduleInput.max = toLocalISO(maxDate);
    scheduleInput.value = toLocalISO(now);
  } else {
    section.style.display = 'none';
  }
}

async function submitUserPdfItem(isScheduled = false) {
  const title = document.getElementById('user-pdf-title').value.trim();
  const contact = document.getElementById('user-pdf-contact').value.trim();
  const desc = document.getElementById('user-pdf-desc').value.trim();
  const age = document.getElementById('user-pdf-age').value.trim();
  const location = document.getElementById('user-pdf-location').value.trim();
  
  if (!title) {
    showToast('❌ נא להזין שם לפריט');
    return;
  }
  
  if (selectedUserPdfImages.length === 0) {
    showToast('❌ נא לבחור לפחות תמונה אחת להמחשה');
    return;
  }

  let scheduledDateStr = '';
  if (isScheduled) {
    const scheduledVal = document.getElementById('user-pdf-schedule')?.value;
    if (!scheduledVal) {
      showToast('❌ נא לבחור תאריך ושעה לתזמון');
      return;
    }
    const scheduleDateObj = new Date(scheduledVal);
    const now = new Date();
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 1);
    
    if (scheduleDateObj < now) {
      showToast('❌ לא ניתן לתזמן לעבר');
      return;
    }
    if (scheduleDateObj > maxDate) {
      showToast('❌ ניתן לתזמן עד חודש קדימה בלבד');
      return;
    }
    try {
      const dtFormatter = new Intl.DateTimeFormat('he-IL', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });
      scheduledDateStr = dtFormatter.format(scheduleDateObj);
    } catch(e) {
      scheduledDateStr = scheduleDateObj.toLocaleString('he-IL');
    }
  }
  
  // Show loading overlay
  const loader = document.getElementById('upload-loading-overlay');
  if (loader) {
    loader.style.display = 'flex';
    loader.style.opacity = '1';
    loader.style.pointerEvents = 'auto';
  }

  // Faster upload simulation for immediate feel
  setTimeout(() => {
    const newItem = {
      title: title,
      contact: contact,
      desc: desc,
      age: age,
      location: location,
      type: 'תוכן גולשים',
      images: selectedUserPdfImages,
      link: '#',
      date: isScheduled ? `מתוזמן ל: ${scheduledDateStr}` : new Date().toLocaleDateString('he-IL'),
      author: currentUser ? currentUser.name : null
    };
    
    const items = getPdfItems();
    items.unshift(newItem);
    savePdfItems(items);
    
    // Reset form
    document.getElementById('user-pdf-title').value = '';
    document.getElementById('user-pdf-contact').value = '';
    document.getElementById('user-pdf-desc').value = '';
    document.getElementById('user-pdf-age').value = '';
    document.getElementById('user-pdf-location').value = '';
    selectedUserPdfImages = [];
    renderUserPdfPreviews();
    
    // Update view
    renderPdfStoreGrid();
    
    // Hide loading overlay
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
        loader.style.pointerEvents = 'none';
        showToast('✅ הפריט שלך פורסם בחנות בהצלחה!');
        // Quick scroll to the new item
        document.getElementById('pdf-store-grid').scrollIntoView({ behavior: 'smooth' });
      }, 200);
    }
  }, 400);
}

function togglePdfExtension() {
  const section = document.getElementById('pdf-extension-section');
  const arrow = document.getElementById('pdf-extension-arrow');
  if (section.style.display === 'none') {
    section.style.display = 'flex';
    arrow.innerHTML = '▼';
  } else {
    section.style.display = 'none';
    arrow.innerHTML = '◀';
  }
}

// ========== USER PROFILE ==========
function handleProfileBadgeClick() {
  if (currentUser) {
    showUserProfile(currentUser.name);
  } else {
    showPage('join');
  }
}

function showUserProfile(targetUserName) {
  const userName = targetUserName || (currentUser ? currentUser.name : null);
  if (!userName) return;
  
  const isMe = currentUser && userName === currentUser.name;
  
  let userAvatar = 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=200&h=200';
  
  if (isMe) {
    userAvatar = currentUser.avatar || userAvatar;
  } else {
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '{}');
    if (registeredUsers[userName] && registeredUsers[userName].avatar) {
      userAvatar = registeredUsers[userName].avatar;
    }
  }

  document.getElementById('profile-page-name').textContent = isMe ? 'הפרופיל שלי' : `הפרופיל של ${escHtml(userName)}`;
  document.getElementById('profile-page-subtitle').textContent = isMe ? 'היסטוריית התמונות שהעליתי לאתר' : `היסטוריית ההעלאות של ${escHtml(userName)}`;
  document.getElementById('profile-page-avatar').src = userAvatar;
  
  const actionsContainer = document.getElementById('profile-page-actions');
  if (actionsContainer) {
    if (!isMe && currentUser) {
      actionsContainer.innerHTML = `<button class="btn-primary" onclick="openChatWith('${escHtml(userName)}')"><i class="fa-regular fa-comment"></i> שלח הודעה ל-${escHtml(userName)}</button>`;
    } else {
      actionsContainer.innerHTML = '';
    }
  }
  
  renderUserProfileGrid(userName);
  showPage('profile');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderUserProfileGrid(userName) {
  const grid = document.getElementById('profile-history-grid');
  if (!grid) return;
  
  const allItems = getPdfItems();
  const userItems = allItems.map((item, index) => ({ item, index }))
                            .filter(obj => obj.item.author === userName || obj.item.contact === userName);
                            
  if (userItems.length === 0) {
    grid.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:80px; color:#86868b; font-size:1.1rem;">עדיין אין למשתמש העלאות זמינות באתר.</div>';
    return;
  }
  
  grid.innerHTML = userItems.map(obj => {
    const item = obj.item;
    const i = obj.index;
    const icon = typeEmoji[item.type] || '📄';
    const mainImg = (item.images && item.images.length > 0) ? item.images[0] : '';
    
    return `
      <div class="pdf-card" onclick="showProductDetail(${i})">
        ${mainImg ? `<img src="${mainImg}" style="width:100%; height:160px; object-fit:cover; border-radius:12px; margin-bottom:12px;" />` : 
                    `<div class="pdf-card-icon">${icon}</div>`}
        <div class="pdf-card-type">${escHtml(item.type)}</div>
        <div class="pdf-card-title">${escHtml(item.title)}</div>
        ${item.desc ? `<div class="pdf-card-desc">${escHtml(item.desc)}</div>` : ''}
        
        <div class="pdf-card-price" style="font-size: 0.85rem; color: #86868b; text-align: center; width: 100%;">
          <div style="display:flex; flex-direction:column; gap:4px;">
             <span style="color:var(--primary); font-weight:700;">${escHtml(item.date)}</span>
             <span style="font-size:0.8rem;">${escHtml(item.contact || '')}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}
function switchAuthTab(type) {
  const loginTab = document.getElementById('tab-login');
  const registerTab = document.getElementById('tab-register');
  const loginSection = document.getElementById('auth-login-section');
  const registerSection = document.getElementById('auth-register-section');
  
  if (type === 'login') {
    loginTab.classList.add('active');
    registerTab.classList.remove('active');
    loginSection.style.display = 'block';
    registerSection.style.display = 'none';
  } else {
    registerTab.classList.add('active');
    loginTab.classList.remove('active');
    loginSection.style.display = 'none';
    registerSection.style.display = 'block';
  }
}

function handleAuthSubmit(type) {
  if (type === 'login') {
    const name = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value.trim();
    
    if (!name || !password) {
      showToast('❌ נא להזין שם משתמש וסיסמה');
      return;
    }
    
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '{}');
    if (registeredUsers[name]) {
      if (registeredUsers[name].password === password) {
        currentUser = { name, emoji: registeredUsers[name].emoji };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateUserUI();
        goBack();
        showToast(`👋 ברוך שובך, ${name}!`);
      } else {
        showToast('❌ סיסמה שגויה');
      }
    } else {
      showToast('❌ משתמש לא קיים. אנא הירשם.');
    }
  } else {
    saveUserProfile();
  }
}

// ========== PRIVATE MESSAGING ==========
function getPrivateChats() {
  return JSON.parse(localStorage.getItem('privateChats') || '{}');
}

function savePrivateChats(chatsObj) {
  localStorage.setItem('privateChats', JSON.stringify(chatsObj));
}

let activeChatUser = null;

function showInboxPage() {
  if (!currentUser) return;
  activeChatUser = null;
  document.getElementById('chat-header').style.visibility = 'hidden';
  document.getElementById('chat-input-area').style.visibility = 'hidden';
  document.getElementById('chat-messages-area').innerHTML = '<div style="margin: auto; color: #86868b; text-align: center;">בחר שיחה כדי להתחיל או שלח הודעה למשתמשים במערכת.</div>';
  renderInboxList();
  showPage('inbox');
}

function openChatWith(userName) {
  if (!currentUser) {
    showToast('עליך להתחבר כדי לשלוח הודעות');
    return;
  }
  if (userName === currentUser.name) {
    showToast('אינך יכול לשלוח הודעה לעצמך');
    return;
  }
  activeChatUser = userName;
  renderInboxList();
  
  const header = document.getElementById('chat-header');
  const headerName = document.getElementById('chat-header-name');
  const inputArea = document.getElementById('chat-input-area');
  
  header.style.visibility = 'visible';
  headerName.textContent = userName;
  inputArea.style.visibility = 'visible';
  
  renderChatMessages();
  showPage('inbox');
}

function renderInboxList() {
  const chatListEl = document.getElementById('inbox-chat-list');
  if (!chatListEl) return;
  
  if (!currentUser) return; // Prevent errors if logged out
  
  const chats = getPrivateChats();
  const myChats = [];
  
  Object.keys(chats).forEach(key => {
    if (key.includes(currentUser.name)) {
      const names = key.split('_');
      // If a username contains an underscore, this split logic could break, but assuming names don't
      const otherUser = names[0] === currentUser.name ? names[1] : names[0];
      const msgs = chats[key];
      const lastMsg = msgs[msgs.length - 1];
      if (lastMsg) {
         myChats.push({ otherUser, lastMsg });
      }
    }
  });

  myChats.sort((a, b) => new Date(b.lastMsg.rawDate) - new Date(a.lastMsg.rawDate));

  if (myChats.length === 0) {
    chatListEl.innerHTML = '<div style="padding: 20px; color: #86868b; font-size: 0.9rem; text-align:center;">אין לך עדיין שיחות. שלח הודעה למישהו על ידי לחיצה על שמם בתגובות למטה!</div>';
    return;
  }
  
  chatListEl.innerHTML = myChats.map(c => `
    <div class="inbox-chat-item ${activeChatUser === c.otherUser ? 'active' : ''}" onclick="openChatWith('${escHtml(c.otherUser)}')">
      <div class="inbox-chat-avatar" style="background:#0071e3; color:#fff; display:flex; align-items:center; justify-content:center; font-weight:bold; font-size:1.5rem;">
        ${c.otherUser.charAt(0)}
      </div>
      <div class="inbox-chat-info">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <div class="inbox-chat-name">${escHtml(c.otherUser)}</div>
          <div style="font-size:0.7rem; color:#a1a1a6;">${c.lastMsg.date}</div>
        </div>
        <div class="inbox-chat-preview">${c.lastMsg.sender === currentUser.name ? 'אתה: ' : ''}${escHtml(c.lastMsg.text)}</div>
      </div>
    </div>
  `).join('');
}

function renderChatMessages() {
  if (!activeChatUser) return;
  const msgsArea = document.getElementById('chat-messages-area');
  
  const chats = getPrivateChats();
  const key = [currentUser.name, activeChatUser].sort().join('_');
  const msgs = chats[key] || [];
  
  if (msgs.length === 0) {
    msgsArea.innerHTML = '<div style="margin: auto; color: #86868b; text-align: center;">התחל את השיחה עכשיו, שלח הודעה! 👋</div>';
    return;
  }
  
  msgsArea.innerHTML = `
    <div class="chat-bubble-container" style="gap:12px;">
      ${msgs.map(m => {
        const isMe = m.sender === currentUser.name;
        return `
          <div class="chat-bubble ${isMe ? 'sent' : 'received'}">
            <div>${escHtml(m.text)}</div>
            <div class="chat-time" style="text-align: ${isMe ? 'left' : 'right'};">${m.date}</div>
          </div>
        `;
      }).join('')}
    </div>
  `;
  
  msgsArea.scrollTop = msgsArea.scrollHeight;
}

function handleSendPrivateMessage(e) {
  e.preventDefault();
  if (!activeChatUser) return;
  
  const input = document.getElementById('chat-message-input');
  const text = input.value.trim();
  if (!text) return;
  
  const chats = getPrivateChats();
  const key = [currentUser.name, activeChatUser].sort().join('_');
  
  if (!chats[key]) {
    chats[key] = [];
  }
  
  const now = new Date();
  const dateStr = now.toLocaleTimeString('he-IL', {hour: '2-digit', minute:'2-digit'});
  
  chats[key].push({
    sender: currentUser.name,
    text: text,
    date: dateStr,
    rawDate: now.toISOString()
  });
  
  savePrivateChats(chats);
  input.value = '';
  
  renderChatMessages();
  renderInboxList(); // Update sidebar latest text
}

// Initial loads
loadSocialLinks();
